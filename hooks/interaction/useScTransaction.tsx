import {
  SmartContract,
  ContractFunction,
  Address,
  Transaction,
  Account,
  TypedValue,
  TokenPayment,
  TransactionWatcher,
} from '@elrondnetwork/erdjs';
import { ApiNetworkProvider } from '@elrondnetwork/erdjs-network-providers';
import { useSnapshot } from 'valtio';
import {
  accountState,
  loginInfoState,
  setAccountState,
} from '../../store/auth';
import { getNetworkState } from '../../store/network';
import {
  smartContractAddress,
  mintTxBaseGasLimit,
} from '../../config/nftSmartContract';
import { chainType, networkConfig } from '../../config/network';
import { LoginMethodsEnum } from '../../types/enums';
import { useState } from 'react';

interface ScTransactionParams {
  func: ContractFunction;
  gasLimit: number;
  args: TypedValue[] | undefined;
  value: TokenPayment | undefined;
}

export interface ScTransactionCb {
  transaction?: Transaction | null;
  error?: string;
}

export function useScTransaction(cb?: (params: ScTransactionCb) => void) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const accountSnap = useSnapshot(accountState);
  const loginInfoSnap = useSnapshot(loginInfoState);

  const dappProvider = getNetworkState<any>('dappProvider'); // TODO: prepare common interface
  const apiNetworkProvider =
    getNetworkState<ApiNetworkProvider>('apiNetworkProvider');
  let currentNonce = accountSnap.nonce;

  const triggerTx = async ({
    func,
    gasLimit,
    args,
    value,
  }: ScTransactionParams) => {
    setTransaction(null);
    setError('');
    if (
      dappProvider &&
      apiNetworkProvider &&
      currentNonce !== undefined &&
      mintTxBaseGasLimit &&
      smartContractAddress &&
      !pending
    ) {
      setPending(true);

      const contract = new SmartContract({
        address: new Address(smartContractAddress),
      });

      let tx = contract.call({
        func,
        gasLimit,
        args,
        value,
        chainID: networkConfig[chainType].shortId,
      });

      tx.setNonce(currentNonce);

      try {
        if (loginInfoSnap.loginMethod === LoginMethodsEnum.wallet) {
          // TODO: there is no send transaction anymore in web wallet provider
          // It has to be handled based on the uri response data
          await dappProvider.signTransaction(tx);
        } else {
          await dappProvider.signTransaction(tx);
          await apiNetworkProvider.sendTransaction(tx);
          let transactionWatcher = new TransactionWatcher(apiNetworkProvider);
          await transactionWatcher.awaitCompleted(tx);
          setTransaction(tx);
          cb?.({ transaction: tx });
          const sender = tx.getSender();
          const senderAccount = new Account(sender);
          const userAccountOnNetwork = await apiNetworkProvider.getAccount(
            sender
          );
          senderAccount.update(userAccountOnNetwork);
          setAccountState('address', senderAccount.address.bech32());
          setAccountState('nonce', senderAccount.getNonceThenIncrement());
          setAccountState('balance', senderAccount.balance.toString());
        }
      } catch (e: any) {
        // TODO: remove type cast
        setError(e?.message);
        cb?.({ error: e?.message });
      } finally {
        setPending(false);
      }
    } else {
      setError(
        'There is something wrong with the network synchronization. Check if you are logged in.'
      );
    }
  };

  return {
    pending,
    triggerTx,
    transaction,
    error,
  };
}

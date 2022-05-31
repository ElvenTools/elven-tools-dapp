import {
  SmartContract,
  GasLimit,
  Nonce,
  ContractFunction,
  Address,
  Balance,
  Transaction,
  IDappProvider,
  Account,
  ProxyProvider,
  TypedValue,
} from '@elrondnetwork/erdjs';
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
import { LoginMethodsEnum } from '../../types/enums';
import { useState } from 'react';

interface ScTransactionParams {
  func: ContractFunction;
  gasLimit: GasLimit;
  args: TypedValue[] | undefined;
  value: Balance | undefined;
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

  const dappProvider = getNetworkState<IDappProvider>('dappProvider');
  const proxyProvider = getNetworkState<ProxyProvider>('proxyProvider');
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
      dappProvider?.isInitialized() &&
      proxyProvider &&
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
      });

      tx.setNonce(new Nonce(currentNonce));

      try {
        if (loginInfoSnap.loginMethod === LoginMethodsEnum.wallet) {
          await dappProvider.sendTransaction(tx);
        } else {
          const transaction = await dappProvider.signTransaction(tx);
          await proxyProvider.sendTransaction(transaction);
          await transaction.awaitNotarized(proxyProvider);
          setTransaction(transaction);
          cb?.({ transaction });
          const sender = transaction.getSender();
          const senderAccount = new Account(sender);
          await senderAccount.sync(proxyProvider);
          setAccountState('address', senderAccount.address.toString());
          setAccountState(
            'nonce',
            transaction.getNonce().increment().valueOf()
          );
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

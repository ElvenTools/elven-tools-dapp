/* eslint-disable react-hooks/exhaustive-deps */
import {
  ContractFunction,
  Address,
  Transaction,
  Account,
  TypedValue,
  TokenPayment,
  TransactionWatcher,
  ContractCallPayloadBuilder,
} from '@elrondnetwork/erdjs';
import { ApiNetworkProvider } from '@elrondnetwork/erdjs-network-providers';
import {
  WalletProvider,
  WALLET_PROVIDER_CALLBACK_PARAM,
  WALLET_PROVIDER_CALLBACK_PARAM_TX_SIGNED,
} from '@elrondnetwork/erdjs-web-wallet-provider';
import { useSnapshot } from 'valtio';
import {
  accountState,
  loginInfoState,
  setAccountState,
} from '../../store/auth';
import { getNetworkState } from '../../store/network';
import { chainType, networkConfig } from '../../config/network';
import { LoginMethodsEnum } from '../../types/enums';
import { DappProvider } from '../../types/network';
import { getParamFromUrl } from '../../utils/getParamFromUrl';
import { useEffect, useState, useCallback } from 'react';
import { ExtensionProvider } from '@elrondnetwork/erdjs-extension-provider/out';
import { WalletConnectProvider } from '@elrondnetwork/erdjs-wallet-connect-provider/out';
import { HWProvider } from '@elrondnetwork/erdjs-hw-provider/out';
import { errorParse } from '../../utils/errorParse';

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

const smartContractAddress = process.env.NEXT_PUBLIC_NFT_SMART_CONTRACT;
const mintTxBaseGasLimit = Number(process.env.NEXT_PUBLIC_MINT_BASE_GAS_LIMIT);

export function useScTransaction(cb?: (params: ScTransactionCb) => void) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const accountSnap = useSnapshot(accountState);
  const loginInfoSnap = useSnapshot(loginInfoState);

  const dappProvider = getNetworkState<DappProvider>('dappProvider');
  const apiNetworkProvider =
    getNetworkState<ApiNetworkProvider>('apiNetworkProvider');
  const currentNonce = accountSnap.nonce;

  const postSendTx = useCallback(
    async (tx: Transaction) => {
      const transactionWatcher = new TransactionWatcher(apiNetworkProvider);
      await transactionWatcher.awaitCompleted(tx);
      setTransaction(tx);
      cb?.({ transaction: tx });
      const sender = tx.getSender();
      const senderAccount = new Account(sender);
      const userAccountOnNetwork = await apiNetworkProvider.getAccount(sender);
      senderAccount.update(userAccountOnNetwork);
      setAccountState('address', senderAccount.address.bech32());
      setAccountState('nonce', senderAccount.getNonceThenIncrement());
      setAccountState('balance', senderAccount.balance.toString());
    },
    [apiNetworkProvider, cb]
  );

  // Handle Web Wallet transaction sending
  useEffect(() => {
    const walletProviderStatus = getParamFromUrl(
      WALLET_PROVIDER_CALLBACK_PARAM
    );

    const send = async () => {
      if ('getTransactionsFromWalletUrl' in dappProvider) {
        const txs = dappProvider.getTransactionsFromWalletUrl();
        window.history.replaceState(null, '', window.location.pathname);
        // For now it is prepared for handling one transaction at a time
        const transactionObj = txs?.[0];
        if (transactionObj) {
          setPending(true);
          transactionObj.data = Buffer.from(transactionObj.data).toString(
            'base64'
          );
          const transaction = Transaction.fromPlainObject(transactionObj);
          transaction.setNonce(currentNonce);
          try {
            await apiNetworkProvider.sendTransaction(transaction);
            await postSendTx(transaction);
          } catch (e) {
            const err = errorParse(e);
            setError(err);
            cb?.({ error: err });
          } finally {
            setPending(false);
          }
        }
      }
    };

    if (
      walletProviderStatus === WALLET_PROVIDER_CALLBACK_PARAM_TX_SIGNED &&
      apiNetworkProvider &&
      dappProvider
    ) {
      send();
    }
  }, []);

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
      !Number.isNaN(mintTxBaseGasLimit) &&
      smartContractAddress &&
      accountSnap.address &&
      args &&
      !pending
    ) {
      setPending(true);

      const data = new ContractCallPayloadBuilder()
        .setFunction(func)
        .setArgs(args)
        .build();

      const tx = new Transaction({
        data,
        gasLimit,
        value,
        receiver: new Address(smartContractAddress),
        sender: new Address(accountSnap.address),
        chainID: networkConfig[chainType].shortId,
      });

      tx.setNonce(currentNonce);

      try {
        if (dappProvider instanceof WalletProvider) {
          await dappProvider.signTransaction(tx);
        }
        if (dappProvider instanceof ExtensionProvider) {
          await dappProvider.signTransaction(tx);
        }
        if (dappProvider instanceof WalletConnectProvider) {
          await dappProvider.signTransaction(tx);
        }
        if (dappProvider instanceof HWProvider) {
          await dappProvider.signTransaction(tx);
        }
        if (loginInfoSnap.loginMethod !== LoginMethodsEnum.wallet) {
          await apiNetworkProvider.sendTransaction(tx);
          await postSendTx(tx);
        }
      } catch (e) {
        const err = errorParse(e);
        setError(err);
        cb?.({ error: err });
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

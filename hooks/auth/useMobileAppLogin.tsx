/* eslint-disable react-hooks/exhaustive-deps */
import {
  WalletConnectProvider,
  ProxyProvider,
  Account,
} from '@elrondnetwork/erdjs';
import { useState, useRef } from 'react';
import { networkConfig, chainType } from '../../config/network';
import { LoginMethodsEnum } from '../../types/enums';
import {
  setAccountState,
  setLoggingInState,
  setLoginInfoState,
} from '../../store/auth';
import { getNetworkState, setNetworkState } from '../../store/network';
import { getBridgeAddressFromNetwork } from '../../utils/bridgeAddress';
import { getNewLoginExpiresTimestamp } from '../../utils/expiresAt';
import { WcOnLogin } from '../../utils/walletConnectCbs';
import { useLogout } from './useLogout';
import { Login } from '../../types/account';
import { useLoggingIn } from './useLoggingIn';

export const useMobileAppLogin = (params?: Login) => {
  const { logout } = useLogout();
  const { isLoggedIn, isLoggingIn, error } = useLoggingIn();
  const [walletConnectUri, setWalletConnectUri] = useState('');

  const proxyProvider = getNetworkState<ProxyProvider>('proxyProvider');
  const dappProvider = getNetworkState<WalletConnectProvider>('dappProvider');

  const dappProviderRef = useRef<any>(dappProvider);

  const handleOnLogout = () => {
    logout({
      callbackRoute: params?.callbackRoute,
      dappProvider: dappProviderRef?.current,
    });
  };

  const login = async () => {
    const bridgeAddress = getBridgeAddressFromNetwork(
      networkConfig[chainType].walletConnectBridgeAddresses
    );

    if (!bridgeAddress || !proxyProvider) {
      throw Error(
        "Something wen't wrong with the initialization (ProxyProvider or Wallet Connect Bridge address), plese try to refresh the page!"
      );
    }

    const providerHandlers = {
      onClientLogin: async () => {
        const address = await dappProviderRef.current.getAddress();
        const signature = await dappProviderRef.current.getSignature();
        const account = new Account(address);

        setAccountState('address', address);
        setAccountState('balance', account.balance.toString());
        setAccountState('nonce', account.nonce.valueOf());

        setLoggingInState('loggedIn', Boolean(address));
        if (signature) {
          setLoginInfoState('signature', signature);
        }

        setNetworkState('dappProvider', dappProviderRef.current);

        WcOnLogin(
          dappProviderRef.current,
          proxyProvider,
          params?.token,
          params?.callbackRoute
        );
      },
      onClientLogout: handleOnLogout,
    };

    const providerInstance = new WalletConnectProvider(
      proxyProvider,
      bridgeAddress,
      providerHandlers
    );

    try {
      const walletConnectUri: string | undefined =
        await providerInstance.login();
      dappProviderRef.current = providerInstance;

      setLoginInfoState('expires', getNewLoginExpiresTimestamp());
      setLoginInfoState('loginMethod', LoginMethodsEnum.walletconnect);

      generateWcUri(bridgeAddress, walletConnectUri);
      setLoggingInState('pending', true);
    } catch (e: any) {
      setLoggingInState('error', `Error logging in ${e?.message}`);
    } finally {
      setLoggingInState('pending', false);
    }
  };

  const generateWcUri = (bridgeAddress: string, walletConnectUri: string) => {
    if (!bridgeAddress) return;

    const hasUri = Boolean(walletConnectUri);

    if (!hasUri) return;

    if (!params?.token) {
      setWalletConnectUri(walletConnectUri);
    } else {
      const wcUriWithToken = `${walletConnectUri}&token=${params.token}`;
      setWalletConnectUri(wcUriWithToken);
    }
  };

  return {
    login,
    walletConnectUri,
    isLoggedIn,
    isLoggingIn,
    error,
    logout,
  };
};

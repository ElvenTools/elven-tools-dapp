import { WalletProvider } from '@elrondnetwork/erdjs-web-wallet-provider';
import { LoginMethodsEnum } from '../../types/enums';
import { getNewLoginExpiresTimestamp } from '../../utils/expiresAt';
import {
  chainType,
  DAPP_INIT_ROUTE,
  networkConfig,
} from '../../config/network';
import { setLoginInfoState, setLoggingInState } from '../../store/auth';
import { useLogout } from './useLogout';
import { Login } from '../../types/account';
import { useLoggingIn } from './useLoggingIn';
import { errorParse } from '../../utils/errorParse';

export const useWebWalletLogin = (params?: Login) => {
  const { logout } = useLogout();
  const { isLoggedIn, isLoggingIn, error } = useLoggingIn();

  const login = async () => {
    const providerInstance = new WalletProvider(
      `${networkConfig[chainType].walletAddress}${DAPP_INIT_ROUTE}`
    );

    const callbackUrl: string =
      typeof window !== 'undefined'
        ? encodeURIComponent(
            `${window.location.origin}${params?.callbackRoute || '/mint'}`
          )
        : '/mint';
    const providerLoginData = {
      callbackUrl,
      ...(params?.token && { token: params?.token }),
    };

    try {
      await providerInstance.login(providerLoginData);
      setLoginInfoState('loginMethod', LoginMethodsEnum.wallet);
      setLoginInfoState('expires', getNewLoginExpiresTimestamp());
      if (params?.token) {
        setLoginInfoState('loginToken', params.token);
      }
    } catch (e) {
      const err = errorParse(e);
      setLoggingInState('error', `Error logging in ${err}`);
      setLoginInfoState('loginMethod', '');
    } finally {
      setLoggingInState('pending', false);
    }
  };

  return {
    login,
    isLoggedIn,
    isLoggingIn,
    error,
    logout,
  };
};

export default useWebWalletLogin;

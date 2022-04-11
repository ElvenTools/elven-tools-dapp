import { getNetworkState, clearDappProvider } from '../../store/network';
import { IDappProvider } from '@elrondnetwork/erdjs';
import { useSnapshot } from 'valtio';
import {
  clearAuthStates,
  loggingInState,
  setLoggingInState,
} from '../../store/auth';

interface Logout {
  dappProvider?: IDappProvider;
  callbackRoute?: string;
  redirectFn?: (callbackRoute?: string) => void;
}

export const useLogout = () => {
  const loggingInSnap = useSnapshot(loggingInState);
  const dappProviderInstance = getNetworkState<IDappProvider>('dappProvider');

  const logout = async (params?: Logout) => {
    const provider = params?.dappProvider || dappProviderInstance;
    if (!provider) return;

    try {
      setLoggingInState('pending', true);
      await provider.logout();

      clearAuthStates();
      clearDappProvider();

      if (params?.callbackRoute) {
        if (typeof params?.redirectFn === 'function') {
          params?.redirectFn(params?.callbackRoute);
        } else if (typeof window !== 'undefined') {
          window.location.href = params?.callbackRoute;
        }
      }

      setLoggingInState('loggedIn', false);
    } catch (e: any) {
      console.error('error logging out', e?.message);
      setLoggingInState('error', e?.message);
    } finally {
      setLoggingInState('pending', false);
    }
  };

  return {
    logout,
    pending: loggingInSnap.pending,
    loggedIn: loggingInSnap.loggedIn,
    error: loggingInSnap.error,
  };
};

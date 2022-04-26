import {
  WalletConnectProvider,
  ProxyProvider,
  Address,
  Account,
} from '@elrondnetwork/erdjs';
import { setAccountState, setLoginInfoState } from '../store/auth';
import { LoginMethodsEnum } from '../types/enums';
import { optionalRedirect } from '../utils/optionalRedirect';

export const WcOnLogin = async (
  dappProvider: WalletConnectProvider,
  proxyProvider: ProxyProvider,
  callbackRoute?: string
) => {
  const address = await dappProvider?.getAddress();

  const userAddressInstance = new Address(address);
  const userAccountInstance = new Account(userAddressInstance);

  if (proxyProvider) {
    try {
      await userAccountInstance.sync(proxyProvider);
      setAccountState('address', userAccountInstance.address.toString());
    } catch (e: any) {
      console.warn(
        `Something went wrong trying to synchronize the user account: ${e?.message}`
      );
    }
  }

  setLoginInfoState('loginMethod', LoginMethodsEnum.walletconnect);

  optionalRedirect(callbackRoute);
};

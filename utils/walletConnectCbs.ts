import { Address, Account } from '@elrondnetwork/erdjs';
import { WalletConnectProvider } from '@elrondnetwork/erdjs-wallet-connect-provider';
import { ApiNetworkProvider } from '@elrondnetwork/erdjs-network-providers/out';
import { setAccountState, setLoginInfoState } from '../store/auth';
import { LoginMethodsEnum } from '../types/enums';
import { optionalRedirect } from '../utils/optionalRedirect';

export const WcOnLogin = async (
  dappProvider: WalletConnectProvider,
  apiNetworkProvider: ApiNetworkProvider,
  callbackRoute?: string
) => {
  const address = await dappProvider?.getAddress();

  const userAddressInstance = new Address(address);
  const userAccountInstance = new Account(userAddressInstance);

  try {
    const userAccountOnNetwork = await apiNetworkProvider.getAccount(
      userAddressInstance
    );
    userAccountInstance.update(userAccountOnNetwork);
    setAccountState('address', userAccountInstance.address.bech32());
  } catch (e: any) {
    console.warn(
      `Something went wrong trying to synchronize the user account: ${e?.message}`
    );
  }

  setLoginInfoState('loginMethod', LoginMethodsEnum.walletconnect);

  optionalRedirect(callbackRoute);
};

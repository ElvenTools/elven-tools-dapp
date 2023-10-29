// Login component wraps all auth services in one place
// You can always use only one of them if needed
import { useCallback, memo, useState } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { useLogin, LoginMethodsEnum } from '@useelven/core';
import { WalletConnectQRCode } from './WalletConnectQRCode';
import { WalletConnectPairings } from './WalletConnectPairings';
import { ActionButton } from '../ActionButton';
import { LedgerAccountsList } from './LedgerAccountsList';

export const LoginComponent = memo(() => {
  const {
    login,
    isLoggedIn,
    error,
    walletConnectUri,
    getHWAccounts,
    walletConnectPairings,
    walletConnectPairingLogin,
    walletConnectRemovePairing,
  } = useLogin();

  const [loginMethod, setLoginMethod] = useState<LoginMethodsEnum>();

  const handleLogin = useCallback(
    (type: LoginMethodsEnum, ledgerAccountsIndex?: number) => () => {
      setLoginMethod(type);
      login(type, ledgerAccountsIndex);
    },
    [login]
  );

  const handleLedgerAccountsList = useCallback(() => {
    setLoginMethod(LoginMethodsEnum.ledger);
  }, []);

  const resetLoginMethod = useCallback(() => {
    setLoginMethod(undefined);
  }, []);

  if (error)
    return (
      <Stack>
        <Box textAlign="center">{error}</Box>
        <Text textAlign="center" pt={4} fontWeight={700}>
          Close and try again
        </Text>
      </Stack>
    );

  return (
    <>
      <Stack spacing={4} direction="column" align="center">
        {!isLoggedIn && (
          <>
            <ActionButton
              isFullWidth
              onClick={handleLogin(LoginMethodsEnum.walletconnect)}
            >
              xPortal App
            </ActionButton>
            <ActionButton
              isFullWidth
              onClick={handleLogin(LoginMethodsEnum.extension)}
            >
              Browser Extension
            </ActionButton>
            <ActionButton
              isFullWidth
              onClick={handleLogin(LoginMethodsEnum.wallet)}
            >
              Web Wallet
            </ActionButton>
            <ActionButton isFullWidth onClick={handleLedgerAccountsList}>
              Ledger
            </ActionButton>
            <ActionButton
              isFullWidth
              onClick={handleLogin(LoginMethodsEnum.xalias)}
            >
              xAlias
            </ActionButton>
          </>
        )}
      </Stack>
      {loginMethod === LoginMethodsEnum.walletconnect && walletConnectUri && (
        <Box mt={5}>
          <WalletConnectQRCode uri={walletConnectUri} />
        </Box>
      )}

      {loginMethod === LoginMethodsEnum.walletconnect &&
        walletConnectPairings &&
        walletConnectPairings.length > 0 && (
          <WalletConnectPairings
            pairings={walletConnectPairings}
            login={walletConnectPairingLogin}
            remove={walletConnectRemovePairing}
          />
        )}

      {loginMethod === LoginMethodsEnum.ledger && (
        <>
          <LedgerAccountsList
            getHWAccounts={getHWAccounts}
            resetLoginMethod={resetLoginMethod}
            handleLogin={handleLogin}
          />
        </>
      )}
    </>
  );
});

LoginComponent.displayName = 'LoginComponent';

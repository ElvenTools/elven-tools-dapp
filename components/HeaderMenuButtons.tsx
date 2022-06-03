import { useRouter } from 'next/router';
import { Box, Button } from '@chakra-ui/react';
import { useCallback, FC } from 'react';
import { ActionButton } from '../components/ActionButton';
import { SocialMediaIcons } from '../components/SocialMediaIcons';
import { LoginModalButton } from '../components/LoginModalButton';
import { useLoggingIn } from '../hooks/auth/useLoggingIn';

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = ({ enabled }) => {
  const router = useRouter();
  const { isLoggedIn } = useLoggingIn();

  const handleMintClick = useCallback(() => {
    router.push('/mint');
  }, [router]);

  const handleAboutClick = useCallback(() => {
    router.push('/about');
  }, [router]);

  const handleProfilClick = useCallback(() => {
    router.push('/profil');
  }, [router]);

  return (
    <Box
      display="flex"
      gap={5}
      alignItems="center"
      sx={{
        '@media screen and (max-width: 515px)': {
          flexDirection: 'column',
        },
      }}
    >
      {enabled.includes('about') && (
        <Button
          variant="link"
          color="elvenTools.white"
          _focus={{ outline: 'none' }}
          mr={2}
          onClick={handleAboutClick}
        >
          About
        </Button>
      )}

      <SocialMediaIcons />

      {enabled.includes('mint') && (
        <ActionButton onClick={handleMintClick}>Mint</ActionButton>
      )}

      {/* TODO: Protect the /profil routes */}
      {(enabled.includes('profil') && isLoggedIn) && (
        <ActionButton onClick={handleProfilClick}>Profil</ActionButton>
         
      )}
      {enabled.includes('auth') && <LoginModalButton />}
    </Box>
  );
};

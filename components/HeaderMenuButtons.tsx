import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';
import { FC } from 'react';
import { SocialMediaIcons } from './SocialMediaIcons';
import { LoginModalButton } from './core/LoginModalButton';
import { UserAvatar } from './UserAvatar';

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = ({ enabled }) => {
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
        <Link
          color="elvenTools.white"
          mr={2}
          as={NextLink}
          _focus={{ outline: 'none' }}
          href="/about"
        >
          About
        </Link>
      )}

      <SocialMediaIcons />

      <UserAvatar />

      {enabled.includes('mint') && (
        <Link
          as={NextLink}
          href="/mint"
          borderColor="elvenTools.color2.darker"
          borderWidth={2}
          bgColor="transparent"
          py={2}
          px={6}
          rounded="xl"
          fontWeight="normal"
          cursor="pointer"
          color="elvenTools.white"
          userSelect="none"
          _hover={{ bg: 'elvenTools.color2.darker' }}
          transition="background-color .3s"
        >
          Mint
        </Link>
      )}
      {enabled.includes('auth') && <LoginModalButton />}
    </Box>
  );
};

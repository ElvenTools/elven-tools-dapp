import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { LoginModalButton } from './core/LoginModalButton';
import { UserAvatar } from './UserAvatar';

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = ({ enabled }) => {
  return (
    <Box display="flex" gap={5} alignItems="center">
      <UserAvatar />
      {enabled.includes('auth') && <LoginModalButton />}
    </Box>
  );
};

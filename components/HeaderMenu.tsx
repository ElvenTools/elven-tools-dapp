import { FC, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';
import { Logo } from './Logo';

export const HeaderMenu: FC<PropsWithChildren<PropsWithChildren>> = ({
  children,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      gap="2"
      py={{ base: '4', md: '9' }}
    >
      <Logo />
      {children}
    </Box>
  );
};

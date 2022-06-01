import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { MainLayout } from '../components/MainLayout';
import { User } from '../components/User';
import { UserNft } from '../components/UserNft';

const Profil: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'about', 'mint']} />
      </HeaderMenu>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mt={{ base: 8, xl: 12, '2xl': 24 }}
      >
        <User />
        <UserNft />
      </Box>
    </MainLayout>
  );
};

export default Profil;

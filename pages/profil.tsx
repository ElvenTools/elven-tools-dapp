import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { MainLayout } from '../components/MainLayout';
import { Profil } from '../components/Profil';

const Mint: NextPage = () => {   
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'about', 'mint']} />
      </HeaderMenu>
      <Box
        display="flex"
        justifyContent="center"        
        mt={{ base: 8, xl: 12, '2xl': 24 }}
      >
       <Profil/>
      </Box>
    </MainLayout>
  );
};

export default Mint;

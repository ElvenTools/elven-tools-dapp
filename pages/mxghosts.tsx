import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { MintHero } from '../components/MintHero';
import { HeroImage } from '../components/HeroImage';
import { Secondary } from '../components/Secondary';

const Mint: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth', 'about']} />
      </HeaderMenu>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ base: 'column-reverse', md: 'row-reverse' }}
      >
        <MintHero />
        <HeroImage />
      </Box>
      <Secondary />
    </MainLayout>
  );
};

export default Mint;

import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { MainMenu } from '../components/MainMenu';
import { MainMenuButtons } from '../components/MainMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';

const WalletPage: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Our funds are currently spread over 2 wallets, the MultiversX wallet from Gokai Labs and the Ledger wallet from GhostVerse." />
      <MainMenu>
        <MainMenuButtons enabled={['gokaiwallet', 'ghostversewallet']} />
      </MainMenu>
    </MainLayout>
  );
};

export default WalletPage;

import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { MainMenu } from '../components/MainMenu';
import { MainMenuButtons } from '../components/MainMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="The NFT DAO where ghosts govern." />
      <MainMenu>
        <MainMenuButtons
          enabled={[
            'mint',
            'clan',
            'dao',
            'playandearn',
            'roadmap',
            'team',
            'faq',
          ]}
        />
      </MainMenu>
    </MainLayout>
  );
};

export default Home;

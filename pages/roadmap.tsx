import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { Roadmap } from '../components/Roadmap';
import { HomeSectionTitle } from '../components/HomeSectionTitle';

const RoadmapPage: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Running MultiversX Node to secure the network and ensure a decentralized passive income in EGLD." />
      <Roadmap />
    </MainLayout>
  );
};

export default RoadmapPage;

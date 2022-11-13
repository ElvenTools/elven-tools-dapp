import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Earn } from '../components/Earn';

const RoadmapPage: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Hold and enjoy a lifetime passive income in EGLD. Play with us on Twitter and Discord to earn prizes!" />
      <Earn />
    </MainLayout>
  );
};

export default RoadmapPage;

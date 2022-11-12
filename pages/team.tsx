import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { Team } from '../components/Team';
import { HomeSectionTitle } from '../components/HomeSectionTitle';

const TeamPage: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Team" />
      <Team />
    </MainLayout>
  );
};

export default TeamPage;

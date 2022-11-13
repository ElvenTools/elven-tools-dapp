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
      <HomeSectionTitle title="The team is made up entirely of contributors and investors. Join us and help us create the most terrifying GhostVerse ever." />
      <Team />
    </MainLayout>
  );
};

export default TeamPage;

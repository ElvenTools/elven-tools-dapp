import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { Faq } from '../components/Faq';
import { HomeSectionTitle } from '../components/HomeSectionTitle';

const FaqPage: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="FAQ" />
      <Faq />
    </MainLayout>
  );
};

export default FaqPage;

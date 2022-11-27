import { ProtectedPageWrapper } from '../components/core/ProtectedPageWrapper';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { ProfileUserData } from '../components/ProfileUserData';
import { ProfileNFTsList } from '../components/ProfileNFTsList';

const Profile = () => {
  return (
    <ProtectedPageWrapper>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth', 'about', 'mint']} />
        </HeaderMenu>
        <ProfileUserData />
        <ProfileNFTsList />
      </MainLayout>
    </ProtectedPageWrapper>
  );
};

export default Profile;

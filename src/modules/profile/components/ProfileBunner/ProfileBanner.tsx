import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '../../../../common/components/Button/Button';
import Container from "../../../../common/components/Container/Container";
import { routes } from '../../../../core/routes';
import { useAuth } from "../../../auth/hooks/useAuth";
import { Profile } from "../../api/dto/getProfile.in";
import FollowButton from "../FollowButton/FollowButton";

interface ProfileBannerProps {
  profile: Profile;
}

const ProfileBanner: FC<ProfileBannerProps> = ({ profile }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const goToSettings = () => {
    navigate(routes.settings.path);
  }

  return (
    <div className="bg-tagCloudBg pt-8 pb-4 mb-8">
      <Container>
        <div>
          <img
            className="w-24 h-24 mb-4 mx-auto rounded-full"
            src={profile.image}
            alt={`${profile.username} avatar`}
          />
          <h2 className="text-center font-bold text-2xl">{profile.username}</h2>
        </div>
        <div className="flex justify-end">
          {user?.username !== profile.username ? (
            <FollowButton username={profile.username} />
          ) : (
            <Button onClick={goToSettings}>
              <i className='ion-gear-a mr-1'></i>
              Edit profile settings
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ProfileBanner;

import { FC } from 'react';
import Container from "../../../../common/components/Container/Container";
import { Profile } from '../../api/dto/getProfile.in';
import FollowButton from '../FollowButton/FollowButton';

interface ProfileBannerProps {
  profile: Profile;
}

const ProfileBanner: FC<ProfileBannerProps> = ({ profile }) => {
  return (
    <div className="bg-tagCloudBg pt-8 pb-4 mb-8">
      <Container>
        <div>
          <img
            className="w-24 h-24 mb-4 mx-auto rounded-full"
            src={profile.image}
            alt={`${profile.username} avatar`}
          />
          <h2 className='text-center font-bold text-2xl'>{profile.username}</h2>
        </div>
        <div className='flex justify-end'>
          <FollowButton username={profile.username} />
        </div>
      </Container>
    </div>
  );
};

export default ProfileBanner;

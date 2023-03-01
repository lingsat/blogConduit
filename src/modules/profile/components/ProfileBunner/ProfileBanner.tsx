import { FC } from 'react';
import Container from "../../../../common/components/Container/Container";
import FollowButton from '../FollowButton/FollowButton';

interface ProfileBannerProps {
  authorName: string;
}

const ProfileBanner: FC<ProfileBannerProps> = ({ authorName }) => {
  return (
    <div className="bg-tagCloudBg pt-8 pb-4 mb-8">
      <Container>
        <div>
          <img
            className="w-24 h-24 mb-4 mx-auto rounded-full"
            src="https://api.realworld.io/images/demo-avatar.png"
            alt="user-img"
          />
          <h2 className='text-center font-bold text-2xl'>{authorName}</h2>
        </div>
        <div className='flex justify-end'>
          <FollowButton followAuthorName={authorName} />
        </div>
      </Container>
    </div>
  );
};

export default ProfileBanner;

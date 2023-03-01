import { FC } from 'react';

interface FollowButtonProps {
  followAuthorName: string;
}

const FollowButton: FC<FollowButtonProps> = ({ followAuthorName }) => {
  return (
    <button className="text-center cursor-pointer select-none border border-darkgrey py-1 px-2 text-sm rounded-sm text-darkgrey hover:bg-followLinkHover focus:bg-followLinkHover">
      <i className="ion-plus-round" />
      &nbsp; Follow {followAuthorName}
    </button>
  );
};

export default FollowButton;

import { ComponentProps, FC } from "react";
import { useNavigate } from 'react-router-dom';
import Button, {
  ButtonStyleEnum,
} from "../../../../common/components/Button/Button";
import { routes } from '../../../../core/routes';
import { useAuth } from '../../../auth/hooks/useAuth';
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from "../../api/repository";

interface FollowButtonProps {
  username: string;
  isFollowed: boolean;
  btnStyle?: ComponentProps<typeof Button>["btnStyle"];
}

const FollowButton: FC<FollowButtonProps> = ({
  username,
  isFollowed,
  btnStyle = ButtonStyleEnum.DARK,
}) => {
  const [triggerFollow] = useFollowUserMutation();
  const [triggerUnfollow] = useUnfollowUserMutation();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const toggleFollow = () => {
    if (!isLoggedIn) {
      navigate(routes.singIn.path);
      return;
    }

    if (isFollowed) {
      triggerUnfollow({ username: encodeURIComponent(username) });
    } else {
      triggerFollow({ username: encodeURIComponent(username) });
    }
  };

  

  return (
    <Button btnStyle={btnStyle} onClick={toggleFollow}>
      <i className="ion-plus-round" />
      &nbsp; {isFollowed ? "Unfollow" : "Follow"} {username}
    </Button>
  );
};

export default FollowButton;

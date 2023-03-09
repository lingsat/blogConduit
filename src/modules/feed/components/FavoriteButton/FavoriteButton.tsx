import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../common/components/Button/Button";
import { routes } from "../../../../core/routes";
import { useAuth } from "../../../auth/hooks/useAuth";
import {
  useFavoriteArticleMutation,
  useUnfavoriteArticleMutation,
} from "../../api/repository";

interface FavoriteButtonProps {
  count: number;
  slug: string;
  isFavorited: boolean;
  extended?: boolean;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({
  count,
  slug,
  isFavorited = false,
  extended = false,
}) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [triggerFavoriteMutation, favoriteMutationState] =
    useFavoriteArticleMutation();
  const [triggerUnfavoriteMutation, unfavoriteMutationState] =
    useUnfavoriteArticleMutation();

  const handleFavoriteClick = async () => {
    if (!isLoggedIn) {
      navigate(routes.singIn.path);
      return;
    }

    if (isFavorited) {
      await triggerUnfavoriteMutation({ slug }).unwrap;
    } else {
      await triggerFavoriteMutation({ slug }).unwrap;
    }
  };

  return (
    <div className="ml-auto">
      <Button
        variant={isFavorited ? "BASE" : "OUTLINE"}
        btnStyle="GREEN"
        onClick={handleFavoriteClick}
        disabled={
          favoriteMutationState.isLoading || unfavoriteMutationState.isLoading
        }
      >
        <i className="ion-heart"></i>
        <span className="ml-1 font-normal">
          {extended ? `Fovorite Article (${count})` : count}
        </span>
      </Button>
    </div>
  );
};

export default FavoriteButton;

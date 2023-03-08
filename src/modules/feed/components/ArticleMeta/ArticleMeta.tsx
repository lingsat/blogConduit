import { ComponentProps, FC } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '../../../../common/components/Button/Button';
import { useAuth } from '../../../auth/hooks/useAuth';
import FollowButton from "../../../profile/components/FollowButton/FollowButton";
import { Author } from "../../api/dto/globalFeed.in";
import ArticleAuthor, { NameStyleEnum } from "../ArticleAuthor/ArticleAuthor";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

interface ArticleMetaProps {
  author: Author;
  articleCreatedAt: string;
  slug: string;
  isFavorited: boolean;
  authorNameStyle?: ComponentProps<typeof ArticleAuthor>['nameStyle'];
  authorDirection?: ComponentProps<typeof ArticleAuthor>['direction'];
  authorNameSize?: ComponentProps<typeof ArticleAuthor>['nameSize'];
  articleFavoritesCount?: number;
  showActionButtons?: boolean;
}

const ArticleMeta: FC<ArticleMetaProps> = ({
  authorNameStyle = NameStyleEnum.LIGHT,
  author,
  articleCreatedAt,
  slug,
  isFavorited,
  articleFavoritesCount,
  showActionButtons = true,
  authorDirection = 'COL',
  authorNameSize = 'BASE',
}) => {
  const auth = useAuth();
  const navigate = useNavigate();

  const navigateToEdit = () => {
    navigate(`/editor/${slug}`);
  }

  return (
    <div className="flex items-center">
      <ArticleAuthor
        author={author}
        publishedAt={new Date(articleCreatedAt)}
        nameStyle={authorNameStyle}
        direction={authorDirection}
        nameSize={authorNameSize}
      />
      {showActionButtons && (
        <div className="flex items-center gap-4">
          {auth.user?.username === author.username ? (
            <>
              <Button onClick={navigateToEdit}>
                <i className='ion-edit mr-1'></i>
                Edit Article
              </Button>
              <Button btnStyle='RED'>
                <i className='ion-trash-a mr-1'></i>
                Delete Article
              </Button>
            </>
          ) : (
            <>
              <FollowButton username={author.username} btnStyle="LIGHT" isFollowed={author.following}/>
              <FavoriteButton count={articleFavoritesCount || 0} extended={true} slug={slug} isFavorited={isFavorited} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ArticleMeta;

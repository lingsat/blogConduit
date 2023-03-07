import { ComponentProps, FC } from "react";
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
          <FollowButton username={author.username} btnStyle="LIGHT" />
          <FavoriteButton count={articleFavoritesCount || 0} extended={true} slug={slug} isFavorited={isFavorited} />
        </div>
      )}
    </div>
  );
};

export default ArticleMeta;

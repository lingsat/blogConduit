import { FC } from "react";
import FollowButton from "../../../profile/components/FollowButton/FollowButton";
import { Author } from "../../api/dto/globalFeed.in";
import ArticleAuthor, { NameStyleEnum } from "../ArticleAuthor/ArticleAuthor";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

interface ArticleMetaProps {
  authorNameStyle?: keyof typeof NameStyleEnum;
  articleCreatedAt: string;
  articleFavoritesCount: number;
  author: Author;
}

const ArticleMeta: FC<ArticleMetaProps> = ({
  authorNameStyle = NameStyleEnum.LIGHT,
  author,
  articleCreatedAt,
  articleFavoritesCount,
}) => {
  return (
    <div className="flex">
      <ArticleAuthor
        author={author}
        publishedAt={new Date(articleCreatedAt)}
        nameStyle={authorNameStyle}
      />
      <div className="flex items-center gap-4">
        <FollowButton username={author.username} btnStyle="LIGHT" />
        <FavoriteButton count={articleFavoritesCount} extended={true} />
      </div>
    </div>
  );
};

export default ArticleMeta;

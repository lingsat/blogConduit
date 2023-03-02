import { FC } from "react";
import FollowButton from "../../../profile/components/FollowButton/FollowButton";
import ArticleAuthor, { NameStyleEnum } from "../ArticleAuthor/ArticleAuthor";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

interface ArticleMetaProps {
  authorNameStyle?: keyof typeof NameStyleEnum;
}

const ArticleMeta: FC<ArticleMetaProps> = ({
  authorNameStyle = NameStyleEnum.LIGHT,
}) => {
  return (
    <div className="flex">
      <ArticleAuthor
        author={{
          username: "John Snow",
          image: "https://example.com/image",
          following: false,
        }}
        createdAt={new Date()}
        nameStyle={authorNameStyle}
      />
      <div className="flex items-center gap-4">
        <FollowButton username="John Snow" btnStyle='LIGHT' />
        <FavoriteButton count={84} extended={true} />
      </div>
    </div>
  );
};

export default ArticleMeta;

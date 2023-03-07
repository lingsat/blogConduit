import { FC } from "react";
import Container from "../../../../common/components/Container/Container";
import { Author } from "../../api/dto/globalFeed.in";
import ArticleMeta from "../ArticleMeta/ArticleMeta";

interface ArticleBunnerProps {
  title: string;
  articleCreatedAt: string;
  articleFavoritesCount: number;
  author: Author;
  slug: string;
  isFavorited: boolean;
}

const ArticleBunner: FC<ArticleBunnerProps> = ({
  title,
  author,
  articleCreatedAt,
  articleFavoritesCount,
  slug,
  isFavorited
}) => {
  return (
    <div className="bg-articleBannerBg py-8 mb-8">
      <Container>
        <h2 className="text-white text-4xl font-semibold mb-8">{title}</h2>
        <ArticleMeta
          author={author}
          articleCreatedAt={articleCreatedAt}
          articleFavoritesCount={articleFavoritesCount}
          slug={slug}
          isFavorited={isFavorited}
        />
      </Container>
    </div>
  );
};

export default ArticleBunner;

import { FC } from "react";
import { ArticleIn } from "../../dto/globalFeed.in";
import Article from "../Article/Article";

interface ArticleListProps {
  list: ArticleIn[];
}

const ArticleList: FC<ArticleListProps> = ({ list }) => {
  return (
    <>
      {list?.map((article) => (
        <Article key={article.slug} article={article} />
      ))}
    </>
  );
};

export default ArticleList;

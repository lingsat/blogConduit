import { FC } from "react";
import { ArticleIn } from "../../dto/globalFeed.in";
import Article from "../Article/Article";
import FeedToggle from "../FeedToggle/FeedToggle";

interface ArticleListProps {
  list: ArticleIn[];
}

const ArticleList: FC<ArticleListProps> = ({ list }) => {
  return (
    <div className="w-3/4">
      <FeedToggle />
      {list?.map((article) => (
        <Article key={article.slug} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;

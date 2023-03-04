import { FC } from "react";
import { Link } from "react-router-dom";
import { ArticleIn } from "../../api/dto/globalFeed.in";
import ArticleAuthor from '../ArticleAuthor/ArticleAuthor';
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import TagList from "../TagList/TagList";

interface ArticleProps {
  article: ArticleIn;
}

const Article: FC<ArticleProps> = ({ article }) => {
  const { author } = article;
  const date = new Date(article.createdAt);

  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex items-center">
          <ArticleAuthor author={author} publishedAt={date} />
          <FavoriteButton count={article.favoritesCount} />
        </div>
        <Link to={`/article/${encodeURIComponent(article.slug)}`} className="hover:no-underline">
          <h2 className="mb-1 font-semibold text-2xl text-mainblack">
            {article.title}
          </h2>
          <p className="text-darkgrey font-light mb-4">{article.description}</p>
          <div className="flex justify-between items-center gap-2">
            <span className="text-dategray text-sm font-light">
              Read more...
            </span>
            <TagList tagList={article.tagList} />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Article;

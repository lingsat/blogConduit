import { FC } from "react";
import { Link } from "react-router-dom";
import { ArticleIn } from "../../dto/globalFeed.in";
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
          <Link to={`@${author.username}`}>
            <img
              src={author.image}
              alt={`${author.username} avatar`}
              className="inline-block h-8 w-8 rounded-full"
            />
          </Link>
          <div className="mr-6 ml-1 leading-4 inline-flex flex-col">
            <Link to={`@${author.username}`} className="font-medium">
              {author.username}
            </Link>
            <span className="text-dategra text-sm">
              {date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <FavoriteButton count={article.favoritesCount} />
        </div>
        <Link to="/article/qwerty" className="hover:no-underline">
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

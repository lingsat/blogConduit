import clsx from 'clsx';
import { FC } from "react";
import { Link } from "react-router-dom";
import { Author } from "../../dto/globalFeed.in";

export enum NameStyleEnum {
  LIGHT = "LIGHT",
  GREEN = "GREEN",
}

interface ArticleAuthorProps {
  author: Author;
  createdAt: Date;
  nameStyle?: keyof typeof NameStyleEnum;
}

const ArticleAuthor: FC<ArticleAuthorProps> = ({
  author,
  createdAt,
  nameStyle = NameStyleEnum.GREEN,
}) => {
  const usernameClasses = clsx('font-medium', {
    'text-white hover:text-white': nameStyle === NameStyleEnum.LIGHT,
  })

  return (
    <div className="flex">
      <Link to={`/${encodeURIComponent(author.username)}`}>
        <img
          src={author.image}
          alt={`${author.username} avatar`}
          className="inline-block h-8 w-8 rounded-full"
        />
      </Link>
      <div className="mr-6 ml-1 leading-4 inline-flex flex-col">
        <Link
          to={`/${encodeURIComponent(author.username)}`}
          className={usernameClasses}
        >
          {author.username}
        </Link>
        <span className="text-dategray text-sm">
          {createdAt.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>
    </div>
  );
};

export default ArticleAuthor;

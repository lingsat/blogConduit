import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Author } from "../../api/dto/globalFeed.in";

export enum NameStyleEnum {
  LIGHT = "LIGHT",
  GREEN = "GREEN",
}

enum MetaDirectionEnum {
  ROW = 'ROW',
  COL = 'COL',
}

enum NameSizeEnum {
  SM = 'SM',
  BASE = 'BASE',
}

interface ArticleAuthorProps {
  author: Author;
  publishedAt: Date;
  nameStyle?: keyof typeof NameStyleEnum;
  direction?: keyof typeof MetaDirectionEnum;
  nameSize?: keyof typeof NameSizeEnum;
}

const ArticleAuthor: FC<ArticleAuthorProps> = ({
  author,
  publishedAt,
  nameStyle = NameStyleEnum.GREEN,
  direction = MetaDirectionEnum.COL,
  nameSize = NameSizeEnum.BASE,
}) => {
  const usernameClasses = clsx("font-medium", {
    "text-white hover:text-white": nameStyle === NameStyleEnum.LIGHT,
    "text-sm": nameSize === NameSizeEnum.SM,
  });

  const imageClasses = clsx('inline-block rounded-full', {
    'h-8 w-8': nameSize === NameSizeEnum.BASE,
    'h-5 w-5': nameSize === NameSizeEnum.SM,
  })

  const metaClasses = clsx('mr-6 ml-1 leading-4 inline-flex', {
    'flex-col': direction === MetaDirectionEnum.COL,
    'flex-row items-center gap-2': direction === MetaDirectionEnum.ROW,
  })

  return (
    <div className="flex">
      <Link to={`/${encodeURIComponent(author.username)}`}>
        <img
          src={author.image}
          alt={`${author.username} avatar`}
          className={imageClasses}
        />
      </Link>
      <div className={metaClasses}>
        <Link
          to={`/${encodeURIComponent(author.username)}`}
          className={usernameClasses}
        >
          {author.username}
        </Link>
        <span className="text-dategray text-sm">
          {publishedAt.toLocaleDateString("en-US", {
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

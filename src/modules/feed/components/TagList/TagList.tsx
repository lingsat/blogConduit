import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";

enum TagListStyle {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

interface TagListProps {
  tagList: string[];
  styleTheme?: keyof typeof TagListStyle;
  itemAs?: "li" | "a";
}

const TagList: FC<TagListProps> = ({
  tagList,
  styleTheme = TagListStyle.LIGHT,
  itemAs = "li",
}) => {
  const itemClasses = clsx(
    "font-light text-sm border rounded-3xl px-2.5 mb-1",
    {
      "border-lightgray text-tag": styleTheme === TagListStyle.LIGHT,
      "bg-tagItemBg text-white border-tagItemBg hover:bg-tagItemBgHover hover:text-white hover:no-underline":
        styleTheme === TagListStyle.DARK,
      "hover:text-white hover:no-underline":
        styleTheme === TagListStyle.DARK && itemAs === 'a',
    }
  );

  return (
    <ul className="flex flex-wrap gap-1">
      {tagList.map((tag, index) => {
        return itemAs === "li" ? (
          <li key={`${tag}-${index}`} className={itemClasses}>
            {tag}
          </li>
        ) : (
          <Link
            to={`/?tag=${tag}`}
            key={`${tag}-${index}`}
            className={itemClasses}
          >
            {tag}
          </Link>
        );
      })}
    </ul>
  );
};

export default TagList;

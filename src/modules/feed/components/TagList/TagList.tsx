import { FC } from "react";

interface TagListProps {
  tagList: string[];
}

const TagList: FC<TagListProps> = ({ tagList }) => {
  return (
    <ul className="flex gap-1">
      {tagList.map((tag, index) => (
        <li key={`${tag}-${index}`} className="font-light text-sm text-tag border border-lightgray rounded-3xl px-2.5 mb-1">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;

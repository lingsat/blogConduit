import { FC } from "react";
import { Author } from '../../api/dto/globalFeed.in';
import ArticleMeta from "../ArticleMeta/ArticleMeta";

interface CommentItemProps {
  body: string;
  author: Author;
  publishedAt: string;
}

const CommentItem: FC<CommentItemProps> = ({ body, author, publishedAt }) => {
  return (
    <div className="border border-commentBorder rounded-sm">
      <div className="p-5">
        <p>{body}</p>
      </div>
      <div className="border-t border-commentBorder bg-authorCommentBg px-5 py-3">
        <ArticleMeta
          authorNameStyle="GREEN"
          author={author}
          articleCreatedAt={publishedAt}
          articleFavoritesCount={84}
          showActionButtons={false}
          authorDirection="ROW"
          authorNameSize="SM"
        />
      </div>
    </div>
  );
};

export default CommentItem;

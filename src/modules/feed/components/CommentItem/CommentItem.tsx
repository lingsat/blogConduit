import { FC } from "react";
import { Author } from "../../api/dto/globalFeed.in";
import CommentMeta from '../CommentMeta/CommentMeta';

interface CommentItemProps {
  body: string;
  author: Author;
  publishedAt: string;
  slug: string;
  isFavorited: boolean;
  commentId: number;
}

const CommentItem: FC<CommentItemProps> = ({
  body,
  author,
  publishedAt,
  slug,
  commentId
}) => {
  return (
    <div className="border border-commentBorder rounded-sm">
      <div className="p-5">
        <p>{body}</p>
      </div>
      <div className="border-t border-commentBorder bg-authorCommentBg px-5 py-3">
        <CommentMeta
          author={author}
          articleCreatedAt={publishedAt}
          slug={slug}
          commentId={commentId}
          authorNameStyle="GREEN"
          authorDirection="ROW"
          authorNameSize="SM"
        />
      </div>
    </div>
  );
};

export default CommentItem;

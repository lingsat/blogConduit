import { ComponentProps, FC } from "react";
import { toast } from "react-toastify";
import { useAuth } from '../../../auth/hooks/useAuth';
import { Author } from "../../api/dto/globalFeed.in";
import { useDeleteCommentMutation } from "../../api/repository";
import ArticleAuthor, { NameStyleEnum } from "../ArticleAuthor/ArticleAuthor";

interface CommentMetaProps {
  author: Author;
  articleCreatedAt: string;
  slug: string;
  commentId: number;
  authorNameStyle?: ComponentProps<typeof ArticleAuthor>["nameStyle"];
  authorDirection?: ComponentProps<typeof ArticleAuthor>["direction"];
  authorNameSize?: ComponentProps<typeof ArticleAuthor>["nameSize"];
}

const CommentMeta: FC<CommentMetaProps> = ({
  author,
  articleCreatedAt,
  slug,
  commentId,
  authorNameStyle = NameStyleEnum.LIGHT,
  authorDirection,
  authorNameSize,
}) => {
  const auth = useAuth();
  const [triggerDeleteComment, { isLoading }] = useDeleteCommentMutation();

  const deleteComment = async () => {
    try {
      await triggerDeleteComment({ id: commentId, articleSlug: slug }).unwrap();
    } catch (e) {
      toast.error("Something wen`t wrong. Please, try again later");
    }
  };

  const isAuthor = auth.user?.username === author.username;

  return (
    <div className="flex justify-between items-center">
      <ArticleAuthor
        author={author}
        publishedAt={new Date(articleCreatedAt)}
        nameStyle={authorNameStyle}
        direction={authorDirection}
        nameSize={authorNameSize}
      />
      {isAuthor && (
        <button className="hover:text-redError" onClick={deleteComment} disabled={isLoading}>
          <i className="ion-trash-a"></i>
        </button>
      )}
    </div>
  );
};

export default CommentMeta;

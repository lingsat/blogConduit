import { useParams } from "react-router-dom";
import { useGetCommentsForArticleQuery } from "../../api/repository";
import CommentItem from "../CommentItem/CommentItem";
import NewComment from '../NewComment/NewComment';

const CommentsList = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetCommentsForArticleQuery({ slug: slug! });
  
  if (isLoading) {
    return <p>Loading comments...</p>;
  }

  if (!data?.comments.length) {
    return (
      <div>
        <NewComment slug={slug!} />
        <p className='text-center'>No comments found</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-16 flex flex-col gap-3">
      <NewComment slug={slug!} />
      {data.comments.map((comment) => (
        <CommentItem
          key={`comment-${comment.id}`}
          body={comment.body}
          author={comment.author}
          publishedAt={comment.createdAt}
          slug={slug!}
          isFavorited={false}
          commentId={comment.id}
        />
      ))}
    </div>
  );
};

export default CommentsList;

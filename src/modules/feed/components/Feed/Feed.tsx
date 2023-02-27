import Container from "../../../../common/components/Container/Container";
import { useGetGlobalFeedQuery } from "../../api/repository";
import ArticleList from "../ArticleList/ArticleList";

const Feed = () => {
  const { data, error, isLoading } = useGetGlobalFeedQuery('');

  if (isLoading) {
    return <Container>Feed loading...</Container>;
  }

  if (error) {
    return <Container>Error while loading feed</Container>;
  }

  return (
    <Container>
      <div className="flex gap-8 px-2">
        <ArticleList list={data?.articles || []} />
        <div className="w-1/4">tags123123123123123</div>
      </div>
    </Container>
  );
};

export default Feed;

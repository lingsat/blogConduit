import { useSearchParams } from "react-router-dom";
import { useGetGlobalFeedQuery } from "../api/repository";
import { usePageParam } from '../hooks/usePageParamHook';
import Banner from "../../../common/components/Banner/Banner";
import Feed from "../components/Feed/Feed";
import Container from '../../../common/components/Container/Container';
import TagCloud from '../components/TagCloud/TagCloud';
import FeedToggle from '../components/FeedToggle/FeedToggle';

const GlobalFeedPage = () => {
  const [searchParams] = useSearchParams();
  const { page } = usePageParam();

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get("tag"),
  });

  return (
    <>
      <Banner />
      <Container>
        <FeedToggle />
        <div className="flex gap-8">
          <div className='w-3/4'>
            <Feed
              data={data}
              isLoading={isLoading}
              isFetching={isFetching}
              error={error}
            />
          </div>
          <div className='w-1/4'>
            <TagCloud />
          </div>
        </div>
      </Container>
    </>
  );
};

export default GlobalFeedPage;

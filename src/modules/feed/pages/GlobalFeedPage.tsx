import { useMatch, useSearchParams } from "react-router-dom";
import { useGetGlobalFeedQuery } from "../api/repository";
import { usePageParam } from '../hooks/usePageParamHook';
import Banner from "../../../common/components/Banner/Banner";
import Feed from "../components/Feed/Feed";
import Container from '../../../common/components/Container/Container';
import TagCloud from '../components/TagCloud/TagCloud';
import FeedToggle, { FeedToggleItem } from '../components/FeedToggle/FeedToggle';
import { useAuth } from '../../auth/hooks/useAuth';
import { routes } from '../../../core/routes';

const GlobalFeedPage = () => {
  const { isLoggedIn } = useAuth();
  const personalFeed = useMatch(routes.personalFeed.path);

  const [searchParams] = useSearchParams();
  const { page } = usePageParam();  
  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get("tag"),
    isPersonalFeed: personalFeed !== null,
  });

  const feedToggleItems: FeedToggleItem[] = [];

  if(isLoggedIn) {
    feedToggleItems.push({
      text: 'Your Feed',
      link: '/personal-feed'
    });
  }

  return (
    <>
      {!isLoggedIn && <Banner />}
      <Container>
        <FeedToggle items={feedToggleItems} />
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

import { useLocation, useParams } from "react-router-dom";
import { useGetProfileFeedQuery } from "../feed/api/repository";
import { usePageParam } from "../feed/hooks/usePageParamHook";
import Feed from "../feed/components/Feed/Feed";
import ProfileBanner from "./components/ProfileBunner/ProfileBanner";
import Container from '../../common/components/Container/Container';
import FeedToggle from '../feed/components/FeedToggle/FeedToggle';

const ProfilePage = () => {
  const { page } = usePageParam();
  const { profile } = useParams();
  const location = useLocation();

  const { data, isLoading, isFetching, error } = useGetProfileFeedQuery({
    page,
    author: profile!,
  });

  return (
    <>
      <ProfileBanner authorName={profile!} />
      <Container>
        <FeedToggle defaultText='My Articles' defaultLink={location.pathname} />
        <Feed
          data={data}
          isLoading={isLoading}
          isFetching={isFetching}
          error={error}
        />        
      </Container>
    </>
  );
};

export default ProfilePage;

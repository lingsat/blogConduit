import { useLocation, useParams } from "react-router-dom";
import { useGetProfileFeedQuery } from "../../feed/api/repository";
import { usePageParam } from "../../feed/hooks/usePageParamHook";
import Feed from "../../feed/components/Feed/Feed";
import ProfileBanner from "../components/ProfileBunner/ProfileBanner";
import Container from "../../../common/components/Container/Container";
import FeedToggle from "../../feed/components/FeedToggle/FeedToggle";
import { useGetProfileQuery } from '../api/repository';

const ProfilePage = () => {
  const { page } = usePageParam();
  const { profile } = useParams();
  const { pathname } = useLocation();

  const { data: profileInfo, isLoading: profileLoading } = useGetProfileQuery({
    username: profile!
  });

  const { data, isLoading, isFetching, error } = useGetProfileFeedQuery({
    page,
    author: profile!,
    isFavorite: pathname.includes(`/${encodeURIComponent(profile!)}/favorites`),
  });

  const feedToggleItems = [
    {
      text: "Favorite Articles",
      link: `/${encodeURIComponent(profile!)}/favorites`,
    },
  ];

  if (profileLoading) {
    return null;
  }

  return (
    <>
      <ProfileBanner profile={profileInfo!.profile} />
      <Container>
        <FeedToggle
          defaultText="My Articles"
          defaultLink={`/${encodeURIComponent(profile!)}`}
          items={feedToggleItems}
        />
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

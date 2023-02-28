import { useGetPopularTagsQuery } from '../../api/repository';
import TagList from "../TagList/TagList";

const TagCloud = () => {
  const { data, error, isLoading, isFetching } = useGetPopularTagsQuery('');

  if (isLoading || isFetching) {
    return (
      <div className="bg-tagCloudBg p-3 pt-1.5">
        <p className="mb-3">Loading popular tags...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-tagCloudBg p-3 pt-1.5">
        <p className="mb-3">Error while loading popular tags...</p>
      </div>
    );
  }

  return (
    <div className="bg-tagCloudBg p-3 pt-1.5">
      <p className="mb-3">Popular Tags</p>
      <TagList tagList={data!.tags} styleTheme="DARK" itemAs='a' />
    </div>
  );
};

export default TagCloud;

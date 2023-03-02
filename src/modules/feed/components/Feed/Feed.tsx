import { FC } from "react";
import ReactPaginate from "react-paginate";

import { FeedData } from "../../api/repository";
import { FEED_PAGE_SIZE } from "../../consts";

import ArticleList from "../ArticleList/ArticleList";
import { usePageParam } from "../../hooks/usePageParamHook";

interface FeedProps {
  isLoading: boolean;
  isFetching: boolean;
  error: any;
  data?: FeedData;
}

const Feed: FC<FeedProps> = ({ isLoading, isFetching, error, data }) => {
  const { page, setPage } = usePageParam();

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
  };

  if (isLoading || isFetching) {
    return <p className='mt-4'>Feed loading...</p>;
  }

  if (error) {
    return <p className='mt-4'>Error while loading feed</p>;
  }
  if (!data?.articles.length) {
    return <p className='mt-4'>No articles are here... yet.</p>;
  }

  return (
    <>
      <ArticleList list={data?.articles || []} />
      <ReactPaginate
        pageCount={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
        pageRangeDisplayed={Math.ceil(
          (data?.articlesCount || 0) / FEED_PAGE_SIZE
        )}
        previousLabel={null}
        nextLabel={null}
        containerClassName="flex justify-center mb-6"
        pageClassName="group"
        pageLinkClassName="px-3 py-2 text-maingreen bg-white border border-dategray hover:bg-pageHoverBg group-[:nth-child(2)]:rounded-l group-[:nth-last-child(2)]:rounded-r"
        activeClassName="active group"
        activeLinkClassName="group-[.active]:bg-maingreen group-[.active]:text-white group-[.active]:border-maingreen"
        onPageChange={handlePageChange}
        forcePage={page}
      />
    </>
  );
};

export default Feed;

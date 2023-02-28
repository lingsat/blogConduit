import Container from "../../../../common/components/Container/Container";
import { useGetGlobalFeedQuery } from "../../api/repository";
import ArticleList from "../ArticleList/ArticleList";
import ReactPaginate from "react-paginate";
import { FEED_PAGE_SIZE } from "../../consts";
import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { serializeSearchParams } from '../../../../utils/router';
import TagCloud from '../TagCloud/TagCloud';

const Feed = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 0);
  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
    setSearchParams(serializeSearchParams({page: String(selected)}));
  };

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({ page });
  const amount = data?.articlesCount || 0;

  if (isLoading || isFetching) {
    return <Container>Feed loading...</Container>;
  }

  if (error) {
    return <Container>Error while loading feed</Container>;
  }

  return (
    <Container>
      <div className="flex gap-8">
        <div className="w-3/4">
          <ArticleList list={data?.articles || []} />
          <ReactPaginate
            pageCount={Math.ceil(amount / FEED_PAGE_SIZE)}
            pageRangeDisplayed={Math.ceil(amount / FEED_PAGE_SIZE)}
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
        </div>
        <div className="w-1/4">
          <TagCloud />
        </div>
      </div>
    </Container>
  );
};

export default Feed;

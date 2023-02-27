import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../core/axiosBaseQuery";
import { FEED_PAGE_SIZE } from "../consts";
import { GlobalFeedIn } from "../dto/globalFeed.in";

interface GlobalFeedParams {
  page: number;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api",
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeedIn, GlobalFeedParams>({
      query: ({ page }) => ({
        url: "/articles",
        method: "get",
        params: { limit: FEED_PAGE_SIZE, offset: page * FEED_PAGE_SIZE },
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery } = feedApi;

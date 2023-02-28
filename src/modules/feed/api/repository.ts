import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../core/axiosBaseQuery";
import { FEED_PAGE_SIZE } from "../consts";
import { GlobalFeedIn } from "../dto/globalFeed.in";
import { PopularTagsIn } from '../dto/popularTags.in';

interface GlobalFeedParams {
  page: number;
  tag: string | null;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api",
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeedIn, GlobalFeedParams>({
      query: ({ page, tag }) => ({
        url: "/articles",
        params: { limit: FEED_PAGE_SIZE, offset: page * FEED_PAGE_SIZE, tag },
      }),
    }),
    getPopularTags: builder.query<PopularTagsIn, any>({
      query: () => ({
        url: "/tags",
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = feedApi;

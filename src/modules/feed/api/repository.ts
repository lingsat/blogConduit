import { createApi } from "@reduxjs/toolkit/query/react";
import { realWorldBaseQuery } from '../../../core/api/realWorldBaseQuery';
import { FEED_PAGE_SIZE } from "../consts";
import { ArticleIn } from "../dto/globalFeed.in";
import { PopularTagsIn } from "../dto/popularTags.in";
import { transformResponse } from "./utils";

interface BaseFeedParams {
  page: number;
}

interface GlobalFeedParams extends BaseFeedParams {
  tag: string | null;
}

interface ProfileFeedParams extends BaseFeedParams {
  author?: string;
  isFavorite?: boolean;
}

export interface FeedData {
  articles: ArticleIn[];
  articlesCount: number;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: realWorldBaseQuery,
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
      query: ({ page, tag }) => ({
        url: "/articles",
        params: { limit: FEED_PAGE_SIZE, offset: page * FEED_PAGE_SIZE, tag },
      }),
      transformResponse,
    }),
    getProfileFeed: builder.query<FeedData, ProfileFeedParams>({
      query: ({ page, author, isFavorite = false }) => ({
        url: "/articles",
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          author: isFavorite ? undefined : author,
          favorited: !isFavorite ? undefined : author,
        },
      }),
      transformResponse,
    }),
    getPopularTags: builder.query<PopularTagsIn, any>({
      query: () => ({
        url: "/tags",
      }),
    }),
  }),
});

export const {
  useGetGlobalFeedQuery,
  useGetPopularTagsQuery,
  useGetProfileFeedQuery,
} = feedApi;

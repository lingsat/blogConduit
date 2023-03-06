import { createApi } from "@reduxjs/toolkit/query/react";
import { realWorldBaseQuery } from "../../../core/api/realWorldBaseQuery";
import { FEED_PAGE_SIZE } from "../consts";
import { ArticleCommentsIn } from './dto/articleComments.in';
import { ArticleIn } from "./dto/globalFeed.in";
import { PopularTagsIn } from "./dto/popularTags.in";
import { SingleArticleIn } from "./dto/singleArticle.in";
import { transformResponse } from "./utils";

interface BaseFeedParams {
  page: number;
}

interface GlobalFeedParams extends BaseFeedParams {
  tag: string | null;
  isPersonalFeed: boolean;
}

interface ProfileFeedParams extends BaseFeedParams {
  author?: string;
  isFavorite?: boolean;
}

export interface FeedData {
  articles: ArticleIn[];
  articlesCount: number;
}

interface SingleArticleParams {
  slug: string;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: realWorldBaseQuery,
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
      query: ({ page, tag, isPersonalFeed }) => ({
        url: isPersonalFeed ? "/articles/feed" : "/articles",
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
    getSingleArticle: builder.query<SingleArticleIn, SingleArticleParams>({
      query: ({ slug }) => ({
        url: `/articles/${slug}`,
      }),
    }),
    getCommentsForArticle: builder.query<ArticleCommentsIn, SingleArticleParams>({
      query: ({ slug }) => ({
        url: `/articles/${slug}/comments`
      })
    })
  }),
});

export const {
  useGetGlobalFeedQuery,
  useGetPopularTagsQuery,
  useGetProfileFeedQuery,
  useGetSingleArticleQuery,
  useGetCommentsForArticleQuery
} = feedApi;

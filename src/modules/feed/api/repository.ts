import { createApi } from "@reduxjs/toolkit/query/react";
import { realWorldBaseQuery } from "../../../core/api/realWorldBaseQuery";
import { FEED_PAGE_SIZE } from "../consts";
import { ArticleCommentsIn } from "./dto/articleComments.in";
import { CreateArticleInDTO } from "./dto/createArticle.in";
import { CreateArticleOutDTO } from "./dto/createArticle.out";
import { EditArticleInDTO } from "./dto/editArticle.in";
import { EditArticleOutDTO } from "./dto/editArticle.out";
import { FavoriteArticleInDTO } from "./dto/favoriteArticle.in";
import { ArticleIn } from "./dto/globalFeed.in";
import { NewCommentInDTO } from "./dto/newComment.in";
import { NewCommentOutDTO } from "./dto/newComment.out";
import { PopularTagsIn } from "./dto/popularTags.in";
import { SingleArticleIn } from "./dto/singleArticle.in";
import {
  addNewCommentToCache,
  removeCommentFromCache,
  replaceCachedArticle,
  transformResponse,
} from "./utils";

interface BaseFeedParams {
  page: number;
}

export interface GlobalFeedParams extends BaseFeedParams {
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

interface FavoriteArticleParams {
  slug: string;
}

interface CreateArticleParams {
  title: string;
  description: string;
  body: string;
  tags: string;
}

interface DeleteArticleParams {
  slug: string;
}

interface EditArticleParams extends CreateArticleParams {
  slug: string;
}

interface CreateCommentParams {
  articleSlug: string;
  comment: string;
}

interface deleteCommentParams {
  id: number;
  articleSlug: string;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: realWorldBaseQuery,
  tagTypes: ["Article", "Articles"],
  endpoints: (builder) => ({
    // =========
    // queries
    // =========
    getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
      keepUnusedDataFor: 1,
      query: ({ page, tag, isPersonalFeed }) => ({
        url: isPersonalFeed ? "/articles/feed" : "/articles",
        params: { limit: FEED_PAGE_SIZE, offset: page * FEED_PAGE_SIZE, tag },
      }),
      transformResponse,
    }),

    getProfileFeed: builder.query<FeedData, ProfileFeedParams>({
      keepUnusedDataFor: 1,
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
      keepUnusedDataFor: 1,
      query: ({ slug }) => ({
        url: `/articles/${slug}`,
      }),
    }),

    getCommentsForArticle: builder.query<
      ArticleCommentsIn,
      SingleArticleParams
    >({
      keepUnusedDataFor: 1,
      query: ({ slug }) => ({
        url: `/articles/${slug}/comments`,
      }),
    }),
    // =========
    // mutations
    // =========
    favoriteArticle: builder.mutation<
      FavoriteArticleInDTO,
      FavoriteArticleParams
    >({
      query: ({ slug }) => ({
        url: `/articles/${slug}/favorite`,
        method: "post",
      }),
      onQueryStarted: async ({}, { dispatch, queryFulfilled, getState }) => {
        await replaceCachedArticle(getState, queryFulfilled, dispatch, feedApi);
      },
    }),

    unfavoriteArticle: builder.mutation<
      FavoriteArticleInDTO,
      FavoriteArticleParams
    >({
      query: ({ slug }) => ({
        url: `/articles/${slug}/favorite`,
        method: "delete",
      }),
      onQueryStarted: async ({}, { dispatch, queryFulfilled, getState }) => {
        await replaceCachedArticle(getState, queryFulfilled, dispatch, feedApi);
      },
    }),

    createArticle: builder.mutation<CreateArticleInDTO, CreateArticleParams>({
      query: ({ title, description, body, tags }) => {
        const data: CreateArticleOutDTO = {
          article: {
            title,
            description,
            body,
            tagList: tags.split(",").map((tag: string) => tag.trim()),
          },
        };
        return { url: `/articles`, method: "post", data };
      },
    }),

    editArticle: builder.mutation<EditArticleInDTO, EditArticleParams>({
      query: ({ title, description, body, tags, slug }) => {
        const data: EditArticleOutDTO = {
          article: {
            title,
            description,
            body,
            tagList: tags.split(",").map((tag: string) => tag.trim()),
          },
        };
        return { url: `/articles/${slug}`, method: "put", data };
      },
      onQueryStarted: async ({}, { dispatch, queryFulfilled, getState }) => {
        await replaceCachedArticle(getState, queryFulfilled, dispatch, feedApi);
      },
    }),

    deleteArticle: builder.mutation<void, DeleteArticleParams>({
      query: ({ slug }) => ({
        url: `/articles/${slug}`,
        method: "delete",
      }),
    }),

    createComment: builder.mutation<NewCommentInDTO, CreateCommentParams>({
      query: ({ articleSlug, comment }) => {
        const data: NewCommentOutDTO = {
          comment: {
            body: comment,
          },
        };
        return {
          url: `/articles/${articleSlug}/comments`,
          method: "post",
          data,
        };
      },
      onQueryStarted: async ({}, { dispatch, queryFulfilled, getState }) => {
        await addNewCommentToCache(getState, queryFulfilled, dispatch);
      },
    }),

    deleteComment: builder.mutation<any, deleteCommentParams>({
      query: ({ id, articleSlug }) => ({
        url: `/articles/${articleSlug}/comments/${id}`,
        method: "delete",
      }),
      onQueryStarted: async (
        { id },
        { dispatch, queryFulfilled, getState }
      ) => {
        await removeCommentFromCache(getState, queryFulfilled, dispatch, {
          id,
        });
      },
    }),
  }),
});

export const {
  useGetGlobalFeedQuery,
  useGetPopularTagsQuery,
  useGetProfileFeedQuery,
  useGetSingleArticleQuery,
  useGetCommentsForArticleQuery,
  useFavoriteArticleMutation,
  useUnfavoriteArticleMutation,
  useCreateArticleMutation,
  useEditArticleMutation,
  useDeleteArticleMutation,
  useCreateCommentMutation,
  useDeleteCommentMutation,
} = feedApi;

import { createApi } from "@reduxjs/toolkit/query/react";
import { realWorldBaseQuery } from "../../../core/api/realWorldBaseQuery";
import { GetProfileIn } from "./dto/getProfile.in";
import { replaceCachedProfile } from './utils.';

export interface ProfileParams {
  username: string;
}

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: realWorldBaseQuery,
  endpoints: (builder) => ({
    getProfile: builder.query<GetProfileIn, ProfileParams>({
      query: ({ username }) => ({
        url: `/profiles/${username}`,
      }),
    }),
    followUser: builder.mutation<GetProfileIn, ProfileParams>({
      query: ({ username }) => ({
        url: `/profiles/${username}/follow`,
        method: "post",
      }),
      onQueryStarted: async ({}, { dispatch, queryFulfilled, getState }) => {
        await replaceCachedProfile(getState, queryFulfilled, dispatch, profileApi);
      },
    }),
    unfollowUser: builder.mutation<GetProfileIn, ProfileParams>({
      query: ({ username }) => ({
        url: `/profiles/${username}/follow`,
        method: "delete",
      }),
      onQueryStarted: async ({}, { dispatch, queryFulfilled, getState }) => {
        await replaceCachedProfile(getState, queryFulfilled, dispatch, profileApi);
      },
    }),
  }),
});

export const {
  useGetProfileQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
} = profileApi;

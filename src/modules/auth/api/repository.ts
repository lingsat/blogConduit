import { createApi } from "@reduxjs/toolkit/query/react";
import { realWorldBaseQuery } from "../../../core/api/realWorldBaseQuery";
import { SignInInDTO } from "./dto/sign-in.in";
import { SignInOutDTO } from "./dto/sign-in.out";
import { SingUpInDTO } from "./dto/sign-up.in";
import { SingUpOutDTO } from "./dto/sign-up.out";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: realWorldBaseQuery,
  endpoints: (builder) => ({
    signUp: builder.query<SingUpInDTO, SingUpOutDTO["user"]>({
      query: (args) => ({
        url: "/users",
        method: "post",
        data: {
          user: args,
        },
      }),
    }),
    signIn: builder.query<SignInInDTO, SignInOutDTO["user"]>({
      query: (args) => ({
        url: "/users/login",
        method: "post",
        data: {
          user: args,
        },
      }),
    }),
  }),
});

export const { useLazySignUpQuery, useLazySignInQuery } = authApi;

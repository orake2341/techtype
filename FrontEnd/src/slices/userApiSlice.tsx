import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const USERS_URL = "http://localhost:4000/user";

export const usersApiSlice = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: USERS_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/login`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = usersApiSlice;

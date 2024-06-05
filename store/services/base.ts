import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";
import { USER_TOKEN_KEY } from "@/constants";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.spotify.com/",
  prepareHeaders: async (headers) => {
    headers.set("Authorization", `Bearer ${getCookie(USER_TOKEN_KEY)}`);

    return headers;
  },
});

export const baseApi = createApi({
  baseQuery,
  endpoints() {
    return {};
  },
});

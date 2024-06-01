import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { getToken } from "@/helpers";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.spotify.com/",
  prepareHeaders: async (headers) => {
    headers.set("Authorization", `Bearer ${getToken()}`);

    return headers;
  },
});

export const baseApi = createApi({
  baseQuery,
  endpoints() {
    return {};
  },
});

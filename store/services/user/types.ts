import { Artist, Pagination } from "@/types";

export type FetchUserArtistsPayload = {
  after: string | undefined;
  limit: number;
};

export type FetchUserArtistsResponse = {
  artists: Pagination & {
    items: Array<Artist>;
  };
};

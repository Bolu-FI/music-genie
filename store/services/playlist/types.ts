import { OffsetPagination, Playlist } from "@/types";

export type FetchPlaylistsPayload = {
  limit: number;
  offset: number;
};

export type FetchCategoryPlaylistsPayload = FetchPlaylistsPayload & {
  category_id: string;
};

export type FetchPlaylistsResponse = {
  message: string;
  playlists: OffsetPagination & {
    items: Array<Playlist>;
  };
};

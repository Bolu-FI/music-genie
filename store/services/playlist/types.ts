import { OffsetPagination, Playlist, Track, UserProfile } from "@/types";

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

export type FetchPlaylistItemsPayload = {
  limit: number;
  offset: number;
  playlist_id: string;
};

export type FetchPlaylistItemsResponse = OffsetPagination & {
  items: Array<{
    added_at: string;
    added_by: UserProfile;
    track: Track;
  }>;
};

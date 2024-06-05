import { Pagination, Track } from "@/types";

export type FetchRecentlyPlayedPayload = {
  before: string | undefined;
  limit: number;
};

export type FetchRecentlyPlayedResponse = Pagination & {
  items: Array<{
    track: Track;
    played_at: string;
    context: { type: "artist" | "playlist" | "album" | "show" };
  }>;
};

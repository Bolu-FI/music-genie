import { Episode, Pagination, Track } from "@/types";

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

export type StartPlaybackPayload = {
  context_uri?: string;
  uris?: string[];
  offset?: {
    position: number;
  };
  position_ms?: number;
} & PlaybackPayload;

export type FetchQueueResponse = {
  current_playing: Track | Episode;
  queue: Array<Track | Episode>;
};

export type AddToPlaybackPayload = {
  uri: string;
} & PlaybackPayload;

export type ShufflePlaybackPayload = {
  state: string;
} & PlaybackPayload;

export type RepeatPlaybackPayload = {
  state: "context" | "track" | "off";
} & PlaybackPayload;

export type PlaybackVolumePayload = {
  volume_percent: number;
} & PlaybackPayload;

export type SeekAudioPayload = {
  position_ms: number | string;
} & PlaybackPayload;

export type PlaybackPayload = {
  device_id: string;
};

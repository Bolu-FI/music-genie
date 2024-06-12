import { baseUrl } from "@/constants";
import { Api } from "@/helpers/api";
import {
  AddToPlaybackPayload,
  FetchQueueResponse,
  FetchRecentlyPlayedPayload,
  FetchRecentlyPlayedResponse,
  PlaybackPayload,
  PlaybackVolumePayload,
  RepeatPlaybackPayload,
  SeekAudioPayload,
  ShufflePlaybackPayload,
  StartPlaybackPayload
} from "@/store/services/player/types";

export class PlayerService {
  private static PLAYER_API_BASE = `${baseUrl}/me/player`;

  public static async getRecentlyPlayed(payload: FetchRecentlyPlayedPayload) {
    return await Api.get<FetchRecentlyPlayedResponse>(
      `${this.PLAYER_API_BASE}/recently-played`,
      {
        query: { ...payload, type: "track" },
      },
    );
  }

  public static async getQueue() {
    return await Api.get<FetchQueueResponse>(`${this.PLAYER_API_BASE}/queue`);
  }

  public static async startPlayback({
    device_id,
    ...payload
  }: StartPlaybackPayload) {
    return await Api.put(`${this.PLAYER_API_BASE}/play`, {
      body: payload,
      query: { device_id },
      headers: { Accept: "*" },
    });
  }

  public static async addToPlayback(payload: AddToPlaybackPayload) {
    return await Api.post<FetchRecentlyPlayedResponse>(
      `${this.PLAYER_API_BASE}/queue`,
      {
        query: payload,
        headers: { Accept: "*" ,
      },
    );
  }

  public static async pausePlayback({ device_id }: PlaybackPayload) {
    return await Api.put(`${this.PLAYER_API_BASE}/pause`, {
      query: { device_id },
      headers: { Accept: "*" }
    });
  }

  public static async skipToNext({ device_id }: PlaybackPayload) {
    return await Api.post(`${this.PLAYER_API_BASE}/next`, {
      query: { device_id },
      headers: { Accept: "*" }
    });
  }

  public static async skipToPrevious({ device_id }: PlaybackPayload) {
    return await Api.post(`${this.PLAYER_API_BASE}/previous`, {
      query: { device_id },
      headers: { Accept: "*" }
    });
  }

  public static async seekToPosition(payload: SeekAudioPayload) {
    return await Api.put(`${this.PLAYER_API_BASE}/seek`, {
      query: payload,
      headers: { Accept: "*" }
    });
  }

  public static async setRepeatMode(payload: RepeatPlaybackPayload) {
    return await Api.put(`${this.PLAYER_API_BASE}/repeat`, {
      query: payload,
      headers: { Accept: "*" }
    });
  }

  public static async changeVolume(payload: PlaybackVolumePayload) {
    return await Api.put(`${this.PLAYER_API_BASE}/volume`, {
      query: payload,
      headers: { Accept: "*" }
    });
  }

  public static async toggleShuffle(payload: ShufflePlaybackPayload) {
    return await Api.put(`${this.PLAYER_API_BASE}/shuffle`, {
      query: payload,
      headers: { Accept: "*" }
    });
  }
}

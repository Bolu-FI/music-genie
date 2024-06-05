import { baseUrl } from "@/constants";
import {
  FetchRecentlyPlayedPayload,
  FetchRecentlyPlayedResponse,
} from "@/store/services/track/types";
import { Api } from "@/helpers/api";

export class PlayerService {
  private static USERS_API_BASE = `${baseUrl}/me/player`;

  public static async getRecentlyPlayed(payload: FetchRecentlyPlayedPayload) {
    return await Api.get<FetchRecentlyPlayedResponse>(
      `${this.USERS_API_BASE}/recently-played`,
      {
        query: { ...payload, type: "track" },
      },
    );
  }
}

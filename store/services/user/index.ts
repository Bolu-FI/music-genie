import { getCookie, setCookie } from "cookies-next";

import {
  baseUrl,
  USER_REFRESH_TOKEN_KEY,
  USER_TOKEN_EXPIRATION_DATE_KEY,
  USER_TOKEN_KEY,
} from "@/constants";
import { refreshAccessToken } from "@/middleware";
import { Api } from "@/helpers/api";
import {
  FetchUserArtistsPayload,
  FetchUserArtistsResponse,
} from "@/store/services/user/types";

export class UserService {
  private static USERS_API_BASE = `${baseUrl}/me`;

  public static async reAuthenticate() {
    const refreshToken = getCookie(USER_REFRESH_TOKEN_KEY) || "";
    const accessToken = getCookie(USER_TOKEN_KEY) || "";

    if (!refreshToken && !accessToken) {
      return false;
    }

    try {
      const response = await refreshAccessToken(refreshToken, accessToken);

      if (!response.access_token) {
        return false;
      }

      setCookie(USER_TOKEN_KEY, response.access_token);
      setCookie(USER_REFRESH_TOKEN_KEY, response.refresh_token);
      setCookie(
        USER_TOKEN_EXPIRATION_DATE_KEY,
        (Date.now() + response.expires_in).toString(),
      );

      return response.access_token;
    } catch (error) {
      return false;
    }
  }

  public static async getFollowedArtists(payload: FetchUserArtistsPayload) {
    return await Api.get<FetchUserArtistsResponse>(
      `${this.USERS_API_BASE}/following`,
      {
        query: { ...payload, type: "artist" },
      },
    );
  }
}

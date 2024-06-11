import { baseUrl } from "@/constants";
import {
  FetchCategoryPlaylistsPayload,
  FetchPlaylistItemsPayload,
  FetchPlaylistItemsResponse,
  FetchPlaylistsPayload,
  FetchPlaylistsResponse,
} from "@/store/services/playlist/types";
import { Api } from "@/helpers/api";

export class PlaylistService {
  private static USERS_API_BASE = `${baseUrl}/me`;
  private static CATEGORY_API_BASE = `${baseUrl}/browse`;
  private static PLAYLIST_API_BASE = `${baseUrl}/playlists`;

  public static async getFeaturedPlaylists(payload: FetchPlaylistsPayload) {
    return await Api.get<FetchPlaylistsResponse>(
      `${this.CATEGORY_API_BASE}/featured-playlists`,
      {
        query: payload,
      },
    );
  }

  public static async getCategoryPlaylists({
    category_id,
    ...payload
  }: FetchCategoryPlaylistsPayload) {
    return await Api.get<FetchPlaylistsResponse>(
      `${this.CATEGORY_API_BASE}/categories/${category_id}/playlists`,
      {
        query: payload,
      },
    );
  }

  public static async getUserPlaylists(payload: FetchPlaylistsPayload) {
    return await Api.get<FetchPlaylistsResponse>(
      `${this.USERS_API_BASE}/playlists`,
      {
        query: payload,
      },
    );
  }

  public static async getPlaylistItems({
    playlist_id,
    ...payload
  }: FetchPlaylistItemsPayload) {
    return await Api.get<FetchPlaylistItemsResponse>(
      `${this.PLAYLIST_API_BASE}/${playlist_id}/tracks`,
      {
        query: payload,
      },
    );
  }
}

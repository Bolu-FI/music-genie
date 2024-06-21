import { baseUrl } from "@/constants";
import { Api } from "@/helpers/api";

export class TrackService {
  private static TRACK_API_BASE = `${baseUrl}/me/tracks`;

  public static async checkIfTracksInLibrary(
    payload: string[],
  ): Promise<boolean[]> {
    return await Api.get(`${this.TRACK_API_BASE}/contains`, {
      query: { ids: payload.join(",") },
    });
  }

  public static async saveTracks(payload: string[]) {
    return await Api.put(`${this.TRACK_API_BASE}`, {
      query: { ids: payload.join(",") },
    });
  }

  public static async removeTracks(payload: string[]) {
    return await Api.delete(`${this.TRACK_API_BASE}`, {
      query: { ids: payload.join(",") },
    });
  }
}

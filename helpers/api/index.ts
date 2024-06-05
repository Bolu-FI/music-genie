import { getCookie } from "cookies-next";
import { pickBy } from "lodash";

import { UserService } from "@/store/services/user";
import { USER_TOKEN_KEY } from "@/constants";

export class Api {
  private static token = getCookie(USER_TOKEN_KEY);
  private static headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${Api.token}`,
  };

  static async get<T extends Record<string, any> | string>(
    endpoint: string,
    config?: { query?: Record<string, any>; headers?: Record<string, any> },
  ) {
    const url = new URL(endpoint);

    url.search = new URLSearchParams(
      pickBy(config?.query, (value) => !!value),
    ).toString();

    let response = await fetch(url, {
      method: "GET",
      headers: { ...this.headers, ...config?.headers },
    });

    if (response.status === 401) {
      const newToken = await UserService.reAuthenticate();

      if (newToken) {
        Api.token = newToken;
        response = await fetch(url, {
          method: "GET",
          headers: {
            ...this.headers,
            ...config?.headers,
            Authorization: `Bearer ${Api.token}`,
          },
        });
      }
    }

    if (response.status !== 200) {
      const data = (await response.json()) as any;

      throw data.message;
    }

    return (await response.json()) as unknown as T;
  }

  static async post<T extends Record<string, any> | string>(
    endpoint: string,
    config?: {
      query?: Record<string, any>;
      headers?: Record<string, any>;
      body?: Record<string, any>;
    },
  ) {
    const url = new URL(endpoint);

    url.search = new URLSearchParams(
      pickBy(config?.query, (value) => !!value),
    ).toString();

    let response = await fetch(url, {
      method: "POST",
      headers: { ...this.headers, ...config?.headers },
      body: JSON.stringify(config?.body),
    });

    if (response.status === 401) {
      const newToken = await UserService.reAuthenticate();

      if (newToken) {
        Api.token = newToken;
        response = await fetch(endpoint, {
          method: "POST",
          headers: {
            ...this.headers,
            ...config?.headers,
            Authorization: `Bearer ${Api.token}`,
          },
          body: JSON.stringify(config?.body),
        });
      }
    }

    if (response.status !== 200) {
      const data = (await response.json()) as any;

      throw data.message;
    }

    return (await response.json()) as unknown as T;
  }
}

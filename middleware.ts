import { NextRequest, NextResponse } from "next/server";

import { AuthResp } from "@/types";
import {
  AUTH_CODE_KEY,
  CODE_VERIFIER_KEY,
  USER_REFRESH_TOKEN_KEY,
  USER_TOKEN_EXPIRATION_DATE_KEY,
  USER_TOKEN_KEY,
} from "@/constants";

const redirectToAuth = async () => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomValues = crypto.getRandomValues(new Uint8Array(64));
  const code_verifier = randomValues.reduce(
    (acc, x) => acc + possible[x % possible.length],
    "",
  );
  const data = new TextEncoder().encode(code_verifier);
  const hashed = await crypto.subtle.digest("SHA-256", data);

  const code_challenge_base64 = btoa(
    // @ts-ignore
    String.fromCharCode(...new Uint8Array(hashed)),
  )
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  const authUrl = new URL(process.env.AUTHORIZATION_URL || "");
  const params: Record<string, string> = {
    response_type: "code",
    client_id: process.env.CLIENT_ID || "",
    scope: process.env.SCOPE || "",
    code_challenge_method: "S256",
    code_challenge: code_challenge_base64,
    redirect_uri: process.env.REDIRECT_URL || "",
  };

  authUrl.search = new URLSearchParams(params).toString();

  const redirect = NextResponse.redirect(authUrl);

  redirect.cookies.set(CODE_VERIFIER_KEY, code_verifier);

  return redirect;
};

function saveToken(redirect: NextResponse, response: AuthResp) {
  console.log(response);
  redirect.cookies.set(USER_TOKEN_KEY, response.access_token);
  redirect.cookies.set(USER_REFRESH_TOKEN_KEY, response.refresh_token);
  redirect.cookies.set(
    USER_TOKEN_EXPIRATION_DATE_KEY,
    (Date.now() + response.expires_in * 1000).toString(),
  );
}

const getTokenFromServer = async (code: string, codeVerifier: string) => {
  const params = new URLSearchParams({
    code_verifier: codeVerifier,
    code,
    grant_type: "authorization_code",
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID || "",
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL || "",
  });

  return await fetch(process.env.TOKEN_URL || "", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  }).then((res) => res.json() as Promise<AuthResp>);
};

export const refreshAccessToken = async (
  refreshToken: string,
  accessToken: strin,
) => {
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    access_token: accessToken,
    client_id: process.env.CLIENT_ID || "",
  });

  return await fetch(process.env.TOKEN_URL || "", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  }).then((res) => res.json() as Promise<AuthResp>);
};

const checkForCode = async (request: NextRequest) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const cookies = request.cookies;

  const code = searchParams.get(AUTH_CODE_KEY) || "";
  const codeVerifier = cookies.get(CODE_VERIFIER_KEY)?.value || "";

  try {
    const response = await getTokenFromServer(code, codeVerifier);

    url.searchParams.delete(AUTH_CODE_KEY);
    const updatedUrl = url.search ? url.href : url.href.replace("?", "");

    const redirect = NextResponse.redirect(
      new URL(updatedUrl, request.nextUrl.origin),
    );

    saveToken(redirect, response);

    return redirect;
  } catch (error) {}
};

const reAuthenticate = async (request: NextRequest) => {
  const url = new URL(request.url);
  const cookies = request.cookies;

  const refreshToken = cookies.get(USER_REFRESH_TOKEN_KEY)?.value || "";
  const accessToken = cookies.get(USER_TOKEN_KEY)?.value || "";

  try {
    const response = await refreshAccessToken(refreshToken, accessToken);

    const redirect = NextResponse.redirect(
      new URL(url, request.nextUrl.origin),
    );

    saveToken(redirect, response);

    return redirect;
  } catch (error) {}
};

const isAuthenticated = async (request: NextRequest) => {
  const cookies = request.cookies;
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  const code = searchParams.get(AUTH_CODE_KEY) || "";
  const token = cookies.get(USER_TOKEN_KEY)?.value || "";
  const refreshToken = cookies.get(USER_REFRESH_TOKEN_KEY)?.value || "";
  const expiresAt = +(
    cookies.get(USER_TOKEN_EXPIRATION_DATE_KEY)?.value || "0"
  );

  console.log(`Token: ${token}`, `Refresh: ${refreshToken}`);

  if (code) {
    console.log("I am checking for code");
    return checkForCode(request);
  }

  if (!token && !refreshToken) {
    console.log("I am redirecting to auth");
    return redirectToAuth();
  }

  if ((!token || Date.now() > expiresAt) && refreshToken) {
    console.log("I am re-authenticating");
    return reAuthenticate(request);
  }

  return !!token;
};

export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const origin = url.origin;
  const pathname = url.pathname;
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-url", request.url);
  requestHeaders.set("x-origin", origin);
  requestHeaders.set("x-pathname", pathname);
  requestHeaders.set("Cookie", request.cookies.toString());

  const isLoggedIn = await isAuthenticated(request);

  if (typeof isLoggedIn !== "boolean") {
    return isLoggedIn;
  }

  return NextResponse.next({ headers: requestHeaders });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

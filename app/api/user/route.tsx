import { cookies } from "next/headers";

import { USER_TOKEN_KEY } from "@/constants";

export async function GET() {
  const cookieStore = cookies();

  const token = cookieStore.get(USER_TOKEN_KEY)?.value || "";

  if (!token) {
    return new Response(JSON.stringify({ error: "Invalid token" }), {
      status: 401,
    });
  }

  try {
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return new Response(JSON.stringify(await response.json()), {
        status: response.status,
      });
    }

    return new Response(await response.text());
  } catch (e) {
    return new Response(JSON.stringify(e), {
      status: 500,
    });
  }
}

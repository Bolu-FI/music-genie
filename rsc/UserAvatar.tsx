import { Avatar } from "@nextui-org/avatar";
import { cookies } from "next/headers";

import { UserProfile } from "@/types";

export default async function UserAvatar() {
  const cookieHeader = cookies().toString();
  const res = await fetch(`${process.env.REDIRECT_URL}/api/user`, {
    cache: "force-cache",
    headers: {
      Cookie: cookieHeader,
    },
  });

  if (!res.ok) {
    return <></>;
  }

  const user = (await res.json()) as UserProfile;

  return <Avatar size="md" src={user.images[0].url} />;
}

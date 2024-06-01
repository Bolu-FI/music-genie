import { Navbar as NextUINavbar } from "@nextui-org/navbar";

import Menu from "./Menu";

import { UserAvatar } from "@/rsc";

const classNames = {
  wrapper: "px-0",
};

export const Navbar = () => {
  return (
    <NextUINavbar
      className="px-1.5 py-1"
      classNames={classNames}
      height={60}
      maxWidth="2xl"
      position="sticky"
    >
      <Menu>
        {/*@ts-expect-error Async Server Component*/}
        <UserAvatar />
      </Menu>
    </NextUINavbar>
  );
};

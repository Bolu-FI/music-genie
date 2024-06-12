import { Navbar as NextUINavbar } from "@nextui-org/navbar";
import clsx from "clsx";

import Menu from "./Menu";

import { UserAvatar } from "@/rsc";
import { DefaultProps } from "@/types";

const classNames = {
  wrapper: "px-0",
};

export const Navbar = ({ className }: DefaultProps) => {
  return (
    <NextUINavbar
      className={clsx("", className)}
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

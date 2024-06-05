import { Navbar as NextUINavbar } from "@nextui-org/navbar";

import Menu from "./Menu";

import { UserAvatar } from "@/rsc";
import { DefaultProps } from "@/types";
import clsx from "clsx";

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

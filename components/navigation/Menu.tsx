"use client";

import React, { PropsWithChildren } from "react";
import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Input } from "@nextui-org/input";

import { siteConfig } from "@/config/site";
import { SearchIcon } from "@/components/icons";

type Prop = {};

const Search = () => (
  <Input
    aria-label="Search"
    classNames={{
      inputWrapper: "bg-primary-background min-w-[350px]",
      input: "text-sm placeholder:text-foreground",
      innerWrapper: "text-primary",
    }}
    labelPlacement="outside"
    placeholder="Search..."
    startContent={<SearchIcon fill="none" />}
    type="search"
  />
);

const Menu: React.FC<PropsWithChildren<Prop>> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div>
      <ul className="flex pt-1.5">
        {siteConfig.navMenuItems.map((item) => (
          <NavbarItem
            key={item.href}
            className={clsx(
              "py-px px-5 w-[220px] text-sm text-foreground rounded-medium data-[active=true]:text-primary data-[active=true]:font-medium",
              {
                "data-[active=true]:bg-primary-background":
                  pathname !== "/search",
              },
            )}
            isActive={item.href === pathname}
          >
            {item.href === "/search" && pathname === "/search" ? (
              <Search />
            ) : (
              <NextLink
                className="tracking-wider flex gap-3 w-full items-center"
                href={item.href}
              >
                <item.icon
                  className={clsx({ "fill-primary": item.href === pathname })}
                  size={40.41}
                />
                {item.label}
              </NextLink>
            )}
          </NavbarItem>
        ))}
      </ul>
      <NavbarContent className="flex" justify="end">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              className="tracking-wider flex gap-2.5 w-full items-center"
              href={item.href}
            >
              <item.icon size={40.41} />
            </NextLink>
          </NavbarItem>
        ))}
        {children}
      </NavbarContent>
    </div>
  );
};

export default Menu;

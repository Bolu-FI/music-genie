"use client";

import React, { useState } from "react";
import clsx from "clsx";

import { SiteConfig, siteConfig } from "@/config/site";
import { DefaultProps, IconSvgProps } from "@/types";
import { ChevronRightIcon } from "@/components/icons";

const menuItemClass =
  "flex w-full px-2 py-1.5 gap-2 items-center hover:bg-primary-background cursor-pointer rounded-medium";

const ExpandingMenuItem = (props: {
  title: string;
  icon: React.FC<IconSvgProps>;
  children: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpansion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <button className={menuItemClass} type="button" onClick={toggleExpansion}>
        <props.icon />
        <p>{props.title}</p>

        <span
          className={clsx("ml-auto transition-transform", {
            "rotate-90": isOpen,
          })}
        >
          <ChevronRightIcon />
        </span>
      </button>
      <div
        className={clsx(
          "max-h-0 overflow-hidden transition-[max-height] ease-linear duration-[0.3s]",
          { "max-h-[500px]": isOpen },
        )}
      >
        {props.children}
      </div>
    </div>
  );
};

type MenuType = SiteConfig["extraMenu"][0];

const MenuItem = ({ menu }: { menu: MenuType }) => {
  if ("subMenu" in menu) {
    return (
      <ExpandingMenuItem icon={menu.icon} title={menu.label}>
        {/*<ul className="flex flex-col gap-2.5 px-5 pt-3.5 cursor-pointer">*/}
        {/*  {menu.subMenu?.map((item) => (*/}
        {/*    <li*/}
        {/*      key={item.label}*/}
        {/*      className="flex gap-2 items-center pl-2 hover:text-primary"*/}
        {/*    >*/}
        {/*      <item.icon size={24} />*/}
        {/*      <p>{item.label}</p>*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </ExpandingMenuItem>
    );
  }

  return (
    <div className={menuItemClass}>
      <menu.icon size={40.41} />
      <p>{menu.label}</p>
    </div>
  );
};

type Prop = DefaultProps & {};

const Sidebar: React.FC<Prop> = ({ className }) => {
  return (
    <aside
      className={clsx(
        "flex flex-col gap-3 overflow-y-auto overflow-x-hidden text-sm scroll-padding",
        className,
      )}
    >
      {siteConfig.extraMenu.map((item) => (
        <MenuItem key={item.label} menu={item} />
      ))}
    </aside>
  );
};

export default Sidebar;

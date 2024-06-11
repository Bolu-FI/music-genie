"use client";

import { Tab, Tabs } from "@nextui-org/tabs";

import { Layout } from "@/components/home";
import CustomizeFeed from "@/components/home/CustomizeFeed";

const tabCustomClass = {
  tabList: "bg-transparent gap-2.5",
  cursor: "dark:bg-primary",
  tab: "py-2 px-3.5 bg-primary-background",
  tabContent:
    "text-sm group-data-[selected=true]:font-bold group-data-[selected=true]:text-primary-background",
};

export default function Home() {
  return (
    <section className="flex flex-col py-3 px-2 overflow-y-auto relative">
      <CustomizeFeed className="absolute top-3 py-2 right-3" />
      <Tabs aria-label="View Options" classNames={tabCustomClass}>
        <Tab key="all" title="All">
          <Layout />
        </Tab>
        <Tab key="music" title="Music">
          <Layout title="music" />
        </Tab>
        <Tab key="podcast" title="Podcast">
          <Layout title="podcast" />
        </Tab>
      </Tabs>
    </section>
  );
}

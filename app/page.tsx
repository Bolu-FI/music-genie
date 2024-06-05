"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import AllTabLayout from "@/components/home/AllTabLayout";
import MusicTabLayout from "@/components/home/MusicTabLayout";
import PodcastTabLayout from "@/components/home/PodcastTabLayout";

const tabCustomClass = {
  tabList: "bg-transparent gap-2.5",
  cursor: "dark:bg-primary",
  tab: "py-2 px-3.5 bg-primary-background",
  tabContent:
    "text-sm group-data-[selected=true]:font-bold group-data-[selected=true]:text-primary-background",
};

export default function Home() {
  return (
    <section className="flex flex-col py-3 px-2 overflow-y-auto">
      <Tabs aria-label="View Options" classNames={tabCustomClass}>
        <Tab key="all" title="All">
          <AllTabLayout />
        </Tab>
        <Tab key="music" title="Music">
          <MusicTabLayout />
        </Tab>
        <Tab key="podcast" title="Podcast">
          <PodcastTabLayout />
        </Tab>
        <Tab key="audiobooks" title="AudioBooks">
          Audiobooks
        </Tab>
      </Tabs>
    </section>
  );
}

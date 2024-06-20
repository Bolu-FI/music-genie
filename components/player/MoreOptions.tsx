import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

import {
  AddToLibraryIcon,
  AddToQueueIcon,
  ClockIcon,
  DjIcon,
  DownloadIcon,
  FullScreenIcon,
  MiniPlayerIcon,
  RadioIcon,
  ThreeDotsIcon,
  UploadIcon,
  UserMusicIcon,
  VoidIcon,
} from "@/components/icons";

type Prop = {};

const options = [
  {
    action: "download",
    title: "download",
    icon: DownloadIcon,
  },
  {
    action: "sleep",
    title: "sleep timer",
    icon: ClockIcon,
  },
  {
    action: "hide",
    title: "hide song",
    icon: VoidIcon,
  },
  {
    action: "share",
    title: "share song",
    icon: UploadIcon,
  },
  {
    action: "add-library",
    title: "add to library",
    icon: AddToLibraryIcon,
  },
  {
    action: "add-queue",
    title: "add song to queue",
    icon: AddToQueueIcon,
  },
  {
    action: "radio",
    title: "go to song radio",
    icon: RadioIcon,
  },
  {
    action: "view-album",
    title: "view album",
    icon: DjIcon,
  },
  {
    action: "artist",
    title: "view artist",
    icon: UserMusicIcon,
  },
  {
    action: "miniplayer",
    title: "miniplayer",
    icon: MiniPlayerIcon,
  },
  {
    action: "fullscreen",
    title: "fullscreen",
    icon: FullScreenIcon,
  },
];

const MoreOptions: React.FC<Prop> = () => {
  return (
    <button aria-label="more">
      <Popover placement="top">
        <PopoverTrigger>
          <button>
            <ThreeDotsIcon />
          </button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <ul className="h-auto max-h-[400px] overflow-y-auto px-3 py-4 flex flex-col overflow-hidden">
            {options.map((option) => (
              <li
                key={option.action}
                className="flex px-2 py-3 gap-5 cursor-pointer hover:bg-secondary rounded-small"
              >
                <option.icon className="text-foreground" />
                <span className="capitalize">{option.title}</span>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </button>
  );
};

export default MoreOptions;

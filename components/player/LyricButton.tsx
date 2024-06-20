import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

import {
  ArrowUpTiltedRightIcon,
  LyricIcon,
  SyncedIcon,
} from "@/components/icons";

type Prop = {};

const LyricButton: React.FC<Prop> = () => {
  return (
    <Popover placement="top">
      <PopoverTrigger>
        <button>
          <LyricIcon fill="none" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <div className="h-full w-[432px] max-h-[535px] *:p-5">
          <div className="flex justify-between border-b border-foreground">
            <p className="font-medium text-small flex gap-1 items-center">
              Lyrics
              <ArrowUpTiltedRightIcon size={24} />
            </p>
            <span>
              <SyncedIcon size={24} />
            </span>
          </div>
          <div className="flex flex-col gap-4 font-bold text-lg">
            <p className="text-primary">Like the legend of the phoenix, huh</p>
            <p className="text-primary">All ends with beginnings</p>
            <p className="text-primary">What keeps the planet spinning, ah</p>
            <p className="text-primary">
              The force from the beginning, hm, look
            </p>
            <p className="bg-gradient-to-r from-primary to-lyric/20 to-40% bg-clip-text text-transparent">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              We've come too far
            </p>
            <p className="text-lyric/20">To give up who we are</p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-lyric/20">So let's raise the bar</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LyricButton;

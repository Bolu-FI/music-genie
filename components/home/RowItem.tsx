import React, { ReactElement } from "react";

import { PlayIcon } from "@/components/icons";

export const RowItem = ({
  onPlayClicked,
  imageSlot,
  titleSlot,
  id,
  description,
  showSubtitle,
}: {
  showSubtitle: boolean;
  imageSlot: ReactElement;
  titleSlot: ReactElement;
  description: string;
  id: string;
  onPlayClicked: (id: string) => void;
}) => {
  return (
    <div
      className="flex flex-col relative gap-1 group items-center transition-background hover:bg-primary-background p-2 rounded-lg cursor-pointer snap-start"
      role="button"
    >
      {imageSlot}
      {showSubtitle ? (
        <>
          <div className="flex justify-between gap-2 w-full max-w-[18ch] text-ellipsis overflow-hidden whitespace-nowrap items-center text-small text-start text-primary *:text-start">
            {titleSlot}
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-foreground text-start w-full max-w-[21ch] text-xs line-clamp-2"
          />
        </>
      ) : null}
      <button
        aria-label="play"
        className="grid w-10 h-10 z-20 place-content-center p-3 rounded-full bg-player-play absolute right-2 bottom-12 opacity-0 group-hover:opacity-100 group-hover:bottom-16 transition-all"
        onClick={() => onPlayClicked(id)}
      >
        <PlayIcon className="text-black" size={16} />
      </button>
    </div>
  );
};

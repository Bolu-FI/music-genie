"use client";

import React from "react";
import { Slider } from "@nextui-org/slider";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { Tooltip } from "@nextui-org/tooltip";
import clsx from "clsx";
import { Divider } from "@nextui-org/divider";

import {
  AudioOutputIcon,
  BoxAddIcon,
  FavouriteIcon,
  ListIcon,
  LyricIcon,
  NextIcon,
  PlayIcon,
  PreviousIcon,
  RepeatIcon,
  ShuffleIcon,
  SpeakerIcon,
  ThreeDotsIcon,
} from "@/components/icons";
import { DefaultProps } from "@/types";

type Prop = DefaultProps & {};

const Player: React.FC<Prop> = ({ className }) => {
  return (
    <div
      className={clsx(
        "bg-player py-1.5 px-3 rounded-medium flex gap-1.5 items-center",
        className,
      )}
    >
      <button
        aria-label="play"
        className="grid place-content-center p-3 rounded-full bg-player-play"
      >
        <PlayIcon className="text-black" size={12} />
      </button>
      <button aria-label="previous">
        <PreviousIcon />
      </button>
      <button aria-label="next">
        <NextIcon />
      </button>
      <button aria-label="shuffle">
        <ShuffleIcon fill="none" />
      </button>
      <button aria-label="repeat">
        <RepeatIcon fill="none" />
      </button>
      <Playback />
      <TrackDetails className="ml-6" />
      <PlayerOptions className="ml-auto" />
    </div>
  );
};

//TODO: Make slider in waveform
const Playback = ({}) => {
  return (
    <div className="flex w-full max-w-[300px] text-small items-center gap-1.5">
      <Slider
        className="grow"
        color="primary"
        endContent={<span>4:36</span>}
        renderThumb={(props) => (
          <span
            {...props}
            className="rounded-full opacity-0 transition-opacity top-1/2 w-3 h-3 bg-primary cursor-grab data-[dragging=true]:cursor-grabbing hover:opacity-100 data-[focused=true]:opacity-100"
          />
        )}
        size="sm"
        startContent={<span>2:36</span>}
      />
      <Tooltip>
        <button>
          <SpeakerIcon fill="none" />
        </button>
      </Tooltip>
    </div>
  );
};

const TrackDetails = ({ className }: { className?: string }) => (
  <div className={clsx("flex gap-2.5 items-center", className)}>
    <Image
      alt="NextUI hero Image"
      as={NextImage}
      className="row-span-3"
      height={48}
      radius="sm"
      shadow="sm"
      src="https://i.scdn.co/image/ab67616d000048517359994525d219f64872d3b1"
      width={48}
    />
    <div className="flex flex-col text-foreground text-sm">
      <p className="text-primary">Get Lucky</p>
      <p>Daft Punk</p>
      <p className="text-ellipsis overflow-hidden text-nowrap max-w-[20ch]">
        Random Access Memories
      </p>
    </div>
  </div>
);

const PlayerOptions = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(className, "flex gap-1.5 items-center")}>
      <button aria-label="favourite">
        <FavouriteIcon fill="none" />
      </button>
      <button aria-label="Add to playlist">
        <BoxAddIcon fill="none" />
      </button>
      <button aria-label="lyric">
        <LyricIcon fill="none" />
      </button>
      <button aria-label="audio output">
        <AudioOutputIcon fill="none" />
      </button>
      <button aria-label="more">
        <ThreeDotsIcon />
      </button>
      <Divider
        className="mx-3.5 w-0.5 h-auto bg-foreground self-stretch rounded-full"
        orientation="vertical"
      />
      <button aria-label="dj">
        <Image as={NextImage} height={40} src="/dj.png" width={40} />
      </button>
      <button aria-label="queue">
        <ListIcon fill="none" />
      </button>
    </div>
  );
};

export default Player;

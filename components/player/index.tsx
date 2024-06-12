"use client";

import React, { useEffect, useRef, useState } from "react";
import { Slider } from "@nextui-org/slider";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import clsx from "clsx";
import { Divider } from "@nextui-org/divider";
import { getCookie } from "cookies-next";
import { useStore } from "@tanstack/react-store";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

import {
  AudioOutputIcon,
  BoxAddIcon,
  FavouriteIcon,
  ListIcon,
  LyricIcon,
  NextIcon,
  PauseIcon,
  PlayIcon,
  PreviousIcon,
  RepeatIcon,
  RepeatOneIcon,
  ShuffleIcon,
  SpeakerIcon,
  ThreeDotsIcon,
} from "@/components/icons";
import { DefaultProps, Track } from "@/types";
import { store } from "@/store";
import { USER_TOKEN_KEY } from "@/constants";
import usePlayback from "@/hooks/usePlayback";
import { formatMsTime } from "@/helpers";

type Prop = DefaultProps & {};

const Player: React.FC<Prop> = ({ className }) => {
  const [playContext, setPlayContext] = useState<{
    position: number;
    duration: number;
    loading: boolean;
    track_window: { current_track: Track };
  }>();

  const { deviceId, playerState } = useStore(store, (state) => ({
    deviceId: state.deviceId,
    playerState: state.playerState,
  }));

  const {
    pause,
    play,
    previous,
    next,
    seek,
    changeVolume,
    toggleShuffle,
    toggleRepeat,
  } = usePlayback();

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    // @ts-ignore
    window.onSpotifyWebPlaybackSDKReady = () => {
      // @ts-ignore
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb: any) => {
          cb(getCookie(USER_TOKEN_KEY));
        },
        volume: playerState.volume,
      });

      player.addListener("ready", ({ device_id }: any) => {
        store.setState((state) => ({
          ...state,
          deviceId: device_id,
        }));
      });

      // player.addListener("not_ready", ({ device_id }: any) => {});
      //
      // player.addListener("initialization_error", ({ message }: any) => {});
      //
      // player.addListener("authentication_error", ({ message }: any) => {});
      //
      // player.addListener("account_error", ({ message }: any) => {});

      player.addListener("player_state_changed", (state: any) => {
        setPlayContext(state);
      });

      player.connect();
    };

    return () => {
      // @ts-ignore
      window.onSpotifyWebPlaybackSDKReady = null;
    };
  }, []);

  if (!playContext?.track_window.current_track) {
    return <></>;
  }

  const togglePlay = () => {
    playerState?.isPlaying
      ? pause({ device_id: deviceId || "" })
      : play({ device_id: deviceId || "" });
  };

  const handlePreviousClick = () => {
    previous({ device_id: deviceId || "" });
    setPlayContext({
      ...playContext,
      position: 0,
      loading: true,
    });
  };

  const handleNextClick = () => {
    next({ device_id: deviceId || "" });
    setPlayContext({
      ...playContext,
      position: 0,
      loading: true,
    });
  };

  const handleSeek = (position: number) => {
    seek({ device_id: deviceId || "", position_ms: position.toString() });
  };

  return (
    <div
      className={clsx(
        "py-1.5 px-3 rounded-medium flex gap-1.5 items-center transition-all",
        className,
        {
          "bg-secondary": !playerState.isPlaying,
          "bg-player-play": playerState.isPlaying,
        },
      )}
    >
      <button
        aria-label="play"
        className="grid place-content-center p-3 rounded-full bg-player-play"
        onClick={togglePlay}
      >
        {!playerState.isPlaying ? (
          <PlayIcon className="text-black" size={12} />
        ) : (
          <PauseIcon className="text-black" size={12} />
        )}
      </button>
      <button aria-label="previous" onClick={handlePreviousClick}>
        <PreviousIcon />
      </button>
      <button aria-label="next" onClick={handleNextClick}>
        <NextIcon />
      </button>
      <button
        aria-label="shuffle"
        onClick={() => toggleShuffle({ device_id: deviceId || "" })}
      >
        <ShuffleIcon
          className={clsx({ "text-player-play": playerState.shuffle })}
          fill="none"
        />
      </button>
      <button
        aria-label="repeat"
        className={clsx({ "text-player-play": playerState.repeat !== "off" })}
        onClick={() => toggleRepeat({ device_id: deviceId || "" })}
      >
        {playerState.repeat === "track" ? (
          <RepeatOneIcon fill="none" />
        ) : (
          <RepeatIcon fill="none" />
        )}
      </button>
      <Playback
        key={playContext.track_window.current_track.id}
        changeVolume={(volume) =>
          changeVolume({
            device_id: deviceId || "",
            volume_percent: volume * 100,
          })
        }
        duration={playContext.duration}
        loading={playContext.loading}
        paused={!playerState.isPlaying}
        position={playContext.position}
        seek={handleSeek}
        volume={playerState.volume}
      />
      <TrackDetails
        className="ml-6"
        track={playContext?.track_window.current_track}
      />
      <PlayerOptions className="ml-auto" />
    </div>
  );
};

//TODO: Make slider in waveform

const Playback = ({
  duration,
  position,
  paused,
  loading,
  seek,
  changeVolume,
  volume,
}: {
  duration: number;
  position: number;
  volume: number;
  paused: boolean;
  loading: boolean;
  seek: (value: number) => void;
  changeVolume: (volume: number) => void;
}) => {
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const timerRef = useRef<any>();

  useEffect(() => {
    clearTimeout(timerRef.current);
    setCurrentPosition(position);
  }, [position]);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (currentPosition >= duration) {
      return;
    }

    clearTimeout(timerRef.current);

    if (paused) {
      return;
    }

    timerRef.current = setTimeout(
      () => setCurrentPosition((position) => position + 100),
      10,
    );

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [currentPosition, loading, paused]);

  return (
    <div className="flex w-full max-w-[300px] text-small items-center gap-1.5">
      <Slider
        className="grow"
        classNames={{
          track: "h-1",
        }}
        color="primary"
        endContent={
          <span className="tabular-nums">{formatMsTime(duration)}</span>
        }
        maxValue={duration}
        renderThumb={(props) => (
          <span
            {...props}
            className="rounded-full opacity-0 transition-opacity top-1/2 w-3 h-3 bg-primary cursor-grab data-[dragging=true]:cursor-grabbing hover:opacity-100 data-[focused=true]:opacity-100"
          />
        )}
        size="lg"
        startContent={
          <span className="tabular-nums">{formatMsTime(currentPosition)}</span>
        }
        value={currentPosition}
        onChange={(value) => {
          clearTimeout(timerRef.current);
          setCurrentPosition(value as number);
        }}
        onChangeEnd={(value) => seek(value as number)}
      />
      <Popover placement="top">
        <PopoverTrigger>
          <button>
            <SpeakerIcon fill="none" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="py-2 px-1">
          <div className="h-24">
            <Slider
              defaultValue={volume}
              maxValue={1}
              orientation="vertical"
              renderThumb={(props) => (
                <span
                  {...props}
                  className="rounded-full opacity-0 transition-opacity left-1/2 w-3 h-3 bg-primary cursor-grab data-[dragging=true]:cursor-grabbing hover:opacity-100 data-[focused=true]:opacity-100"
                />
              )}
              size="sm"
              step={0.1}
              onChangeEnd={(value) => changeVolume(value as number)}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

const TrackDetails = ({
  className,
  track,
}: {
  className?: string;
  track: Track;
}) => (
  <div className={clsx("flex gap-2.5 items-center", className)}>
    <Image
      alt="NextUI hero Image"
      as={NextImage}
      className="row-span-3"
      height={48}
      radius="sm"
      shadow="sm"
      src={track.album.images[0].url}
      width={48}
    />

    <div className="flex flex-col text-foreground text-sm">
      <p className="text-primary">{track.name}</p>
      <p>{track.artists[0].name}</p>
      <p className="text-ellipsis overflow-hidden text-nowrap max-w-[20ch]">
        {track.album.name}
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

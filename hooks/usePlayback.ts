import { useMutation } from "@tanstack/react-query";

import { PlayerService } from "@/store/services/player";
import {
  PlaybackPayload,
  PlaybackVolumePayload,
  SeekAudioPayload,
  StartPlaybackPayload,
} from "@/store/services/player/types";
import { store } from "@/store";

const usePlayback = () => {
  const { mutate: play } = useMutation({
    mutationFn: (variables: StartPlaybackPayload) =>
      PlayerService.startPlayback(variables),
    mutationKey: ["play"],
    onSuccess: () => {
      store.setState((state) => ({
        ...state,
        playerState: {
          ...state.playerState,
          isPlaying: true,
        },
      }));
    },
  });

  const { mutate: pause } = useMutation({
    mutationFn: (variables: PlaybackPayload) =>
      PlayerService.pausePlayback(variables),
    mutationKey: ["pause"],
    onSuccess: () => {
      store.setState((state) => ({
        ...state,
        playerState: {
          ...state.playerState,
          isPlaying: false,
        },
      }));
    },
  });

  const { mutate: previous } = useMutation({
    mutationFn: (variables: PlaybackPayload) =>
      PlayerService.skipToPrevious(variables),
    mutationKey: ["previous"],
  });

  const { mutate: next } = useMutation({
    mutationFn: (variables: PlaybackPayload) =>
      PlayerService.skipToNext(variables),
    mutationKey: ["next"],
  });

  const { mutate: seek } = useMutation({
    mutationFn: (variables: SeekAudioPayload) =>
      PlayerService.seekToPosition(variables),
    mutationKey: ["seek"],
  });

  const { mutate: toggleShuffle } = useMutation({
    mutationFn: (variables: PlaybackPayload) =>
      PlayerService.toggleShuffle({
        ...variables,
        state: store.state.playerState.shuffle ? "false" : "true",
      }),
    mutationKey: ["toggleShuffle"],
    onSuccess: () => {
      store.setState((state) => ({
        ...state,
        playerState: {
          ...state.playerState,
          shuffle: !state.playerState.shuffle,
        },
      }));
    },
  });

  const { mutate: toggleRepeat } = useMutation({
    mutationFn: (variables: PlaybackPayload) =>
      PlayerService.setRepeatMode({
        ...variables,
        state:
          store.state.playerState.repeat === "off"
            ? "context"
            : store.state.playerState.repeat === "context"
              ? "track"
              : "off",
      }),
    mutationKey: ["toggleRepeat"],
    onSuccess: () => {
      store.setState((state) => ({
        ...state,
        playerState: {
          ...state.playerState,
          repeat:
            store.state.playerState.repeat === "off"
              ? "context"
              : store.state.playerState.repeat === "context"
                ? "track"
                : "off",
        },
      }));
    },
  });

  const { mutate: changeVolume } = useMutation({
    mutationFn: (variables: PlaybackVolumePayload) =>
      PlayerService.changeVolume(variables),
    mutationKey: ["volume"],
    onSuccess: (_, variables) => {
      store.setState((state) => ({
        ...state,
        playerState: {
          ...state.playerState,
          volume: variables.volume_percent / 100,
        },
      }));
    },
  });

  return {
    play,
    previous,
    next,
    pause,
    seek,
    toggleShuffle,
    toggleRepeat,
    changeVolume,
  };
};

export default usePlayback;

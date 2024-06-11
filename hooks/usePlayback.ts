import { useMutation } from "@tanstack/react-query";

import { PlayerService } from "@/store/services/player";

const usePlayback = () => {
  const { mutate: play } = useMutation({
    mutationFn: PlayerService.startPlayback,
  });

  const { mutate: pause } = useMutation({
    mutationFn: PlayerService.pausePlayback,
  });

  const { mutate: previous } = useMutation({
    mutationFn: PlayerService.skipToPrevious,
  });

  const { mutate: next } = useMutation({
    mutationFn: PlayerService.skipToNext,
  });

  const { mutate: seek } = useMutation({
    mutationFn: PlayerService.seekToPosition,
  });

  const { mutate: toggleShuffle } = useMutation({
    mutationFn: PlayerService.toggleShuffle,
  });

  const { mutate: toggleRepeat } = useMutation({
    mutationFn: PlayerService.setRepeatMode,
  });

  return {
    play,
    previous,
    next,
    pause,
    seek,
    toggleShuffle,
    toggleRepeat,
  };
};

export default usePlayback;

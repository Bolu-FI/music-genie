import { useInfiniteQuery } from "@tanstack/react-query";
import { useStore } from "@tanstack/react-store";

import { PlayerService } from "@/store/services/player";
import { store } from "@/store";
import { Track } from "@/types";
import { FetchRecentlyPlayedResponse } from "@/store/services/player/types";

export const useGetRecentlyPlayed = () => {
  const { data, isFetchingNextPage, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<FetchRecentlyPlayedResponse>({
      queryKey: ["all-recently-played"],
      queryFn: ({ pageParam }) =>
        PlayerService.getRecentlyPlayed({
          before: pageParam as any,
          limit: 10,
        }),
      initialPageParam: undefined,
      getNextPageParam: (lastPage, allPages) =>
        lastPage || allPages.length < 10 ? lastPage.cursors?.before : undefined,
    });

  return {
    tracks:
      data?.pages.reduce(
        (prev, next) => [...prev, ...next.items],
        [] as FetchRecentlyPlayedResponse["items"],
      ) || [],
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
};

export const useQueue = () => {
  const { playback, priority } = useStore(store);

  const addToQueue = (track: Track | Track[]) => {
    store.setState((state) => ({
      ...state,
      priority: {
        name: "Queue",
        items: [
          ...(priority?.items || []),
          ...(Array.isArray(track) ? track : [track]),
        ],
      },
    }));
  };

  const initializePlaybackQueue = (track: Track | Track[], context: string) => {
    store.setState((state) => ({
      ...state,
      playback: {
        name: context,
        items: [...(Array.isArray(track) ? track : [track])],
      },
    }));
  };

  const removeFromQueue = (
    trackId: string,
    queueType: "priority" | "playback",
  ) => {
    const queue = store.state[queueType];

    store.setState((state) => ({
      ...state,
      [queueType]: {
        ...queue,
        items: queue?.items.filter((track) => track.id !== trackId),
      },
    }));
  };

  return {
    addToQueue,
    removeFromQueue,
    initializePlaybackQueue,
    playbackQueue: playback,
    priorityQueue: priority,
  };
};

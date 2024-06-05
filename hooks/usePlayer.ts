import { useInfiniteQuery } from "@tanstack/react-query";

import { PlayerService } from "@/store/services/player";
import { FetchRecentlyPlayedResponse } from "@/store/services/track/types";

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

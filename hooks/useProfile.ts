import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { UserService } from "@/store/services/user";
import { FetchUserArtistsResponse } from "@/store/services/user/types";
import { Artist } from "@/types";

export const useGetFollowedArtists = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["followed-artists"],
    queryFn: () =>
      UserService.getFollowedArtists({ after: undefined, limit: 10 }),
  });

  return {
    artists: data?.artists?.items || [],
    isLoading,
  };
};

export const useGetAllFollowedArtists = () => {
  const { data, isFetchingNextPage, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<FetchUserArtistsResponse>({
      queryKey: ["all-followed-artists"],
      queryFn: ({ pageParam }) =>
        UserService.getFollowedArtists({ after: pageParam as any, limit: 10 }),
      initialPageParam: undefined,
      getNextPageParam: (lastPage) =>
        lastPage ? lastPage.artists.cursors.after : undefined,
    });

  return {
    artists: (data?.pages.reduce(
      (prev, next) => [...prev, ...next.artists.items],
      [] as any,
    ) || []) as Array<Artist>,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
};

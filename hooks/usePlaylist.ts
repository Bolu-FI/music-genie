import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { FetchPlaylistsResponse } from "@/store/services/playlist/types";
import { PlaylistService } from "@/store/services/playlist";
import { Playlist } from "@/types";
import { MADE_FOR_YOU_CATEGORY_ID } from "@/constants";

export const useGetFeaturedPlaylists = () => {
  const { data, isFetchingNextPage, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<FetchPlaylistsResponse>({
      queryKey: ["featured-playlists"],
      queryFn: ({ pageParam }) =>
        PlaylistService.getFeaturedPlaylists({
          offset: pageParam as number,
          limit: 10,
        }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.playlists.next
          ? allPages.length * lastPage?.playlists.offset
          : undefined,
    });

  return {
    playlists: (data?.pages.reduce(
      (prev, next) => [...prev, ...next.playlists.items],
      [] as Playlist[],
    ) || []) as Playlist[],
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
};

export const useGetCategoryPlaylists = (
  category_id: string,
  limit?: number,
) => {
  const { data, isFetchingNextPage, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<FetchPlaylistsResponse>({
      queryKey: ["category-playlists", category_id],
      queryFn: ({ pageParam }) =>
        PlaylistService.getCategoryPlaylists({
          offset: pageParam as number,
          limit: limit || 10,
          category_id,
        }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.playlists.next
          ? allPages.length * lastPage?.playlists.limit
          : undefined,
    });

  return {
    playlists:
      data?.pages.reduce(
        (prev, next) => [...prev, ...next.playlists.items],
        [] as Playlist[],
      ) || [],
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
};

const useGetGeneratedPlaylists = () => {
  const {
    playlists,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetCategoryPlaylists(MADE_FOR_YOU_CATEGORY_ID, 50);

  const fetchAll = async () => {
    if (hasNextPage) {
      console.log(hasNextPage);
      await fetchNextPage();
    }
  };

  useEffect(() => {
    fetchAll();
  }, [hasNextPage]);

  return {
    playlists,
    isLoading: isLoading || isFetchingNextPage,
  };
};

export const useGetDailyMixes = () => {
  const filters = ["Repeat", "Time", "daylist"];
  const { playlists, isLoading } = useGetGeneratedPlaylists();

  return {
    mixes: playlists.filter(
      (playlist) =>
        playlist.name.includes("Daily") ||
        filters.find((filter) => playlist.name.includes(filter)),
    ),
    isLoading,
  };
};

export const useGetFriendMixes = () => {
  const { playlists, isLoading } = useGetGeneratedPlaylists();

  return {
    mixes: playlists.filter(
      (playlist) =>
        playlist.name.includes("Friend") || playlist.name.includes("+"),
    ),
    isLoading,
  };
};

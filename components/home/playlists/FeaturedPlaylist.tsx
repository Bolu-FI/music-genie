import React from "react";

import PlaylistRow from "./PlaylistRow";

import { DefaultProps } from "@/types";
import { useGetFeaturedPlaylists } from "@/hooks/usePlaylist";

type Prop = DefaultProps;

const FeaturedPlaylist: React.FC<Prop> = ({ className }) => {
  const { playlists, isLoading, hasNextPage, fetchNextPage } =
    useGetFeaturedPlaylists();

  return (
    <PlaylistRow
      className={className}
      fetchMore={fetchNextPage}
      hasMore={hasNextPage}
      id="fp"
      isLoading={isLoading}
      playlists={playlists}
      title="Featured Playlist"
    />
  );
};

export default FeaturedPlaylist;

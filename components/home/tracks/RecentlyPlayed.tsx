import React from "react";

import { useGetRecentlyPlayed } from "@/hooks/usePlayer";
import { DefaultProps } from "@/types";
import TrackRow from "@/components/home/tracks/TrackRow";

type Prop = DefaultProps;

const RecentlyPlayed: React.FC<Prop> = ({ className }) => {
  const { tracks, isLoading, hasNextPage, fetchNextPage } =
    useGetRecentlyPlayed();

  return (
    <TrackRow
      className={className}
      fetchMore={fetchNextPage}
      hasMore={hasNextPage}
      id="rp"
      isLoading={isLoading}
      title="Recently played"
      tracks={tracks.map((item) => item.track)}
    />
  );
};

export default RecentlyPlayed;

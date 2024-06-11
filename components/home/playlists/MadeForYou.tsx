import React from "react";

import { DefaultProps } from "@/types";
import { useGetDailyMixes } from "@/hooks/usePlaylist";
import PlaylistRow from "@/components/home/playlists/PlaylistRow";

type Prop = DefaultProps;

const MadeForYou: React.FC<Prop> = ({ className }) => {
  const { mixes, isLoading } = useGetDailyMixes();

  return (
    <PlaylistRow
      className={className}
      id="mfy"
      isLoading={isLoading}
      playlists={mixes}
      title="Made for you"
    />
  );
};

export default MadeForYou;

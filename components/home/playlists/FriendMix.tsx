import React from "react";

import { DefaultProps } from "@/types";
import { useGetFriendMixes } from "@/hooks/usePlaylist";
import PlaylistRow from "@/components/home/playlists/PlaylistRow";

type Prop = DefaultProps;

const FriendMix: React.FC<Prop> = ({ className }) => {
  const { mixes, isLoading } = useGetFriendMixes();

  if (!isLoading && mixes.length === 0) return <></>;

  return (
    <PlaylistRow
      className={className}
      id="fm"
      isLoading={isLoading}
      playlists={mixes}
      title="Friend Mix"
    />
  );
};

export default FriendMix;

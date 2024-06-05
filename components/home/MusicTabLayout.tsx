import React from "react";

import FollowedArtists from "./FollowedArtists";
import RecentlyPlayed from "./RecentlyPlayed";
import FeaturedPlaylist from "./FeaturedPlaylist";
import MadeForYou from "./MadeForYou";
import FriendMix from "./FriendMix";

type Prop = {};

const MusicTabLayout: React.FC<Prop> = () => {
  return (
    <section className="section">
      <MadeForYou />
      <RecentlyPlayed />
      <FollowedArtists />
      <FeaturedPlaylist />
      <FriendMix />
    </section>
  );
};

export default MusicTabLayout;

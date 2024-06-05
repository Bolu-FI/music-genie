import React from "react";

import FollowedArtists from "./FollowedArtists";

type Prop = {};

const AllTabLayout: React.FC<Prop> = () => {
  return (
    <section className="section">
      <FollowedArtists />
    </section>
  );
};

export default AllTabLayout;

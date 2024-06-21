import React from "react";
import clsx from "clsx";

import { useSaveTrack } from "@/hooks";
import { FavouriteIcon } from "@/components/icons";
import { motion } from "framer-motion";

type Prop = {
  trackId: string;
};

const SaveTrack: React.FC<Prop> = ({ trackId }) => {
  const { saveTrack, unSaveTrack, isSaved } = useSaveTrack([trackId]);

  return (
    <motion.button
      aria-label="favourite"
      onClick={() =>
        isSaved?.[0] ? unSaveTrack([trackId]) : saveTrack([trackId])
      }
      whileTap={{
        scale: 1.2,
      }}
    >
      <FavouriteIcon
        className={clsx(
          {
            "fill-none": !isSaved?.[0],
            "fill-player-play text-player-play": isSaved?.[0],
          },
          "transition-all",
        )}
      />
    </motion.button>
  );
};

export default SaveTrack;

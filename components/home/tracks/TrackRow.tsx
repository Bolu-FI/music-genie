import React, { ComponentProps } from "react";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";
import { useStore } from "@tanstack/react-store";

import { DefaultProps, Track } from "@/types";
import { ItemRow, RowMenu } from "@/components/shared";
import { RowItem } from "@/components/home/RowItem";
import { store } from "@/store";
import usePlayback from "@/hooks/usePlayback";

type Prop = DefaultProps &
  Pick<ComponentProps<typeof ItemRow>, "hasMore" | "fetchMore" | "title"> & {
    tracks: Track[];
    isLoading?: boolean;
    showSubtitle?: boolean;
    id: string;
  };

const Loader = ({ showSubtitle }: { showSubtitle: boolean }) => (
  <div className="flex flex-col gap-2 w-[170px]">
    <Skeleton className="w-full h-[170px] rounded-lg" />
    {showSubtitle ? (
      <>
        <Skeleton className="w-full h-[30px] rounded-md" />
        <Skeleton className="w-full h-[20px] rounded-md" />
      </>
    ) : null}
  </div>
);

const TrackRow: React.FC<Prop> = ({
  className,
  title,
  hasMore,
  fetchMore,
  showSubtitle = true,
  isLoading,
  tracks,
  id,
}) => {
  const { deviceId } = useStore(store);

  const { play } = usePlayback();

  const handleOnPlay = async (track: Track) => {
    if (deviceId) {
      play({ uris: [track.uri], device_id: deviceId });
    }
  };

  if (isLoading) {
    return (
      <ItemRow
        classNames={{
          base: className,
        }}
        itemWidth={170}
        items={Array(7).fill(null)}
        title={title}
      >
        {() => <Loader showSubtitle={showSubtitle} />}
      </ItemRow>
    );
  }

  return (
    <ItemRow
      actionBtn={<RowMenu layoutId={id} />}
      classNames={{
        base: className,
      }}
      fetchMore={fetchMore}
      hasMore={hasMore}
      itemWidth={200}
      items={tracks}
      loader={<Loader showSubtitle={showSubtitle} />}
      title={title}
    >
      {(track) => (
        <RowItem
          showSubtitle
          description={track.artists.map((artist) => artist.name).join(", ")}
          id={track.id}
          imageSlot={
            <Image
              className="min-w-[170px] min-h-[170px] max-w-[170px] max-h-[170px]"
              height={200}
              radius="lg"
              src={track.album.images[1].url}
              width={200}
            />
          }
          titleSlot={<>{track.name}</>}
          onPlayClicked={() => handleOnPlay(track)}
        />
      )}
    </ItemRow>
  );
};

export default TrackRow;

import React from "react";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

import { useGetRecentlyPlayed } from "@/hooks/usePlayer";
import { DefaultProps } from "@/types";
import ItemRow from "@/components/shared/ItemRow";

type Prop = DefaultProps;

const Loader = () => (
  <div className="flex flex-col gap-2 w-[170px]">
    <Skeleton className="w-full h-[170px] rounded-lg" />
    <Skeleton className="w-full h-[30px] rounded-md" />
    <Skeleton className="w-full h-[20px] rounded-md" />
  </div>
);

const RecentlyPlayed: React.FC<Prop> = ({ className }) => {
  const { tracks, isLoading, hasNextPage, fetchNextPage } =
    useGetRecentlyPlayed();

  if (isLoading) {
    return (
      <ItemRow
        classNames={{
          base: className,
        }}
        itemWidth={170}
        items={Array(7).fill(null)}
        title="Your favorite artists"
      >
        {() => <Loader />}
      </ItemRow>
    );
  }

  return (
    <ItemRow
      classNames={{
        base: className,
      }}
      fetchMore={fetchNextPage}
      hasMore={hasNextPage}
      itemWidth={200}
      items={tracks}
      loader={<Loader />}
      title="Recently played"
    >
      {({ track }) => (
        <div
          className="flex flex-col gap-1 transition-background hover:bg-primary-background p-3 rounded-lg cursor-pointer snap-start"
          role="button"
        >
          <Image
            className="min-w-[170px] min-h-[170px] max-w-[170px] max-h-[170px]"
            height={200}
            radius="lg"
            src={track.album.images[1].url}
            width={200}
          />
          <p className="text-primary text-small text-ellipsis overflow-hidden whitespace-nowrap max-w-[18ch]">
            {track.name}
          </p>
          <p className="text-foreground text-xs">
            {track.artists.map((artist) => artist.name).join(", ")}
          </p>
        </div>
      )}
    </ItemRow>
  );
};

export default RecentlyPlayed;

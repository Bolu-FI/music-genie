import React from "react";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

import { DefaultProps, Playlist } from "@/types";
import ItemRow from "@/components/shared/ItemRow";
import { useGetFeaturedPlaylists } from "@/hooks/usePlaylist";

type Prop = DefaultProps;

const Loader = () => (
  <div className="flex flex-col gap-2 w-[170px]">
    <Skeleton className="w-full h-[170px] rounded-lg" />
    <Skeleton className="w-full h-[30px] rounded-md" />
    <Skeleton className="w-full h-[20px] rounded-md" />
  </div>
);

const FeaturedPlaylist: React.FC<Prop> = ({ className }) => {
  const { playlists, isLoading, hasNextPage, fetchNextPage } =
    useGetFeaturedPlaylists();

  if (isLoading) {
    return (
      <ItemRow
        classNames={{
          base: className,
        }}
        itemWidth={170}
        items={Array(7).fill(null)}
        title="Featured Playlist"
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
      items={playlists}
      loader={<Loader />}
      title="Featured Playlist"
    >
      {(item: Playlist) => (
        <div
          className="flex flex-col gap-1 transition-background hover:bg-primary-background p-3 rounded-lg cursor-pointer snap-start"
          role="button"
        >
          <Image
            className="min-w-[170px] min-h-[170px] max-w-[170px] max-h-[170px]"
            height={200}
            radius="lg"
            src={item.images[0].url}
            width={200}
          />
          <p className="text-primary text-small text-ellipsis overflow-hidden whitespace-nowrap max-w-[18ch]">
            {item.name}
          </p>
          <p className="text-foreground text-xs line-clamp-2">
            {item.description}
          </p>
        </div>
      )}
    </ItemRow>
  );
};

export default FeaturedPlaylist;

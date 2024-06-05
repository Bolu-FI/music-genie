"use client";

import React from "react";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

import { useGetAllFollowedArtists } from "@/hooks/useProfile";
import ItemRow from "@/components/shared/ItemRow";
import { DefaultProps } from "@/types";

type Prop = DefaultProps;

const Loader = () => (
  <div className="flex flex-col gap-2 w-[170px]">
    <Skeleton className="w-full h-[170px] rounded-full" />
    <Skeleton className="w-full h-[30px] rounded-md" />
    <Skeleton className="w-full h-[20px] rounded-md" />
  </div>
);

const FollowedArtists: React.FC<Prop> = ({ className }) => {
  const { artists, isLoading, hasNextPage, fetchNextPage } =
    useGetAllFollowedArtists();

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
      items={artists}
      loader={<Loader />}
      title="Your favorite artists"
    >
      {(item) => (
        <div
          className="flex flex-col gap-1 transition-background hover:bg-primary-background p-3 rounded-lg cursor-pointer snap-start"
          role="button"
        >
          <Image
            className="min-w-[170px] min-h-[170px] max-w-[170px] max-h-[170px]"
            height={200}
            radius="full"
            src={item.images[0]?.url}
            width={200}
          />
          <p>{item.name}</p>
          <p className="text-foreground text-xs">Artist</p>
        </div>
      )}
    </ItemRow>
  );
};

export default FollowedArtists;

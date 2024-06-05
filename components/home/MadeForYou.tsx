import React from "react";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

import { DefaultProps, Playlist } from "@/types";
import ItemRow from "@/components/shared/ItemRow";
import { useGetDailyMixes } from "@/hooks/usePlaylist";

type Prop = DefaultProps;

const Loader = () => (
  <div className="flex flex-col gap-2 w-[170px] bg-primary-background p-3 rounded-lg">
    <Skeleton className="w-full h-[170px] rounded-lg" />
    <Skeleton className="w-full h-[30px] rounded-md" />
    <Skeleton className="w-full h-[20px] rounded-md" />
  </div>
);

const MadeForYou: React.FC<Prop> = ({ className }) => {
  const { mixes, isLoading } = useGetDailyMixes();

  if (isLoading) {
    return (
      <ItemRow
        classNames={{
          base: className,
        }}
        itemWidth={170}
        items={Array(7).fill(null)}
        title="Made for you"
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
      itemWidth={200}
      items={mixes}
      title="Made for you"
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

export default MadeForYou;

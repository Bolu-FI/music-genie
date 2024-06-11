import React, { ComponentProps } from "react";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

import { DefaultProps, Playlist } from "@/types";
import ItemRow from "@/components/shared/ItemRow";
import ImageWithBlurBg from "@/components/shared/ImageWithBlurBg";
import { RowMenu } from "@/components/shared";
import { useImage } from "@/hooks";
import { RowItem } from "@/components/home/RowItem";

type Prop = DefaultProps & {
  playlists: Playlist[];
  isLoading?: boolean;
  showSubtitle?: boolean;
  id: string;
} & Pick<ComponentProps<typeof ItemRow>, "hasMore" | "fetchMore" | "title">;

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

const Item = ({
  playlist,
  showSubtitle,
}: {
  playlist: Playlist;
  showSubtitle: boolean;
}) => {
  const { color } = useImage(playlist.images[0].url);

  const handleOnPlay = async () => {};

  return (
    <RowItem
      description={playlist.description}
      id={playlist.id}
      imageSlot={
        <ImageWithBlurBg color={color} src={playlist.images[0].url}>
          {({ src }) => (
            <Image
              className="min-w-[170px] min-h-[170px] max-w-[170px] max-h-[170px]"
              height={200}
              radius="lg"
              src={src}
              width={200}
            />
          )}
        </ImageWithBlurBg>
      }
      showSubtitle={showSubtitle}
      titleSlot={
        <>
          <span className="w-full text-small max-w-[15ch] text-ellipsis overflow-hidden whitespace-nowrap">
            {playlist.name}
          </span>
          <span className="text-sm" style={{ color }}>
            {playlist.tracks.total}
          </span>
        </>
      }
      onPlayClicked={handleOnPlay}
    />
  );
};

const PlaylistRow: React.FC<Prop> = ({
  className,
  playlists,
  isLoading,
  title,
  hasMore,
  fetchMore,
  showSubtitle = true,
  id,
}) => {
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
      items={playlists}
      loader={<Loader showSubtitle={showSubtitle} />}
      title={title}
    >
      {(item: Playlist) => <Item playlist={item} showSubtitle={showSubtitle} />}
    </ItemRow>
  );
};

export default PlaylistRow;

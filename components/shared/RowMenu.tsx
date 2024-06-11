import React, { useMemo } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import clsx from "clsx";

import { HideIcon, PinIcon, ThreeDotsIcon } from "@/components/icons";
import { LayoutHelper, useHomeLayout } from "@/hooks";

type Prop = {
  layoutId: string;
};

const RowMenu: React.FC<Prop> = ({ layoutId }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { items, saveLayout } = useHomeLayout();

  const isPinned = useMemo(
    () => items.find((item) => item.id === layoutId)?.pinned,
    [items],
  );

  const handleOnHideClicked = () => {
    saveLayout(LayoutHelper.toggleVisibleLayout(items, layoutId));
    setIsOpen(false);
  };

  const handleOnPinnedClicked = () => {
    saveLayout(LayoutHelper.togglePinnedLayout(items, layoutId));
    setIsOpen(false);
  };

  return (
    <Popover
      isOpen={isOpen}
      placement="bottom-end"
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
    >
      <PopoverTrigger>
        <div
          className="mx-3 text-foreground transition-all aria-expanded:text-primary"
          role="button"
        >
          <ThreeDotsIcon className="" size={24} />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="py-1 flex flex-col gap-3">
          <button
            className={clsx(
              "flex gap-3 items-center p-1 rounded-lg hover:bg-primary-background",
              { "text-player-play": isPinned },
            )}
            onClick={handleOnPinnedClicked}
          >
            <PinIcon size={35} />
            <span>Pin to Home</span>
          </button>
          <button
            className="flex gap-3 items-center p-1 rounded-lg hover:bg-primary-background"
            onClick={handleOnHideClicked}
          >
            <HideIcon size={35} />
            <span>Hide this section</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default RowMenu;

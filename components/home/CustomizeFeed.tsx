import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DropResult,
} from "react-beautiful-dnd";

import {
  AdjustIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  MoveIcon,
  PinIcon,
} from "@/components/icons";
import { LayoutHelper, useHomeLayout } from "@/hooks";
import { StrictModeDroppable } from "@/components/shared/StrictModeDroppable";
import { Layout } from "@/types";

type Prop = {
  className?: string;
};
// TODO: all pinned layouts should be at the top
// TODO: No layout should be dragged above pinned layouts
const CustomizeFeed: React.FC<Prop> = ({ className }) => {
  const { items, saveLayout } = useHomeLayout();

  const handleOnHideClicked = (layoutId: string) => {
    saveLayout(LayoutHelper.toggleVisibleLayout(items, layoutId));
  };

  const handleOnPinnedClicked = (layoutId: string) => {
    saveLayout(LayoutHelper.togglePinnedLayout(items, layoutId));
  };

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reOrderedItem] = newItems.splice(result.source.index, 1);

    newItems.splice(result.destination.index, 0, reOrderedItem);

    saveLayout(newItems);
  };

  const LayoutItem = ({
    item,
    provided,
  }: {
    item: Layout;
    provided: DraggableProvided;
  }) => (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="flex items-center !z-[9999999999] relative gap-5 px-2 py-1 hover:bg-primary-background rounded-small"
    >
      <PinIcon
        className={clsx("cursor-pointer", {
          "text-player-play": item.pinned,
        })}
        size={35}
        onClick={() => handleOnPinnedClicked(item.id)}
      />
      <p className="grow min-w-36 text-white/70 cursor-move">{item.title}</p>
      <MoveIcon className="cursor-move" size={18} />
      <button
        className="cursor-pointer w-5 h-5"
        onClick={() => handleOnHideClicked(item.id)}
      >
        <AnimatePresence>
          {item.hidden ? (
            <motion.div
              key="closed"
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <EyeClosedIcon size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <EyeOpenIcon size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </li>
  );

  return (
    <Popover
      classNames={{
        trigger: className,
        content: "p-0",
      }}
      placement="bottom-end"
    >
      <PopoverTrigger>
        <div
          className="mx-3 text-foreground transition-all aria-expanded:text-primary"
          role="button"
        >
          <AdjustIcon size={24} />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="pb-5 relative">
          <h5 className="mb-3 py-3.5 px-4 border-b font-medium">
            Customize feed
          </h5>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <StrictModeDroppable
              droppableId="droppable"
              renderClone={(provided, _, rubric) => (
                <LayoutItem
                  item={items[rubric.source.index]}
                  provided={provided}
                />
              )}
            >
              {(provided) => (
                <ul
                  className="py-1 flex flex-col gap-1 px-2 relative"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {items.map((item, index) => (
                    <Draggable
                      key={`customize-${item.id}`}
                      draggableId={`customize-${item.id}`}
                      index={index}
                    >
                      {(provided) => (
                        <LayoutItem item={item} provided={provided} />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </StrictModeDroppable>
          </DragDropContext>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CustomizeFeed;

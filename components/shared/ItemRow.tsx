import React, { Fragment, ReactElement, useRef, useState } from "react";
import clsx from "clsx";

import { LeftArrowIcon, RightArrowIcon } from "@/components/icons";

type Prop<T> = {
  title: string;
  items: Array<T>;
  classNames?: {
    base?: string;
    title?: string;
    list?: string;
  };
  hideShowMoreBtn?: boolean;
  itemWidth: number;
  children: (item: T) => ReactElement;
  fetchMore?: () => Promise<any>;
  hasMore?: boolean;
  loader?: ReactElement;
  offset?: number;
  actionBtn?: ReactElement;
};

const ItemRow = <T,>({
  title,
  items,
  classNames,
  children,
  hideShowMoreBtn = false,
  itemWidth,
  hasMore,
  fetchMore,
  loader,
  offset = 100,
  actionBtn,
}: Prop<T>) => {
  const ref = useRef<HTMLUListElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleOnScrollEnd = async (event: any) => {
    if (!event.target) return;

    const hasReachedEnd =
      event.target?.clientWidth +
        Math.ceil(event.target?.scrollLeft) +
        offset >=
      event.target?.scrollWidth;

    if (hasReachedEnd && hasMore && !isLoading) {
      setIsLoading(true);
      fetchMore?.()
        .then()
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <section
      className={clsx(
        classNames?.base,
        "flex flex-col overflow-x-hidden relative gap-7",
      )}
      style={{
        //@ts-expect-error
        "--item-width": `${itemWidth}px`,
      }}
    >
      <div className="flex items-center justify-between">
        <h3 className={clsx(classNames?.title, "subheading")}>{title}</h3>
        {!hideShowMoreBtn ? (
          <>
            <button className="ml-auto mr-3">
              <LeftArrowIcon
                className="text-foreground"
                size={24}
                onClick={() =>
                  ref.current?.scrollBy({
                    left: -(itemWidth + 10) * 4,
                    behavior: "smooth",
                  })
                }
              />
            </button>
            <button className="mx-3">
              <RightArrowIcon
                className="text-foreground"
                size={24}
                onClick={() =>
                  ref.current?.scrollBy({
                    left: (itemWidth + 10) * 4,
                    behavior: "smooth",
                  })
                }
              />
            </button>
          </>
        ) : null}
        {actionBtn}
      </div>
      <ul
        ref={ref}
        className={clsx(
          classNames?.list,
          "grid grid-rows-1 grid-flow-col grid-cols-[repeat(auto-fill,_minmax(var(--item-width),_1fr))] auto-rows-[0] gap-1.5 overflow-x-hidden snap-x",
        )}
        onScroll={handleOnScrollEnd}
      >
        {items.map((item, index) => (
          <Fragment key={title + index}>{children(item)}</Fragment>
        ))}
        {isLoading
          ? new Array(5)
              .fill(null)
              .map((_, i) => (
                <Fragment key={`${title}-loading-${i}`}>{loader}</Fragment>
              ))
          : null}
      </ul>
    </section>
  );
};

export default ItemRow;

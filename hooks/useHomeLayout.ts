import { useStore } from "@tanstack/react-store";

import { Layout, LayoutType } from "@/types";
import { store } from "@/store";

export class LayoutHelper {
  static togglePinnedLayout(layouts: Layout[], layoutId: string) {
    return layouts.map((layout) =>
      layout.id === layoutId ? { ...layout, pinned: !layout.pinned } : layout,
    );
  }

  static toggleVisibleLayout = (layouts: Layout[], layoutId: string) => {
    return layouts.map((layout) =>
      layout.id === layoutId ? { ...layout, hidden: !layout.hidden } : layout,
    );
  };
}

export function useHomeLayout(filter: LayoutType | undefined = "all") {
  const layouts = useStore(store, (state) => state.layouts);

  const saveLayout = (newLayouts: Layout[]) => {
    store.setState((state) => ({
      ...state,
      layouts: newLayouts,
    }));
  };

  return {
    items:
      filter === "all"
        ? layouts
        : layouts.filter((layout) => layout.category === filter),
    saveLayout,
  };
}

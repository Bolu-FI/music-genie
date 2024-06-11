import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { orderBy } from "lodash";

import { useHomeLayout } from "@/hooks";
import { LayoutType } from "@/types";

type Prop = {
  title?: LayoutType;
};

const Layout: React.FC<Prop> = ({ title = "all" }) => {
  const { items } = useHomeLayout(title);

  return (
    <ul className="section">
      <AnimatePresence>
        {orderBy(
          items.filter((item) => !item.hidden),
          "pinned",
          "desc",
        ).map((item) => (
          <motion.li
            key={item.id}
            layout
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <item.element />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default Layout;

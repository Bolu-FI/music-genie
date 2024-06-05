import { useEffect, useState } from "react";

import { getAverageRGB } from "@/helpers";

export const useImage = (src: string) => {
  const [color, setColor] = useState("#000");

  useEffect(() => {
    getAverageRGB(src).then((res: any) => setColor(res));
  }, []);

  return {
    color,
  };
};

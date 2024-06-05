import React, { ReactElement } from "react";
import clsx from "clsx";

import { useImage } from "@/hooks/useImage";

type Prop = {
  src: string;
  className?: string;
  children: ({ src }: { src: string }) => ReactElement;
};

const ImageWithBlurBg: React.FC<Prop> = ({ src, children, className }) => {
  const { color } = useImage(src);

  return (
    <div className={clsx(className, "flex flex-col")}>
      <div className="rounded-t-lg w-full scale-75 h-[10px] overflow-hidden">
        <div
          className="blur-[10px] rounded-t-lg w-full h-full"
          style={{
            backgroundColor: color,
          }}
        />
      </div>
      <div className="rounded-t-lg w-full scale-90 h-[10px] overflow-hidden">
        <div
          className="blur-[10px]  w-full h-full"
          style={{
            backgroundColor: color,
          }}
        />
      </div>
      {children({ src })}
    </div>
  );
};

export default ImageWithBlurBg;

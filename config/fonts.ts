import localFont from "next/font/local";

export const fontSatoshi = localFont({
  src: [
    {
      path: "./Satoshi/Satoshi-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./Satoshi/Satoshi-Medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./Satoshi/Satoshi-Bold.otf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./Satoshi/Satoshi-Black.otf",
      style: "normal",
      weight: "900",
    },
  ],
  variable: "--font-satoshi",
  preload: true,
  display: "swap",
});

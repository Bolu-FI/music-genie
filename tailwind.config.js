import { nextui } from "@nextui-org/theme";
import { gridAreas } from "tailwindcss-grid-areas";

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)"],
      },
      gridTemplateAreas: {
        layout: [
          "header header header",
          "left-sidebar main right-sidebar",
          "left-sidebar footer footer",
        ],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#E0E0E0",
              background: "#111111",
            },
            secondary: {
              DEFAULT: "#202020",
            },
            foreground: {
              DEFAULT: "#898989",
            },
            background: {
              DEFAULT: "#060606",
            },
            player: {
              DEFAULT: "#333842",
              play: "#1ED760",
            },
          },
        },
      },
    }),
    gridAreas({
      layout: [
        "header header header",
        "left-sidebar main right-sidebar",
        "footer footer footer",
      ],
    }),
  ],
};

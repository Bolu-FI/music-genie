import { nextui } from "@nextui-org/theme";

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
  ],
};

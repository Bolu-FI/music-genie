import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import React from "react";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSatoshi } from "@/config/fonts";
import { Navbar } from "@/components/navigation/navbar";
import Sidebar from "@/components/sidebars/Sidebar";
import Player from "@/components/player";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSatoshi.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative h-screen grid grid-areas-layout grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] pt-3 pb-5 px-5">
            <Navbar className="area-header max-h-[54px]" />
            <Sidebar className="area-left-sidebar mt-3 w-[220px]" />
            <section className="area-main border rounded-large my-3 border-secondary grow overflow-y-auto">
              {children}
            </section>
            <Player className="area-footer" />
          </div>
        </Providers>
      </body>
    </html>
  );
}

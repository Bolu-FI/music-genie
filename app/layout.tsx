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
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="w-screen mt-3 mx-auto flex-grow grid grid-cols-[minmax(80px,_220px)_1fr_auto] overflow-x-hidden">
              <Sidebar />
              <div className="flex flex-col gap-2 pr-2 pb-2.5">
                <section className="border rounded-large border-secondary grow">
                  {children}
                </section>
                <Player />
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

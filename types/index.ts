import React, { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type AuthResp = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
};

export type AuthState = {
  token: string;
  refreshToken: string;
  expiresAt: number;
};

export type UserProfile = {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: Array<ItemImage>;
  product: string;
  type: string;
  uri: string;
};

export type ItemImage = {
  url: string;
  height: number;
  width: number;
};

export type Cursor = {
  after: string;
  before: string;
};

export type Pagination = {
  href: string;
  limit: number;
  next: string;
  cursors: Cursor;
  total: number;
};

export type OffsetPagination = {
  href: string;
  limit: number;
  next: string;
  previous: string;
  offset: number;
  total: number;
};

export type Playlist = {
  collaborative: boolean;
  description: string;
  href: string;
  id: string;
  name: string;
  owner: UserProfile;
  public: boolean;
  images: ItemImage[];
  type: "playlist";
  tracks: {
    total: number;
  };
};

export type Artist = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: ItemImage[];
  name: string;
  popularity: number;
  type: "artist";
  uri: string;
};

export type Album = {
  album_type: "album" | "single" | "compilation";
  total_tracks: number;
  available_markets: string[];
  href: string;
  id: string;
  name: string;
  release_date: string;
  images: ItemImage[];
  artists: Artist[];
  type: "album";
};

export type Track = {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  popularity: number;
  href: string;
  name: string;
  uri: string;
  type: "track";
  id: string;
  release_date: string;
  release_date_precision: string;
};

export type Show = {
  copyrights: Array<{
    text: string;
    type: string;
  }>;
  description: string;
  html_description: string;
  explicit: boolean;
  id: string;
  images: ItemImage[];
  name: string;
  publisher: string;
  uri: string;
  total_episodes: number;
};

export type Episode = {
  audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  href: string;
  id: string;
  images: ItemImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point: {
    fully_played: boolean;
    resume_position_ms: number;
  };
  type: "episode";
  uri: string;
};

export type DefaultProps = {
  className?: string;
};

export type Layout = {
  category: "music" | "podcast" | "all";
  pinned: boolean;
  id: string;
  hidden: boolean;
  element: React.FC;
  title: string;
};

export type LayoutType = "music" | "podcast" | "all";

export type Queue = {
  name: string;
  items: Track[];
};

export type PlayingState = {
  isPlaying: boolean;
  repeat: boolean;
  shuffle: boolean;
};

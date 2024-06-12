import { Store } from "@tanstack/react-store";

import { Layout, PlayerState, Queue } from "@/types";
import { isBrowser, loadFromStorage, saveToStorage } from "@/helpers";
import { STORE_KEY } from "@/constants";
import {
  FeaturedPlaylist,
  FriendMix,
  MadeForYou,
} from "@/components/home/playlists";
import { RecentlyPlayed } from "@/components/home/tracks";
import FollowedArtists from "@/components/home/FollowedArtists";

const defaultLayouts: Layout[] = [
  {
    id: "mfy",
    category: "music",
    hidden: false,
    element: MadeForYou,
    pinned: false,
    title: "Made for you",
  },
  {
    id: "rp",
    category: "music",
    hidden: false,
    element: RecentlyPlayed,
    pinned: false,
    title: "Recently Played",
  },
  {
    id: "fa",
    category: "all",
    hidden: false,
    element: FollowedArtists,
    pinned: false,
    title: "Followed Artists",
  },
  {
    id: "fp",
    category: "all",
    hidden: false,
    element: FeaturedPlaylist,
    pinned: false,
    title: "Featured Playlists",
  },
  {
    id: "fm",
    category: "all",
    hidden: false,
    element: FriendMix,
    pinned: false,
    title: "Friend Mix",
  },
];

const persistedState = isBrowser ? loadFromStorage(STORE_KEY) : undefined;

const initialState: {
  layouts: Layout[];
  priority?: Queue;
  playback?: Queue;
  deviceId?: string;
  playerState: PlayerState;
} = {
  priority: undefined,
  playback: undefined,
  deviceId: undefined,
  ...persistedState,
  layouts: defaultLayouts,
  playerState: {
    repeat: "off",
    isPlaying: false,
    loading: false,
    shuffle: false,
    volume: 0.8,
  },
};

export const store = new Store<typeof initialState>(initialState);

if (isBrowser) {
  store.subscribe(() => {
    saveToStorage(STORE_KEY, store.state);
  });
}

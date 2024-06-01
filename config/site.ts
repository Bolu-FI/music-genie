import {
  ArtistIcon,
  BellIcon,
  BookIcon,
  FavouriteIcon,
  FolderIcon,
  GearIcon,
  HomeIcon,
  LibraryIcon,
  LockOpenIcon,
  MicrophoneIcon,
  MusicIcon,
  PinIcon,
  PlaylistIcon,
  SaveIcon,
  SearchIcon,
  StarIcon,
  UsersIcon,
} from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MyMusic",
  description: "A spotify clone",
  navMenuItems: [
    {
      label: "My Library",
      href: "/library",
      icon: LibraryIcon,
    },
    {
      label: "Home",
      href: "/",
      icon: HomeIcon,
    },
    {
      label: "Discover",
      href: "/discover",
      icon: StarIcon,
    },
    {
      label: "Search",
      href: "/search",
      icon: SearchIcon,
    },
  ],
  navItems: [
    {
      label: "Notifications",
      href: "?notificationView=true",
      icon: BellIcon,
    },
    {
      label: "Account",
      href: "https://www.spotify.com/account/overview/",
      icon: LockOpenIcon,
    },
    {
      label: "Friends",
      href: "?friendView=true",
      icon: UsersIcon,
    },
    {
      label: "Settings",
      href: "/",
      icon: GearIcon,
    },
  ],
  extraMenu: [
    {
      label: "Pins",
      href: "",
      icon: PinIcon,
      // subMenu: [],
    },
    {
      label: "Playlists",
      href: "",
      icon: PlaylistIcon,
      // subMenu: [],
    },
    {
      label: "Liked Songs",
      href: "",
      icon: FavouriteIcon,
    },
    {
      label: "Saves",
      href: "",
      icon: SaveIcon,
    },
    {
      label: "Albums",
      href: "",
      icon: MusicIcon,
    },
    {
      label: "Folders",
      href: "",
      icon: FolderIcon,
    },
    {
      label: "Podcasts",
      href: "",
      icon: MicrophoneIcon,
    },
    {
      label: "Audiobooks",
      href: "",
      icon: BookIcon,
    },
    {
      label: "Artists",
      href: "",
      icon: ArtistIcon,
    },
  ],
};

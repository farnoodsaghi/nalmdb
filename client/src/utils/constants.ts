type TopBarObj = {
  id: number;
  name: string;
};

type SideBarItems = {
  menu: SideBarMenu[];
  library: SideBarMenu[];
};

type SideBarMenu = {
  id: number;
  icon: string;
  name: string;
};

type Sort = {
  id: number;
  name: string;
};

type Genre = {
  id: number;
  name: string;
};

export const TOP_BAR_ITEMS: TopBarObj[] = [
  { id: 1, name: "Movies" },
  { id: 2, name: "TV Shows" },
];

export const SIDEBAR_MENU: SideBarMenu[] = [
  { id: 1, name: "Home", icon: "fluent:home-16-filled" },
  { id: 2, name: "Browse", icon: "fa-regular:compass" },
  { id: 3, name: "Top Rated", icon: "ant-design:star-filled" },
  { id: 4, name: "Trending", icon: "bxs:bar-chart-alt-2" },
];

export const SIDEBAR_ITEMS: SideBarItems = {
  menu: [
    { id: 1, name: "Home", icon: "fluent:home-16-filled" },
    { id: 2, name: "Browse", icon: "fa-regular:compass" },
    { id: 3, name: "Top Rated", icon: "ant-design:star-filled" },
    { id: 4, name: "Trending", icon: "bxs:bar-chart-alt-2" },
  ],
  library: [
    { id: 5, name: "Reviews", icon: "material-symbols:reviews-outline" },
    { id: 6, name: "Watchlist", icon: "heroicons:bookmark-solid" },
  ],
};

export const SORT_VALUES: Sort[] = [
  { id: 1, name: "Popularity Ascending" },
  { id: 2, name: "Popularity Descending" },
  { id: 3, name: "Rating: High to Low" },
  { id: 4, name: "Rating: Low to High" },
  { id: 5, name: "Name: A to Z" },
  { id: 6, name: "Name: Z to A" },
];

export const GENRE_VALUES: Genre[] = [
  { id: 1, name: "Action" },
  { id: 2, name: "Comedy" },
  { id: 3, name: "Crime" },
  { id: 4, name: "Drama" },
  { id: 5, name: "Fantasy" },
  { id: 6, name: "Scifi" },
];

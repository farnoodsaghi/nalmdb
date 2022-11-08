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
  value: string;
};

type Genre = {
  id: number;
  name: string;
  movieId: string;
  tvId: string;
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
  { id: 1, name: "Popularity Descending", value: "popularity.desc" },
  { id: 2, name: "Popularity Ascending", value: "popularity.asc" },
  { id: 3, name: "Rating: High to Low", value: "vote_average.desc" },
  { id: 4, name: "Rating: Low to High", value: "vote_average.asc" },
  { id: 5, name: "Name: A to Z", value: "original_title.desc" },
  { id: 6, name: "Name: Z to A", value: "original_title.asc" },
];

export const GENRE_VALUES: Genre[] = [
  { id: 1, name: "Action", movieId: "28", tvId: "10759" },
  { id: 2, name: "Comedy", movieId: "35", tvId: "35" },
  { id: 3, name: "Crime", movieId: "80", tvId: "80" },
  { id: 4, name: "Drama", movieId: "18", tvId: "18" },
  { id: 5, name: "Fantasy", movieId: "14", tvId: "10765" },
  { id: 6, name: "Sci-Fi", movieId: "878", tvId: "10765" },
];

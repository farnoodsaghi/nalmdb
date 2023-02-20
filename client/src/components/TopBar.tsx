import React from "react";
import { MoviesContext } from "../context/moviesContext";
import { TOP_BAR_ITEMS } from "../utils/constants";
import Search from "./Search";
import { Icon } from "@iconify/react";

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = ({}) => {
  const {
    active_topbar,
    handleActiveTopBar,
    handleSidebarOnMobile,
    is_sidebar_open,
  } = React.useContext(MoviesContext)!;
  return (
    <nav className="flex flex-row justify-between items-baseline w-full md:w-[calc(100%-5.25rem)] lg:w-5/6 h-24 font-sarabun bg-carbon-black text-light-grey lg:ml-1/6f md:ml-[5.25rem] fixed top-0 z-50">
      <div
        onClick={() => handleSidebarOnMobile(!is_sidebar_open)}
        className="flex md:hidden justify-center items-center self-center ml-12 cursor-pointer"
      >
        <Icon icon="quill:hamburger" className="w-8 h-8" />
      </div>
      <div className="flex flex-row justify-between gap-8 text-xl font-light items-start mt-8 md:ml-12">
        {TOP_BAR_ITEMS.map((item) => {
          const { id, name } = item;
          return (
            <h2
              key={id}
              onClick={() => handleActiveTopBar(id)}
              className={`hover:text-white cursor-pointer ${
                active_topbar === id && "text-white"
              }`}
            >
              {name}
            </h2>
          );
        })}
      </div>
      <Search />
    </nav>
  );
};

export default TopBar;

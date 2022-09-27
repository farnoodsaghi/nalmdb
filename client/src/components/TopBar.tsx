import React from "react";
import { MoviesContext } from "../context/moviesContext";
import { TOP_BAR_ITEMS } from "../utils/constants";
import Search from "./Search";

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = ({}) => {
  const { active_topbar, handleActiveTopBar } =
    React.useContext(MoviesContext)!;
  return (
    <nav className="flex flex-row justify-between items-baseline w-5/6 h-24 font-sarabun bg-carbon-black text-light-grey ml-1/6f fixed top-0 z-50">
      <div className="flex flex-row justify-between gap-8 text-xl font-light items-start h-full mt-8 ml-12">
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

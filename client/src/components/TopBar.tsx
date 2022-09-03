import React from "react";
import { Icon } from "@iconify/react";

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = ({}) => {
  return (
    <nav className="flex flex-row justify-between items-baseline w-19/30f h-24 font-sarabun bg-carbon-black text-light-grey ml-1/6f mr-1/5f fixed top-0">
      <div className="flex flex-row justify-between gap-8 text-xl font-light items-start h-full mt-8 ml-8">
        <h2>Movies</h2>
        <h2>TV Shows</h2>
      </div>
      <div className="flex flex-row justify-between items-center bg-off-black text-light-grey rounded-md mr-8">
        <form>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent p-3 border-none outline-none placeholder:text-lg"
          />
        </form>
        <Icon icon="eva:search-fill" className="w-6 h-6 self-center mr-3" />
      </div>
    </nav>
  );
};

export default TopBar;

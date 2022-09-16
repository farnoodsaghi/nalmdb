import React from "react";
import { Icon } from "@iconify/react";
import { AppContext } from "../context/context";
import { TOP_BAR_ITEMS } from "../utils/constants";

interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = ({}) => {
  const { activeTopBar, handleActiveTopBar } = React.useContext(AppContext)!;
  return (
    <nav className="flex flex-row justify-between items-baseline w-19/30f h-24 font-sarabun bg-carbon-black text-light-grey ml-1/6f mr-1/5f fixed top-0 z-50">
      <div className="flex flex-row justify-between gap-8 text-xl font-light items-start h-full mt-8 ml-8">
        {TOP_BAR_ITEMS.map((item) => {
          const { id, name } = item;
          return (
            <h2
              key={id}
              onClick={() => handleActiveTopBar(id)}
              className={`hover:text-white cursor-pointer ${
                activeTopBar === id && "text-white"
              }`}
            >
              {name}
            </h2>
          );
        })}
      </div>
      <div className="flex flex-row justify-between items-center bg-off-black text-light-grey rounded-md mr-8">
        <form>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent p-3 border-none outline-none placeholder:text-lg placeholder:text-light-grey"
          />
        </form>
        <Icon icon="eva:search-fill" className="w-6 h-6 self-center mr-3" />
      </div>
    </nav>
  );
};

export default TopBar;

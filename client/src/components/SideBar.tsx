import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import SideBarListItem from "./SideBarListItem";
import { MoviesContext } from "../context/moviesContext";
import { SIDEBAR_ITEMS } from "../utils/constants";

interface SideBarProps {}

interface MenuItem {
  id: number;
  name: string;
  icon: string;
}

const SideBar: React.FC<SideBarProps> = ({}) => {
  const { active_sidebar } = React.useContext(MoviesContext)!;
  const { menu, library } = SIDEBAR_ITEMS;
  return (
    <nav className="flex flex-col justify-between items-start fixed w-1/6 h-screen bg-off-black">
      <div>
        <Link to="/">
          <span className="block font-viga text-2xl mt-8 ml-8 text-white cursor-pointer">
            <h1>NALMDB</h1>
          </span>
        </Link>
      </div>
      <div className="flex flex-col justify-between gap-3 w-full">
        <span className="block font-dosis uppercase text-xs font-semibold ml-8 text-light-grey">
          <h4>MENU</h4>
        </span>
        {menu.map((menuItem: MenuItem) => {
          return (
            <Link
              to={menuItem.name.toLowerCase().replace(" ", "")}
              key={menuItem.id}
            >
              <SideBarListItem {...menuItem} activeId={active_sidebar} />
            </Link>
          );
        })}
        <span className="flex flex-row justify-center items-center self-center my-4 h-px w-3/4 bg-light-grey" />
        <span className="block font-dosis uppercase text-xs font-semibold ml-8 text-light-grey">
          <h4>LIBRARY</h4>
        </span>
        {library.map((menuItem: MenuItem) => {
          return (
            <Link
              to={menuItem.name.toLowerCase().replace(" ", "")}
              key={menuItem.id}
            >
              <SideBarListItem
                key={menuItem.id}
                {...menuItem}
                activeId={active_sidebar}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col basis-1/5 justify-between gap-2 w-full"></div>
      <div className="flex flex-col justify-between gap-2 w-full mb-8">
        <span className="flex flex-row justify-start items-end gap-2 ml-8 mt-2 font-sarabun font-lg font-normal text-light-grey leading-tight hover:text-white cursor-pointer">
          <Icon icon="ci:settings" className="w-5 h-5" />
          <h3>Settings</h3>
        </span>
        <span className="flex flex-row justify-start items-end gap-2 ml-8 mt-2 font-sarabun font-lg font-normal text-light-grey leading-tight hover:text-white cursor-pointer">
          <Icon icon="heroicons-outline:logout" className="w-5 h-5" />
          <h3>Logout</h3>
        </span>
      </div>
    </nav>
  );
};

export default SideBar;

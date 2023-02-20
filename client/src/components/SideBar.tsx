import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import SideBarListItem from "./SideBarListItem";
import { MoviesContext } from "../context/moviesContext";
import { UserContext } from "../context/userContext";
import { SIDEBAR_ITEMS } from "../utils/constants";

interface SideBarProps {}

interface MenuItem {
  id: number;
  name: string;
  icon: string;
}

const SideBar: React.FC<SideBarProps> = ({}) => {
  const { active_sidebar, is_sidebar_open } = React.useContext(MoviesContext)!;
  const { handleUserLogout, is_logged_in } = React.useContext(UserContext)!;
  const { menu, library } = SIDEBAR_ITEMS;
  return (
    <nav
      className={`${
        is_sidebar_open ? "flex" : "hidden"
      } md:flex flex-col justify-between lg:items-start items-center fixed lg:w-1/6 md:min-w-[5.25rem] h-screen bg-off-black z-[100] md:z-0`}
    >
      <div>
        <Link to="/">
          <span className="block font-viga text-2xl mx-auto mt-8 lg:ml-8 text-white cursor-pointer">
            <h1 className="md:hidden lg:inline-block lg:text-2xl">NALMDB</h1>
            <h1 className="md:text-4xl lg:hidden mb-8">N</h1>
          </span>
        </Link>
      </div>
      <div className="flex flex-col justify-between md:gap-6 lg:gap-3 w-full">
        <span className="block font-dosis uppercase text-xs font-semibold mx-auto lg:ml-8 text-light-grey">
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
        <span className="block font-dosis uppercase text-xs font-semibold mx-auto lg:ml-8 text-light-grey">
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
      <div className="flex flex-col justify-between lg:gap-3 md:gap-6 w-full mb-8">
        <span className="flex flex-row justify-start items-end gap-2 ml-8 mt-2 font-sarabun font-lg font-normal text-light-grey leading-tight hover:text-white cursor-pointer">
          <Icon icon="ci:settings" className="lg:w-5 lg:h-5 md:w-7 md:h-7" />
          <h3 className="md:hidden lg:inline">Settings</h3>
        </span>
        <Link to={!is_logged_in ? "/login" : "/"}>
          <span
            onClick={() => {
              if (is_logged_in) {
                handleUserLogout();
              }
            }}
            className="flex flex-row justify-start items-end gap-2 ml-8 mt-2 font-sarabun font-lg font-normal text-light-grey leading-tight hover:text-white cursor-pointer"
          >
            <Icon
              icon={
                is_logged_in
                  ? "heroicons-outline:logout"
                  : "heroicons-outline:login"
              }
              className="lg:w-5 lg:h-5 md:w-7 md:h-7"
            />
            <h3 className="md:hidden lg:inline">
              {is_logged_in ? "Logout" : "Login"}
            </h3>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;

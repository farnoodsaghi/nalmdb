import React from "react";
import { Icon } from "@iconify/react";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = ({}) => {
  return (
    <nav className="flex flex-col justify-between items-start fixed w-1/6 h-screen bg-off-black">
      <div>
        <span className="block font-viga text-2xl mt-8 ml-8 text-white cursor-pointer">
          <h1>NALMDB</h1>
        </span>
      </div>
      <div className="flex flex-col justify-between gap-3 w-full">
        <span className="block font-dosis uppercase text-xs font-semibold ml-8 text-light-grey">
          <h4>MENU</h4>
        </span>
        <span className="flex flex-row justify-start items-end gap-2 ml-8 mt-2 font-sarabun font-lg font-normal text-light-grey leading-tight hover:text-white cursor-pointer">
          <Icon icon="fluent:home-16-filled" className="w-5 h-5" />
          <h3>Home</h3>
        </span>
        <span className="flex flex-row justify-start items-end gap-2 ml-8 mt-2 font-sarabun font-lg font-normal text-light-grey leading-tight hover:text-white cursor-pointer">
          <Icon icon="fa-regular:compass" className="w-5 h-5" />
          <h3>Browse</h3>
        </span>
        <span className="flex flex-row justify-start items-end gap-2 ml-8 mt-2 font-sarabun font-lg font-normal text-light-grey leading-tight hover:text-white cursor-pointer">
          <Icon icon="ant-design:star-filled" className="w-5 h-5" />
          <h3>Top Rated</h3>
        </span>
        <span className="flex flex-row justify-start items-end gap-2 ml-8 mt-2 font-sarabun font-lg font-normal text-light-grey leading-tight hover:text-white cursor-pointer">
          <Icon icon="bxs:bar-chart-alt-2" className="w-5 h-5" />
          <h3>Trending</h3>
        </span>
        <span className="flex flex-row justify-center items-center self-center my-4 h-px w-3/4 bg-light-grey" />
        <span className="block font-dosis uppercase text-xs font-semibold ml-8 text-light-grey">
          <h4>LIBRARY</h4>
        </span>
        <span className="flex flex-row justify-start items-end gap-2 ml-8 mt-2 font-sarabun font-lg font-normal text-light-grey leading-tight hover:text-white cursor-pointer">
          <Icon icon="material-symbols:reviews-outline" className="w-5 h-5" />
          <h3>Reviews</h3>
        </span>
        <span className="flex flex-row justify-start items-end gap-2 ml-8 mt-2 font-sarabun font-lg font-normal text-light-grey leading-tight hover:text-white cursor-pointer">
          <Icon icon="heroicons:bookmark" className="w-5 h-5" />
          <h3>Watchlist</h3>
        </span>
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

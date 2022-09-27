import React from "react";
import { Outlet } from "react-router-dom";
import { Recommend, SideBar, TopBar } from "../components";

interface SharedLayoutProps {}

const SharedLayout: React.FC<SharedLayoutProps> = ({}) => {
  return (
    <>
      <header className="flex flex-row justify-start">
        <SideBar />
        <TopBar />
        {/* <Recommend /> */}
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;

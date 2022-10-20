import React from "react";
import { Icon } from "@iconify/react";
import { MoviesContext } from "../context/moviesContext";

interface SideBarListItemProps {
  id: number;
  activeId: number;
  icon: string;
  name: string;
}

const SideBarListItem: React.FC<SideBarListItemProps> = ({
  id,
  activeId,
  icon,
  name,
}) => {
  const { handleActiveSideBar } = React.useContext(MoviesContext)!;
  return (
    <span
      onClick={() => handleActiveSideBar(id)}
      className="flex flex-row justify-start items-end gap-2 ml-8 mt-2 font-sarabun font-lg font-normal text-light-grey leading-tight hover:text-white cursor-pointer"
    >
      <Icon
        icon={icon}
        className={`w-5 h-5 ${activeId === id && "text-royal-purple"}`}
      />
      <h3>{name}</h3>
      {activeId === id && (
        <span className="ml-auto bg-royal-purple w-1 h-5 rounded-l-md"></span>
      )}
    </span>
  );
};

export default SideBarListItem;

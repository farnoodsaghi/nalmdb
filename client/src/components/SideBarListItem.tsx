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
      className="flex flex-row md:justify-center lg:justify-start items-end gap-2 lg:ml-8 mt-2 font-sarabun font-lg font-normal text-light-grey leading-tight hover:text-white cursor-pointer"
    >
      <Icon
        icon={icon}
        className={`lg:w-5 lg:h-5 md:w-7 md:h-7 ${
          activeId === id && "text-royal-purple"
        }`}
      />
      <h3 className="md:hidden lg:inline">{name}</h3>
      {activeId === id && (
        <span className="md:hidden lg:inline ml-auto bg-royal-purple w-1 h-5 rounded-l-md"></span>
      )}
    </span>
  );
};

export default SideBarListItem;

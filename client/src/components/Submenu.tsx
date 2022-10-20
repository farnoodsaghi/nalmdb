import React, { useState, useRef, useEffect } from "react";
import { findValById } from "../utils/helpers";
import { MoviesContext } from "../context/moviesContext";

interface SubmenuProps {
  values: Sort[] | Genre[];
  updateFunction: (id: number) => void;
  current: number;
}

interface SubmenuLocation {
  left?: number;
  top?: number;
}

interface Sort {
  id: number;
  name: string;
}

interface Genre {
  id: number;
  name: string;
}

const Submenu: React.FC<SubmenuProps> = ({
  values,
  updateFunction,
  current,
}) => {
  const {
    trending_list,
    trending_loading,
    top_rated_list,
    top_rated_loading,
    current_sort,
    current_genre,
    handleCurrentSort,
    handleCurrentGenre,
  } = React.useContext(MoviesContext)!;
  const submenuRef = useRef<HTMLInputElement | null>(null);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<Boolean>(false);
  const [submenuLocation, setSubmenuLocation] = useState<SubmenuLocation>({});

  useEffect(() => {
    const { left, top } = submenuLocation;
    submenuRef!.current!.style.left = `${left}px`;
    submenuRef!.current!.style.top = `${top}px`;
  }, [submenuLocation]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [submenuRef]);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      submenuRef.current &&
      !submenuRef.current.contains(e.target as HTMLElement)
    ) {
      setIsSubmenuOpen(false);
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setIsSubmenuOpen(true);
    const node = e.target as HTMLElement;
    const position = node!.getBoundingClientRect();
    const coordinates = {
      left: position.left,
      top: position.bottom + 3,
    };
    setSubmenuLocation(coordinates);
  };
  return (
    <div className="flex flex-col justify-start items-center">
      <div onClick={handleClick} className="cursor-pointer">
        <h4 className="font-sarabun text-white font-medium text-sm">
          {findValById(values, current)}
        </h4>
      </div>
      <div
        className={`${
          !isSubmenuOpen && "hidden"
        } flex flex-col justify-center items-start gap-3 z-50 absolute bg-off-black p-4 w-max rounded-md`}
        ref={submenuRef}
      >
        {values.map((val) => {
          return (
            <p
              key={val.id}
              className="font-sarabun text-light-grey font-medium text-sm cursor-pointer"
              onClick={() => updateFunction(val.id)}
            >
              {val.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;

import React from "react";
import MovieSlider from "./MovieSlider";

interface MoveSliderBoxProps {
  title: string;
}

const MoveSliderBox: React.FC<MoveSliderBoxProps> = ({ title }) => {
  return (
    <div className="flex flex-col w-[calc(100%-4rem)] h-40 justify-center items-start mx-auto mt-12">
      <div className="flex flex-row justify-between items-baseline group gap-3">
        <h3 className="text-white font-sarabun text-base font-semibold cursor-pointer">
          {title}
        </h3>
        <div className="overflow-hidden">
          <p className="text-light-grey relative font-sarabun -left-20 group-hover:translate-x-20 ease-in-out duration-300 text-xs font-normal hover:text-indigo-400 cursor-pointer">
            Browse All
          </p>
        </div>
      </div>
      <MovieSlider />
    </div>
  );
};

export default MoveSliderBox;

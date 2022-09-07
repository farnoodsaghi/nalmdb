import React from "react";
import MovieSlider from "./MovieSlider";

interface MoveSliderBoxProps {
  title: string;
}

const MoveSliderBox: React.FC<MoveSliderBoxProps> = ({ title }) => {
  return (
    <div className="flex flex-col w-[calc(100%-4rem)] h-40 justify-center items-start mx-auto mt-12">
      <h3 className="text-white font-sarabun text-base font-semibold">
        {title}
      </h3>
      <MovieSlider />
    </div>
  );
};

export default MoveSliderBox;

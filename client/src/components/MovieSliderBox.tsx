import React from "react";
import MovieSlider from "./MovieSlider";
import useSliderType from "../hooks/useSliderType";

interface MoveSliderBoxProps {
  title: string;
  type: string;
}

const MoveSliderBox: React.FC<MoveSliderBoxProps> = ({ title, type }) => {
  const { loading, error, titleList } = useSliderType(type)!;

  if (loading) {
    return <h4>Loading...</h4>;
  }
  return (
    <div className="flex flex-col w-[calc(100%-6rem)] h-max justify-center items-start mx-auto mt-14">
      <div className="flex flex-row justify-between items-baseline group gap-3">
        <h3 className="text-white font-sarabun text-xl font-semibold cursor-pointer">
          {title}
        </h3>
        <div className="overflow-hidden">
          <p className="text-light-grey relative font-sarabun -left-20 group-hover:translate-x-20 ease-in-out duration-300 text-base font-normal hover:text-indigo-400 cursor-pointer">
            Browse All
          </p>
        </div>
      </div>
      <MovieSlider contentList={titleList} />
    </div>
  );
};

export default MoveSliderBox;

import React from "react";
import RecommendedItem from "./RecommendedItem";

interface RecItemBoxProps {
  title: string;
}

const RecItemBox: React.FC<RecItemBoxProps> = ({ title }) => {
  return (
    <div className="flex flex-col w-full m-8 justify-start items-start font-sarabun text-white text-lg font-medium gap-10">
      <h2>{title}</h2>
      <RecommendedItem />
      <RecommendedItem />
      <RecommendedItem />
      <RecommendedItem />
      <RecommendedItem />
    </div>
  );
};

export default RecItemBox;

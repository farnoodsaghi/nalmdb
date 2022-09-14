import React from "react";
import RecItemBox from "./RecItemBox";

interface RecommendProps {}

const Recommend: React.FC<RecommendProps> = ({}) => {
  return (
    <div className="flex flex-col h-full w-1/5 bg-off-black fixed right-0 overflow-auto">
      <RecItemBox title="Recommended Titles" />
    </div>
  );
};

export default Recommend;

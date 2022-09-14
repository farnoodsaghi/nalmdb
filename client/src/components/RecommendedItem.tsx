import React from "react";
import { Icon } from "@iconify/react";

interface RecommendedItemProps {}

const RecommendedItem: React.FC<RecommendedItemProps> = ({}) => {
  return (
    <div className="flex flex-col w-full gap-2 justify-start items-start font-light text-light-grey">
      <div className="flex flex-row h-[6.5rem] gap-3">
        <div className="bg-dark-grey w-20 h-full rounded-md"></div>
        <div className="flex flex-col justify-between items-start h-full text-xs">
          <h4 className="text-sm font-normal mt-0.5">Succession</h4>
          <div className="flex flex-col gap-2 text-xs mb-0.5">
            <span className="flex flex-row justify-start items-center gap-2">
              <Icon
                icon="fluent-emoji-high-contrast:popcorn"
                className="w-3.5 h-3.5"
              />
              <p>91%</p>
            </span>
            <span className="flex flex-row justify-start items-center gap-2">
              <Icon icon="dashicons:thumbs-up" className="w-3.5 h-3.5" />
              <p>96%</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedItem;

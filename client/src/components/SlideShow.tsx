import React from "react";
import { Icon } from "@iconify/react";

interface SlideShowProps {}

const SlideShow: React.FC<SlideShowProps> = ({}) => {
  return (
    <div className="flex justify-center items-center w-[calc(100%-4rem)] h-[22rem] bg-dark-grey flex-1 mx-auto rounded-md mt-6 relative group">
      <button className="invisible group-hover:visible bg-light-grey text-white rounded-full bg-opacity-60 w-10 h-10 absolute left-8 z-10 hover:backdrop-brightness-50">
        <Icon
          icon="akar-icons:chevron-left"
          className="w-5 h-5 text-white m-auto"
        />
      </button>
      <button className="invisible group-hover:visible bg-light-grey text-white rounded-full bg-opacity-60 w-10 h-10 absolute right-8 z-10 hover:backdrop-brightness-50">
        <Icon
          icon="akar-icons:chevron-right"
          className="w-5 h-5 text-white m-auto"
        />
      </button>
      <div className="flex flex-row justify-between items-center self-end absolute bottom-10 left-20 gap-1.5 z-10">
        <button className="bg-royal-purple text-white rounded-md font-normal text-base w-24 h-10 p-2 bg-opacity-80 hover:backdrop-brightness-50">
          Review
        </button>
        <button className="bg-light-grey text-white rounded-md bg-opacity-60 w-10 h-10 p-2 hover:backdrop-brightness-50">
          <Icon icon="eva:plus-fill" className="w-5 h-5 text-white m-auto" />
        </button>
      </div>
    </div>
  );
};

export default SlideShow;

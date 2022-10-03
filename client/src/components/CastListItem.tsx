import React from "react";

interface CastListItemProps {}

const CastListItem: React.FC<CastListItemProps> = ({}) => {
  return (
    <div className="flex flex-row gap-3">
      <div className="flex w-16 h-16 rounded-full bg-dark-grey"></div>
      <div className="flex flex-col justify-center items-start">
        <h6 className="text-normal font-light font-sarabun text-white">
          Úrsula Coberó
        </h6>
        <p className="text-normal font-light font-sarabun text-light-grey">
          as Tokyo
        </p>
      </div>
    </div>
  );
};

export default CastListItem;

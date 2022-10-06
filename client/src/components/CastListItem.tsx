import React from "react";
import defaultProfile from "../assets/default_profile_path.png";

interface CastListItemProps {
  name: string;
  character: string;
  profile_path: string;
}

const CastListItem: React.FC<CastListItemProps> = ({
  name,
  character,
  profile_path,
}) => {
  return (
    <div className="flex flex-row gap-3">
      <div className="flex w-16 h-16 rounded-full bg-dark-grey">
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/original${profile_path}`
              : defaultProfile
          }
          alt="name"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-start overflow-hidden text-ellipsis whitespace-nowrap">
        <h6 className="text-normal font-light font-sarabun text-white">
          {name}
        </h6>
        <p className="text-normal font-light font-sarabun text-light-grey">
          as {character}
        </p>
      </div>
    </div>
  );
};

export default CastListItem;

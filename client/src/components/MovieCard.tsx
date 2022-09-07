import React from "react";

interface MovieCardProps {
  children?: React.ReactNode;
}

const MovieCard: React.FC<MovieCardProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-24 min-w-[10rem] bg-dark-grey rounded-md cursor-pointer">
      {children}
    </div>
  );
};

export default MovieCard;

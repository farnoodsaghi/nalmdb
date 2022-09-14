import React from "react";

interface MovieCardProps {
  children?: React.ReactNode;
}

const MovieCard: React.FC<MovieCardProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center bg-dark-grey rounded-md cursor-pointer hover:brightness-75 snap-start max-h-full aspect-video">
      {children}
    </div>
  );
};

export default MovieCard;

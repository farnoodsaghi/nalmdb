import React from "react";

interface MovieCardProps {
  children?: React.ReactNode;
  poster_path: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ children, poster_path }) => {
  return (
    <div className="flex justify-center items-center bg-dark-grey rounded-md cursor-pointer hover:brightness-75 snap-start max-h-full aspect-[1/1.5]">
      {/* {children} */}
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="aspect-[1/1.5] object-cover rounded-md"
      />
    </div>
  );
};

export default MovieCard;

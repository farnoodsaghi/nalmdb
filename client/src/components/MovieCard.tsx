import React from "react";
import { Link } from "react-router-dom";

interface MovieCardProps {
  children?: React.ReactNode;
  poster_path: string;
  id: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ poster_path, id }) => {
  return (
    <div className="flex justify-center items-center bg-dark-grey rounded-md cursor-pointer hover:brightness-75 snap-start max-h-full aspect-[1/1.5]">
      <Link to={`/title/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="aspect-[1/1.5] object-cover rounded-md"
        />
      </Link>
    </div>
  );
};

export default MovieCard;

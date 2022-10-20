import React from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../context/moviesContext";

interface MovieCardProps {
  children?: React.ReactNode;
  poster_path: string;
  id: string;
  media_type: undefined | string;
  first_air_date: undefined | string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  poster_path,
  id,
  media_type,
  first_air_date,
}) => {
  const { handleMediaType } = React.useContext(MoviesContext)!;
  return (
    <div
      onClick={() => {
        handleMediaType(
          media_type ? media_type : first_air_date ? "tv" : "movie"
        );
      }}
      className="flex justify-center items-center bg-dark-grey rounded-md cursor-pointer hover:brightness-75 snap-start max-h-full aspect-[1/1.5]"
    >
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

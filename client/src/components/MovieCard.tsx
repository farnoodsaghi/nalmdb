import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../context/moviesContext";
import { CircleRating } from "../components";

interface MovieCardProps {
  children?: React.ReactNode;
  poster_path: string;
  id: string;
  media_type: undefined | string;
  first_air_date: undefined | string;
  vote_average: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  poster_path,
  id,
  media_type,
  first_air_date,
  vote_average,
}) => {
  const { handleMediaType } = React.useContext(MoviesContext)!;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onClick={() => {
        handleMediaType(
          media_type ? media_type : first_air_date ? "tv" : "movie"
        );
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex justify-center items-center bg-dark-grey rounded-md cursor-pointer snap-start max-h-full aspect-[1/1.5]"
    >
      <Link to={`/title/${id}`} className="relative">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className={`aspect-[1/1.5] object-cover rounded-md ${
            isHovered && "brightness-[0.60]"
          }`}
        />
        <div
          className={`${
            isHovered ? "flex" : "hidden"
          } justify-center items-center top-0 w-full h-full absolute z-10 scale-50`}
        >
          <CircleRating rating={vote_average} />
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;

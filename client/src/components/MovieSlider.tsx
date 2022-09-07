import React from "react";
import MovieCard from "./MovieCard";

interface MovieSliderProps {}

const MovieSlider: React.FC<MovieSliderProps> = ({}) => {
  return (
    <div className="flex justify-center items-center w-full h-24 gap-3 mx-auto mt-4 overflow-auto no-scrollbar">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default MovieSlider;

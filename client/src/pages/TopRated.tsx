import React from "react";
import { MovieGridList } from "../components";
import { MoviesContext } from "../context/moviesContext";
import { Loading } from "../components";

interface TopRatedProps {}

const TopRated: React.FC<TopRatedProps> = ({}) => {
  const { top_rated_list, top_rated_loading } =
    React.useContext(MoviesContext)!;
  if (top_rated_loading) {
    return <Loading />;
  }
  return <MovieGridList list={top_rated_list} />;
};

export default TopRated;

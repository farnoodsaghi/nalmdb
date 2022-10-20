import React from "react";
import { MovieGridList } from "../components";
import { MoviesContext } from "../context/moviesContext";
import { Loading } from "../components";

interface TrendingProps {}

const Trending: React.FC<TrendingProps> = ({}) => {
  const { trending_list, trending_loading } = React.useContext(MoviesContext)!;
  if (trending_loading) {
    return <Loading />;
  }
  return <MovieGridList list={trending_list} />;
};

export default Trending;

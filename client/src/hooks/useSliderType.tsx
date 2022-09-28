import React from "react";
import { MoviesContext } from "../context/moviesContext";

interface Config {
  loading: boolean;
  error: boolean;
  titleList: any[];
}

const useSliderType = (type: string): Config | undefined => {
  const {
    trending_list,
    trending_loading,
    trending_error,
    top_rated_list,
    top_rated_loading,
    top_rated_error,
    action_list,
    action_loading,
    action_error,
    comedy_list,
    comedy_loading,
    comedy_error,
    drama_list,
    drama_loading,
    drama_error,
  } = React.useContext(MoviesContext)!;

  if (type === "trending") {
    return {
      loading: trending_loading,
      error: trending_error,
      titleList: trending_list,
    };
  }
  if (type === "top_rated") {
    return {
      loading: top_rated_loading,
      error: top_rated_error,
      titleList: top_rated_list,
    };
  }
  if (type === "action") {
    return {
      loading: action_loading,
      error: action_error,
      titleList: action_list,
    };
  }
  if (type === "comedy") {
    return {
      loading: comedy_loading,
      error: comedy_error,
      titleList: comedy_list,
    };
  }
  if (type === "drama") {
    return {
      loading: drama_loading,
      error: drama_error,
      titleList: drama_list,
    };
  }
};

export default useSliderType;

interface SingleTitleEndpoint {
  fetchSingleMovie: string;
  fetchSingleTV: string;
}

export const getSingleTitleEndpoint = (id: string): SingleTitleEndpoint => {
  return {
    fetchSingleMovie: `/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
    fetchSingleTV: `/tv/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  };
};

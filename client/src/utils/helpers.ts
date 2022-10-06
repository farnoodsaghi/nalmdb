interface SingleTitleEndpoint {
  fetchSingleMovie: string;
  fetchSingleTV: string;
}

interface CastEndpoint {
  fetchMovieCast: string;
  fetchTVCast: string;
}

export const getSingleTitleEndpoint = (id: string): SingleTitleEndpoint => {
  return {
    fetchSingleMovie: `/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
    fetchSingleTV: `/tv/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  };
};

export const getCastEndpoint = (id: string): CastEndpoint => {
  return {
    fetchMovieCast: `/movie/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
    fetchTVCast: `/tv/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`,
  };
};

export const formatMovieYear = (date: string): Number => {
  return new Date(date).getFullYear();
};

export const formatTVYear = (firstDate: string, lastDate: string = "") => {
  return `${new Date(firstDate).getFullYear()}-${
    lastDate ? new Date(firstDate).getFullYear() : lastDate
  }`;
};

export const formatTime = (minutes: number): string => {
  let hours = minutes / 60;
  let roundedHours = Math.floor(hours);
  let remainingMinutes = (hours - roundedHours) * 60;
  return `${roundedHours}h ${Math.round(remainingMinutes)}m`;
};

interface SingleTitleEndpoint {
  fetchSingleMovie: string;
  fetchSingleTV: string;
}

interface CastEndpoint {
  fetchMovieCast: string;
  fetchTVCast: string;
}

interface Values {
  id: number;
  name: string;
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

export const findValById = (values: Values[], id: number): string => {
  let currentVal = values.find((val) => val.id === id);
  return currentVal!.name;
};

export const areObjectsEqual = (obj1: any, obj2: any) => {
  const keys1 = Object.keys(obj1),
    keys2 = Object.keys(obj2);
  const vals1 = Object.values(obj1),
    vals2 = Object.values(obj2);
  return (
    keys1.length === keys2.length &&
    keys1.every((key) => keys2.includes(key)) &&
    vals1.length === vals2.length &&
    vals1.every((val) => vals2.includes(val))
  );
};

export const isEqual = (arr: any[], obj: any) => {
  const found = arr.filter((item: any) => {
    return (
      item.id === obj.id &&
      (item.name || item.title) === (obj.name || obj.title)
    );
  });
  return found.length > 0;
};

import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  SET_ACTIVE_TOPBAR,
  SET_ACTIVE_SIDEBAR,
  SET_SEARCH_INPUT,
  SET_TITLE_ID,
  SET_MEDIA_TYPE,
  GET_LATEST_START,
  GET_LATEST_SUCCESS,
  GET_LATEST_ERROR,
  GET_TRENDING_START,
  GET_TRENDING_SUCCESS,
  GET_TRENDING_ERROR,
  GET_TOP_RATED_START,
  GET_TOP_RATED_SUCCESS,
  GET_TOP_RATED_ERROR,
  GET_ACTION_START,
  GET_ACTION_SUCCESS,
  GET_ACTION_ERROR,
  GET_COMEDY_START,
  GET_COMEDY_SUCCESS,
  GET_COMEDY_ERROR,
  GET_CRIME_START,
  GET_CRIME_SUCCESS,
  GET_CRIME_ERROR,
  GET_DRAMA_START,
  GET_DRAMA_SUCCESS,
  GET_DRAMA_ERROR,
  GET_SCIFI_START,
  GET_SCIFI_SUCCESS,
  GET_SCIFI_ERROR,
  GET_SINGLE_TITLE_START,
  GET_SINGLE_TITLE_SUCCESS,
  GET_SINGLE_TITLE_ERROR,
  GET_CAST_START,
  GET_CAST_SUCCESS,
  GET_CAST_ERROR,
  GET_SEARCH_RESULTS_START,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_ERROR,
  SET_CURRENT_SORT,
  SET_CURRENT_GENRE,
  GET_BROWSE_START,
  GET_BROWSE_SUCCESS,
  GET_BROWSE_ERROR,
  SET_REVIEW_MODAL,
  SET_REVIEW_FORM,
  SET_REVIEW_STAR_RATING,
  LOAD_SINGLE_TITLE_REVIEWS,
  ADD_NEW_REVIEW,
  TITLE_TRAILER_START,
  TITLE_TRAILER_SUCCESS,
  TITLE_TRAILER_ERROR,
  SET_RATING_BOX,
  LOAD_RATING_HISTORY_START,
  LOAD_RATING_HISTORY_SUCCESS,
  LOAD_RATING_HISTORY_ERROR,
  SET_MOBILE_SIDEBAR,
} from "../actions";

interface Action {
  type: string;
  payload?: any;
}

interface Title {
  backdrop_path?: string;
  poster_path?: string;
  media_type?: string;
}

export interface State {
  movies_loading: boolean;
  movies_list: Movie[];
  movies_error: boolean;
  search_input: string;
  active_topbar: number;
  active_sidebar: number;
  current_sort: number;
  current_genre: number;
  title_id: string;
  title_media_type: null | string;
  latest_loading: boolean;
  latest_list: any[];
  latest_error: boolean;
  trending_loading: boolean;
  trending_list: any[];
  trending_error: boolean;
  top_rated_loading: boolean;
  top_rated_list: any[];
  top_rated_error: boolean;
  action_loading: boolean;
  action_list: any[];
  action_error: boolean;
  comedy_loading: boolean;
  comedy_list: any[];
  comedy_error: boolean;
  crime_loading: boolean;
  crime_list: any[];
  crime_error: boolean;
  drama_loading: boolean;
  drama_list: any[];
  drama_error: boolean;
  scifi_loading: boolean;
  scifi_list: any[];
  scifi_error: boolean;
  single_title_loading: boolean;
  single_title: Movie;
  single_title_error: boolean;
  cast_loading: boolean;
  cast_list: Cast[];
  cast_error: boolean;
  search_loading: boolean;
  search_list: any[];
  search_error: boolean;
  browse_loading: boolean;
  browse_list: any[];
  browse_error: boolean;
  review_model_open: boolean;
  review_form: ReviewForm;
  review_list: any[];
  current_title_reviews: any;
  rating_box_open: boolean;
  title_trailer_loading: boolean;
  title_trailer_error: boolean;
  title_trailer: any;
  rating_history_loading: boolean;
  rating_history: number;
  rating_history_error: boolean;
  is_sidebar_open: boolean;
}

interface ReviewForm {
  rating: number;
  title: string;
  content: string;
}
interface Movie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  original_title?: string;
  title?: string;
  original_name?: string;
  name?: string;
  overview: string;
  genres: Genres[];
  runtime: number;
  production_countries: ProductionCountries[];
  last_episode_to_air?: LastEpisodeToAir;
  first_air_date?: string;
  last_air_date?: string;
  release_date: string;
  status: string;
  number_of_seasons?: number;
  number_of_episodes?: number;
  vote_average: number;
}

interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface Genres {
  id: number;
  name: string;
}

interface LastEpisodeToAir {
  runtime: number;
}

interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

const reducer = (state: State, action: Action) => {
  if (action.type === SET_ACTIVE_TOPBAR) {
    return { ...state, active_topbar: action.payload };
  }
  if (action.type === SET_ACTIVE_SIDEBAR) {
    return { ...state, active_sidebar: action.payload };
  }
  if (action.type === SET_SEARCH_INPUT) {
    return { ...state, search_input: action.payload };
  }
  if (action.type === SET_TITLE_ID) {
    return { ...state, title_id: action.payload };
  }
  if (action.type === GET_LATEST_START) {
    return { ...state, latest_loading: true };
  }
  if (action.type === GET_LATEST_SUCCESS) {
    return {
      ...state,
      latest_loading: false,
      latest_list: action.payload.filter((title: Title) => {
        return title.backdrop_path !== null && title.poster_path !== null;
      }),
    };
  }
  if (action.type === GET_LATEST_ERROR) {
    return { ...state, latest_loading: false, latest_error: true };
  }
  if (action.type === GET_TRENDING_START) {
    return { ...state, trending_loading: true };
  }
  if (action.type === GET_TRENDING_SUCCESS) {
    return {
      ...state,
      trending_loading: false,
      trending_list: action.payload.filter((title: Title) => {
        return title.backdrop_path !== null && title.poster_path !== null;
      }),
    };
  }
  if (action.type === GET_TRENDING_ERROR) {
    return { ...state, trending_loading: false, trending_error: true };
  }
  if (action.type === GET_TOP_RATED_START) {
    return { ...state, top_rated_loading: true };
  }
  if (action.type === GET_TOP_RATED_SUCCESS) {
    return {
      ...state,
      top_rated_loading: false,
      top_rated_list: action.payload.filter((title: Title) => {
        return title.backdrop_path !== null && title.poster_path !== null;
      }),
    };
  }
  if (action.type === GET_TOP_RATED_ERROR) {
    return { ...state, top_rated_loading: false, top_rated_error: true };
  }
  if (action.type === GET_ACTION_START) {
    return { ...state, action_loading: true };
  }
  if (action.type === GET_ACTION_SUCCESS) {
    return {
      ...state,
      action_loading: false,
      action_list: action.payload.filter((title: Title) => {
        return title.backdrop_path !== null && title.poster_path !== null;
      }),
    };
  }
  if (action.type === GET_ACTION_ERROR) {
    return { ...state, action_loading: false, action_error: true };
  }
  if (action.type === GET_COMEDY_START) {
    return { ...state, comedy_loading: true };
  }
  if (action.type === GET_COMEDY_SUCCESS) {
    return {
      ...state,
      comedy_loading: false,
      comedy_list: action.payload.filter((title: Title) => {
        return title.backdrop_path !== null && title.poster_path !== null;
      }),
    };
  }
  if (action.type === GET_COMEDY_ERROR) {
    return { ...state, comedy_loading: false, comedy_error: true };
  }
  if (action.type === GET_CRIME_START) {
    return { ...state, crime_loading: true };
  }
  if (action.type === GET_CRIME_SUCCESS) {
    return {
      ...state,
      crime_loading: false,
      crime_list: action.payload.filter((title: Title) => {
        return title.backdrop_path !== null && title.poster_path !== null;
      }),
    };
  }
  if (action.type === GET_CRIME_ERROR) {
    return { ...state, crime_loading: false, crime_error: true };
  }
  if (action.type === GET_DRAMA_START) {
    return { ...state, drama_loading: true };
  }
  if (action.type === GET_DRAMA_SUCCESS) {
    return {
      ...state,
      drama_loading: false,
      drama_list: action.payload.filter((title: Title) => {
        return title.backdrop_path !== null && title.poster_path !== null;
      }),
    };
  }
  if (action.type === GET_DRAMA_ERROR) {
    return { ...state, drama_loading: false, drama_error: true };
  }
  if (action.type === GET_SCIFI_START) {
    return { ...state, scifi_loading: true };
  }
  if (action.type === GET_SCIFI_SUCCESS) {
    return {
      ...state,
      scifi_loading: false,
      scifi_list: action.payload.filter((title: Title) => {
        return title.backdrop_path !== null && title.poster_path !== null;
      }),
    };
  }
  if (action.type === GET_SCIFI_ERROR) {
    return { ...state, scifi_loading: false, scifi_error: true };
  }
  if (action.type === GET_SINGLE_TITLE_START) {
    return { ...state, single_title_loading: true };
  }
  if (action.type === GET_SINGLE_TITLE_SUCCESS) {
    return {
      ...state,
      single_title_loading: false,
      single_title: action.payload,
    };
  }
  if (action.type === GET_SINGLE_TITLE_ERROR) {
    return { ...state, single_title_loading: false, single_title_error: true };
  }

  if (action.type === GET_CAST_START) {
    return { ...state, cast_loading: true };
  }
  if (action.type === GET_CAST_SUCCESS) {
    return {
      ...state,
      cast_loading: false,
      cast_list: action.payload,
    };
  }
  if (action.type === GET_CAST_ERROR) {
    return { ...state, cast_loading: false, cast_error: true };
  }
  if (action.type === GET_SEARCH_RESULTS_START) {
    return { ...state, search_loading: true };
  }
  if (action.type === GET_SEARCH_RESULTS_SUCCESS) {
    return {
      ...state,
      search_loading: false,
      search_list: action.payload.filter((title: Title) => {
        return (
          (title.media_type === "movie" || title.media_type === "tv") &&
          title.poster_path !== null
        );
      }),
    };
  }
  if (action.type === GET_SEARCH_RESULTS_ERROR) {
    return { ...state, search_loading: false, search_error: true };
  }
  if (action.type === SET_MEDIA_TYPE) {
    return { ...state, title_media_type: action.payload };
  }
  if (action.type === SET_CURRENT_SORT) {
    return { ...state, current_sort: action.payload };
  }
  if (action.type === SET_CURRENT_GENRE) {
    return { ...state, current_genre: action.payload };
  }
  if (action.type === GET_BROWSE_START) {
    return { ...state, browse_loading: true };
  }
  if (action.type === GET_BROWSE_SUCCESS) {
    return {
      ...state,
      browse_loading: false,
      browse_list: action.payload.filter((title: Title) => {
        return title.backdrop_path !== null && title.poster_path !== null;
      }),
    };
  }
  if (action.type === GET_BROWSE_ERROR) {
    return { ...state, browse_loading: false, browse_error: true };
  }
  if (action.type === SET_REVIEW_MODAL) {
    return { ...state, review_model_open: action.payload };
  }
  if (action.type === SET_REVIEW_FORM) {
    return {
      ...state,
      review_form: { ...state.review_form, ...action.payload },
    };
  }
  if (action.type === SET_REVIEW_STAR_RATING) {
    return {
      ...state,
      review_form: { ...state.review_form, rating: action.payload },
    };
  }
  if (action.type === ADD_NEW_REVIEW) {
    return { ...state, review_list: [...state.review_list, action.payload] };
  }
  if (action.type === LOAD_SINGLE_TITLE_REVIEWS) {
    const { media_id, media_type } = action.payload;
    const { review_list } = state;
    const tempCurrentReviewList = review_list.filter(
      (review) =>
        review.media_id === media_id && review.media_type === media_type
    );
    return { ...state, current_title_reviews: tempCurrentReviewList };
  }
  if (action.type === TITLE_TRAILER_START) {
    return { ...state, title_trailer_loading: true };
  }
  if (action.type === TITLE_TRAILER_SUCCESS) {
    const trailer = action.payload.find((trailer: any) => {
      const { type, official, site } = trailer;
      return type === "Trailer" && site === "YouTube" && official;
    });

    return {
      ...state,
      title_trailer_loading: false,
      title_trailer: trailer
        ? {
            type: trailer.type,
            site: trailer.site,
            key: trailer.key,
            official: trailer.official,
          }
        : {
            type: "",
            site: "",
            key: "",
            official: false,
          },
    };
  }
  if (action.type === TITLE_TRAILER_ERROR) {
    return {
      ...state,
      title_trailer_loading: false,
      title_trailer_error: true,
    };
  }
  if (action.type === SET_RATING_BOX) {
    return { ...state, rating_box_open: action.payload };
  }
  if (action.type === LOAD_RATING_HISTORY_START) {
    return { ...state, rating_history_loading: true };
  }
  if (action.type === LOAD_RATING_HISTORY_SUCCESS) {
    const history = action.payload.filter(
      (title: any) => title.id === Number(state.title_id)
    );
    console.log(history);
    return {
      ...state,
      rating_history_loading: false,
      rating_history: history.length > 0 ? history[0].rating / 2 : 0,
    };
  }
  if (action.type === LOAD_RATING_HISTORY_ERROR) {
    return {
      ...state,
      rating_history_loading: false,
      rating_history_error: true,
    };
  }
  if (action.type === SET_MOBILE_SIDEBAR) {
    return { ...state, is_sidebar_open: action.payload };
  }

  throw Error("Invalid action type");
};

export default reducer;

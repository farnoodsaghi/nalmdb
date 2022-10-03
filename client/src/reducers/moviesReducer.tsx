import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  SET_ACTIVE_TOPBAR,
  SET_SEARCH_INPUT,
  SET_TITLE_ID,
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
} from "../actions";

interface Action {
  type: string;
  payload?: any;
}

interface Title {
  backdrop_path?: string;
  poster_path?: string;
}

export interface State {
  movies_loading: boolean;
  movies_list: Movie[];
  movies_error: boolean;
  search_input: string;
  active_topbar: number;
  title_id: string;
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
}

interface Movie {}

const reducer = (state: State, action: Action) => {
  if (action.type === SET_ACTIVE_TOPBAR) {
    return { ...state, active_topbar: action.payload };
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
    return { ...state, top_rated_loading: true };
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

  throw Error("Invalid action type");
};

export default reducer;

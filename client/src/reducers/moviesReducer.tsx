import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_SINGLE_MOVIE_START,
  GET_SINGLE_MOVIE_SUCCESS,
  GET_SINGLE_MOVIE_ERROR,
  SET_ACTIVE_TOPBAR,
  SET_SEARCH_INPUT,
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
  GET_DRAMA_START,
  GET_DRAMA_SUCCESS,
  GET_DRAMA_ERROR,
} from "../actions";

interface Action {
  type: string;
  payload?: any;
}

export interface State {
  movies_loading: boolean;
  movies_list: Movie[];
  movies_error: boolean;
  single_movie_loading: boolean;
  single_movie: Movie;
  single_movie_error: boolean;
  search_input: string;
  active_topbar: number;
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
  drama_loading: boolean;
  drama_list: any[];
  drama_error: boolean;
}

interface Movie {}

const reducer = (state: State, action: Action) => {
  if (action.type === SET_ACTIVE_TOPBAR) {
    return { ...state, active_topbar: action.payload };
  }
  if (action.type === SET_SEARCH_INPUT) {
    return { ...state, search_input: action.payload };
  }
  if (action.type === GET_TRENDING_START) {
    return { ...state, trending_loading: true };
  }
  if (action.type === GET_TRENDING_SUCCESS) {
    return { ...state, trending_loading: false, trending_list: action.payload };
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
      top_rated_list: action.payload,
    };
  }
  if (action.type === GET_TOP_RATED_ERROR) {
    return { ...state, top_rated_loading: false, top_rated_error: true };
  }
  if (action.type === GET_ACTION_START) {
    return { ...state, action_loading: true };
  }
  if (action.type === GET_ACTION_SUCCESS) {
    return { ...state, action_loading: false, action_list: action.payload };
  }
  if (action.type === GET_ACTION_ERROR) {
    return { ...state, action_loading: false, action_error: true };
  }
  if (action.type === GET_COMEDY_START) {
    return { ...state, comedy_loading: true };
  }
  if (action.type === GET_COMEDY_SUCCESS) {
    return { ...state, comedy_loading: false, comedy_list: action.payload };
  }
  if (action.type === GET_COMEDY_ERROR) {
    return { ...state, comedy_loading: false, comedy_error: true };
  }
  if (action.type === GET_DRAMA_START) {
    return { ...state, drama_loading: true };
  }
  if (action.type === GET_DRAMA_SUCCESS) {
    return { ...state, drama_loading: false, drama_list: action.payload };
  }
  if (action.type === GET_DRAMA_ERROR) {
    return { ...state, drama_loading: false, drama_error: true };
  }

  throw Error("Invalid action type");
};

export default reducer;

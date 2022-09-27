import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_SINGLE_MOVIE_START,
  GET_SINGLE_MOVIE_SUCCESS,
  GET_SINGLE_MOVIE_ERROR,
  SET_ACTIVE_TOPBAR,
  SET_SEARCH_INPUT,
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
}

interface Movie {}

const reducer = (state: State, action: Action) => {
  if (action.type === SET_ACTIVE_TOPBAR) {
    return { ...state, active_topbar: action.payload };
  }
  if (action.type === SET_SEARCH_INPUT) {
    return { ...state, search_input: action.payload };
  }
  throw Error("Invalid action type");
};

export default reducer;

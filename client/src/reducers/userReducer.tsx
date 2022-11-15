import {
  WATCH_LIST_ADD,
  WATCH_LIST_REMOVE,
  GET_USER_NAME,
  NEW_REVIEW_SUBMIT,
  USER_REVIEW_LIST_ADD,
} from "../actions";

export interface State {
  user_name: String;
  user_watch_list: Movie[];
  current_review: any;
  user_reviews_list: any[];
}

interface Action {
  type: string;
  payload?: any;
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
  runtime: number;
  first_air_date?: string;
  last_air_date?: string;
  release_date: string;
  status: string;
  number_of_seasons?: number;
  number_of_episodes?: number;
}

const reducer = (state: State, action: Action): State => {
  if (action.type === GET_USER_NAME) {
    return { ...state, user_name: action.payload };
  }
  if (action.type === WATCH_LIST_ADD) {
    let newWatchList = [...state.user_watch_list];
    newWatchList.unshift(action.payload);
    return {
      ...state,
      user_watch_list: newWatchList,
    };
  }
  if (action.type === WATCH_LIST_REMOVE) {
    return {
      ...state,
      user_watch_list: state.user_watch_list.filter((title) => {
        return JSON.stringify(title) !== JSON.stringify(action.payload);
      }),
    };
  }
  if (action.type === NEW_REVIEW_SUBMIT) {
    return { ...state, current_review: action.payload };
  }
  if (action.type === USER_REVIEW_LIST_ADD) {
    return {
      ...state,
      user_reviews_list: [...state.user_reviews_list, action.payload],
    };
  }
  throw Error("Invalid action type");
};

export default reducer;

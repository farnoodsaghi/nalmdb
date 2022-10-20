import { WATCH_LIST_ADD, WATCH_LIST_REMOVE } from "../actions";

export interface State {
  user_watch_list: Movie[];
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
  throw Error("Invalid action type");
};

export default reducer;

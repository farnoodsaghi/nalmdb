import React, { useReducer } from "react";
import { State } from "../reducers/userReducer";
import reducer from "../reducers/userReducer";
import { MoviesContext } from "./moviesContext";
import { WATCH_LIST_ADD, WATCH_LIST_REMOVE } from "../actions";

interface UserContextProps extends State {
  addToWatchlist: (title: Movie) => void;
  removeFromWatchList: (title: Movie) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
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

const UserContext = React.createContext<UserContextProps | null>(null);

const initialState: State = {
  user_watch_list: [],
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const { active_topbar } = React.useContext(MoviesContext)!;
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToWatchlist = (title: Movie) => {
    dispatch({ type: WATCH_LIST_ADD, payload: title });
  };

  const removeFromWatchList = (title: Movie) => {
    dispatch({
      type: WATCH_LIST_REMOVE,
      payload: title,
    });
  };

  return (
    <UserContext.Provider
      value={{ ...state, addToWatchlist, removeFromWatchList }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

import React, { useReducer } from "react";
import reducer, { State } from "../reducers/moviesReducer";
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

interface MoviesContextProps extends State {
  handleActiveTopBar: (id: number) => void;
  handleSearch: (value: string) => void;
}

const MoviesContext = React.createContext<MoviesContextProps | null>(null);

interface MoviesProviderProps {
  children: React.ReactNode;
}

const initialState = {
  movies_loading: false,
  movies_list: [],
  movies_error: false,
  single_movie_loading: false,
  single_movie: {},
  single_movie_error: false,
  search_input: "",
  active_topbar: 1,
};

const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleActiveTopBar = (id: number): void => {
    dispatch({ type: SET_ACTIVE_TOPBAR, payload: id });
  };

  const handleSearch = (value: string): void => {
    dispatch({ type: SET_SEARCH_INPUT, payload: value });
  };

  return (
    <MoviesContext.Provider
      value={{ ...state, handleActiveTopBar, handleSearch }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesProvider, MoviesContext };

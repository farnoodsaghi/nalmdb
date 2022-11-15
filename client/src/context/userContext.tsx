import React, { useReducer, useEffect } from "react";
import { State } from "../reducers/userReducer";
import reducer from "../reducers/userReducer";
import { MoviesContext } from "./moviesContext";
import {
  WATCH_LIST_ADD,
  WATCH_LIST_REMOVE,
  GET_USER_NAME,
  NEW_REVIEW_SUBMIT,
  USER_REVIEW_LIST_ADD,
} from "../actions";

interface UserContextProps extends State {
  addToWatchlist: (title: Movie) => void;
  removeFromWatchList: (title: Movie) => void;
  handleReviewSubmit: (reviewFormInputs: any) => void;
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
  user_name: "",
  user_watch_list: [],
  current_review: {},
  user_reviews_list: [],
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const { active_topbar } = React.useContext(MoviesContext)!;
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToWatchlist = (title: Movie) => {
    dispatch({ type: WATCH_LIST_ADD, payload: title });
  };

  const handleReviewSubmit = (reviewFormInputs: any): void => {
    dispatch({ type: NEW_REVIEW_SUBMIT, payload: reviewFormInputs });
  };

  const removeFromWatchList = (title: Movie) => {
    dispatch({
      type: WATCH_LIST_REMOVE,
      payload: title,
    });
  };

  useEffect(() => {
    dispatch({ type: GET_USER_NAME, payload: "Greg Smith" });
  }, []);

  useEffect(() => {
    if (Object.keys(state.current_review).length > 0) {
      dispatch({ type: USER_REVIEW_LIST_ADD, payload: state.current_review });
    }
  }, [state.current_review]);

  return (
    <UserContext.Provider
      value={{
        ...state,
        addToWatchlist,
        removeFromWatchList,
        handleReviewSubmit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

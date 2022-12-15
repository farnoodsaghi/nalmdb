import React, { useReducer, useEffect } from "react";
import axios from "../axios";
import { State } from "../reducers/userReducer";
import reducer from "../reducers/userReducer";
import { MoviesContext } from "./moviesContext";
import {
  WATCH_LIST_ADD,
  WATCH_LIST_REMOVE,
  NEW_REVIEW_SUBMIT,
  USER_REVIEW_LIST_ADD,
  REVIEW_LIST_REMOVE,
  TOKEN_REQUEST_START,
  TOKEN_REQUEST_SUCCESS,
  TOKEN_REQUEST_ERROR,
  SESSION_ID_START,
  SESSION_ID_SUCCESS,
  SESSION_ID_ERROR,
  LOGIN,
  VERIFY_USER,
  USER_LOGOUT_START,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_ERROR,
  ACCOUNT_INFO_START,
  ACCOUNT_INFO_SUCCESS,
  ACCOUNT_INFO_ERROR,
} from "../actions";
import requests from "../requests";

interface UserContextProps extends State {
  addToWatchlist: (title: Movie) => void;
  removeFromWatchList: (title: Movie) => void;
  handleReviewSubmit: (reviewFormInputs: any) => void;
  removeFromReviewList: (id: string) => void;
  fetchTempRequestToken: () => void;
  createNewSessionId: () => void;
  handleUserLogout: () => void;
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
  is_logged_in: false,
  user_name: "",
  user_avatar: "",
  user_loading: false,
  user_error: false,
  user_watch_list: [],
  current_review: {},
  user_reviews_list: [],
  request_token_loading: false,
  request_token: "",
  request_token_error: false,
  session_id_loading: false,
  session_id: "",
  session_id_error: false,
  user_logout_loading: false,
  user_logout_error: false,
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
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

  const removeFromReviewList = (id: string) => {
    dispatch({ type: REVIEW_LIST_REMOVE, payload: id });
  };

  const fetchTempRequestToken = async () => {
    dispatch({ type: TOKEN_REQUEST_START });
    try {
      const response = await axios.get(requests.fetchRequestToken);
      dispatch({
        type: TOKEN_REQUEST_SUCCESS,
        payload: response!.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: TOKEN_REQUEST_ERROR });
    }
  };

  const createNewSessionId = async () => {
    dispatch({ type: SESSION_ID_START });
    try {
      const requestToken = localStorage.getItem("request_token");
      const response = await axios.post(
        `/authentication/session/new?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`,
        JSON.stringify({ request_token: requestToken }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({
        type: SESSION_ID_SUCCESS,
        payload: response!.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: SESSION_ID_ERROR });
    }
  };

  const verifyUser = () => {
    const sessionId = localStorage.getItem("session_id");
    if (sessionId) {
      dispatch({ type: VERIFY_USER, payload: sessionId });
    }
  };

  const handleUserLogout = async () => {
    dispatch({ type: USER_LOGOUT_START });
    try {
      const response = await axios.delete(
        `/authentication/session?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`,
        {
          data: JSON.stringify({ session_id: state.session_id }),
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.removeItem("request_token");
      localStorage.removeItem("session_id");
      dispatch({
        type: USER_LOGOUT_SUCCESS,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
      dispatch({ type: USER_LOGOUT_ERROR });
    }
  };

  const fetchAccountDetails = async () => {
    dispatch({ type: ACCOUNT_INFO_START });
    try {
      const response = await axios.get(
        `${requests.fetchAccountInfo}&session_id=${state.session_id}`
      );
      dispatch({
        type: ACCOUNT_INFO_SUCCESS,
        payload: response!.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: ACCOUNT_INFO_ERROR });
    }
  };

  useEffect(() => {
    if (Object.keys(state.current_review).length > 0) {
      dispatch({ type: USER_REVIEW_LIST_ADD, payload: state.current_review });
    }
  }, [state.current_review]);

  useEffect(() => {
    if (state.request_token) {
      localStorage.setItem("request_token", state.request_token);
      window.location.replace(
        `https://www.themoviedb.org/authenticate/${state.request_token.toString()}?redirect_to=${
          process.env.REACT_APP_MAIN_DOMAIN
        }`
      );
    }
  }, [state.request_token]);

  useEffect(() => {
    if (state.session_id) {
      dispatch({ type: LOGIN });
      localStorage.setItem("session_id", state.session_id);
      fetchAccountDetails();
    }
  }, [state.session_id]);

  useEffect(() => {
    if (localStorage.getItem("session_id")) {
      verifyUser();
    } else if (localStorage.getItem("request_token")) {
      createNewSessionId();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        addToWatchlist,
        removeFromWatchList,
        handleReviewSubmit,
        removeFromReviewList,
        fetchTempRequestToken,
        createNewSessionId,
        handleUserLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

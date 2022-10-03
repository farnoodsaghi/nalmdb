import React, { useEffect, useReducer } from "react";
import reducer, { State } from "../reducers/moviesReducer";
import { getSingleTitleEndpoint } from "../utils/helpers";
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
import axios from "../axios";
import requests from "../requests";

interface MoviesContextProps extends State {
  handleActiveTopBar: (id: number) => void;
  handleSearch: (value: string) => void;
  handleTitleId: (id: string) => void;
}

const MoviesContext = React.createContext<MoviesContextProps | null>(null);

interface MoviesProviderProps {
  children: React.ReactNode;
}

const initialState = {
  movies_loading: false,
  movies_list: [],
  movies_error: false,
  search_input: "",
  active_topbar: 1,
  title_id: "",
  latest_loading: false,
  latest_list: [],
  latest_error: false,
  trending_loading: false,
  trending_list: [],
  trending_error: false,
  top_rated_loading: false,
  top_rated_list: [],
  top_rated_error: false,
  action_loading: false,
  action_list: [],
  action_error: false,
  comedy_loading: false,
  comedy_list: [],
  comedy_error: false,
  crime_loading: false,
  crime_list: [],
  crime_error: false,
  drama_loading: false,
  drama_list: [],
  drama_error: false,
  scifi_loading: false,
  scifi_list: [],
  scifi_error: false,
  single_title_loading: false,
  single_title: {},
  single_title_error: false,
};

const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleActiveTopBar = (id: number): void => {
    dispatch({ type: SET_ACTIVE_TOPBAR, payload: id });
  };

  const handleSearch = (value: string): void => {
    dispatch({ type: SET_SEARCH_INPUT, payload: value });
  };

  const handleTitleId = (id: string): void => {
    dispatch({ type: SET_TITLE_ID, payload: id });
  };

  const fetchLatest = async (): Promise<void> => {
    dispatch({ type: GET_LATEST_START });
    try {
      let response = null;
      if (state.active_topbar === 1) {
        response = await axios.get(requests.fetchLatestMovies);
      } else if (state.active_topbar === 2) {
        response = await axios.get(requests.fetchLatestTV);
      }
      dispatch({
        type: GET_LATEST_SUCCESS,
        payload: response!.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_LATEST_ERROR });
    }
  };

  const fetchTrending = async (): Promise<void> => {
    dispatch({ type: GET_TRENDING_START });
    try {
      let response = null;
      if (state.active_topbar === 1) {
        response = await axios.get(requests.fetchTrendingMovies);
      } else if (state.active_topbar === 2) {
        response = await axios.get(requests.fetchTrendingTV);
      }
      dispatch({ type: GET_TRENDING_SUCCESS, payload: response!.data.results });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_TRENDING_ERROR });
    }
  };

  const fetchTopRated = async (): Promise<void> => {
    dispatch({ type: GET_TOP_RATED_START });
    try {
      let response = null;
      if (state.active_topbar === 1) {
        response = await axios.get(requests.fetchTopRatedMovies);
      } else if (state.active_topbar === 2) {
        response = await axios.get(requests.fetchTopRatedTV);
      }
      dispatch({
        type: GET_TOP_RATED_SUCCESS,
        payload: response!.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_TOP_RATED_ERROR });
    }
  };

  const fetchAction = async (): Promise<void> => {
    dispatch({ type: GET_ACTION_START });
    try {
      let response = null;
      if (state.active_topbar === 1) {
        response = await axios.get(requests.fetchActionMovies);
      } else if (state.active_topbar === 2) {
        response = await axios.get(requests.fetchActionTV);
      }
      dispatch({
        type: GET_ACTION_SUCCESS,
        payload: response!.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_ACTION_ERROR });
    }
  };

  const fetchComedy = async (): Promise<void> => {
    dispatch({ type: GET_COMEDY_START });
    try {
      let response = null;
      if (state.active_topbar === 1) {
        response = await axios.get(requests.fetchComedyMovies);
      } else if (state.active_topbar === 2) {
        response = await axios.get(requests.fetchComedyTV);
      }
      dispatch({
        type: GET_COMEDY_SUCCESS,
        payload: response!.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_COMEDY_ERROR });
    }
  };

  const fetchCrime = async (): Promise<void> => {
    dispatch({ type: GET_CRIME_START });
    try {
      let response = null;
      if (state.active_topbar === 1) {
        response = await axios.get(requests.fetchCrimeMovies);
      } else if (state.active_topbar === 2) {
        response = await axios.get(requests.fetchCrimeTV);
      }
      dispatch({
        type: GET_CRIME_SUCCESS,
        payload: response!.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_CRIME_ERROR });
    }
  };

  const fetchDrama = async (): Promise<void> => {
    dispatch({ type: GET_DRAMA_START });
    try {
      let response = null;
      if (state.active_topbar === 1) {
        response = await axios.get(requests.fetchDramaMovies);
      } else if (state.active_topbar === 2) {
        response = await axios.get(requests.fetchDramaTV);
      }
      dispatch({
        type: GET_DRAMA_SUCCESS,
        payload: response!.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_DRAMA_ERROR });
    }
  };

  const fetchSciFi = async (): Promise<void> => {
    dispatch({ type: GET_SCIFI_START });
    try {
      let response = null;
      if (state.active_topbar === 1) {
        response = await axios.get(requests.fetchScifiMovies);
      } else if (state.active_topbar === 2) {
        response = await axios.get(requests.fetchScifiTV);
      }
      dispatch({
        type: GET_SCIFI_SUCCESS,
        payload: response!.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_SCIFI_ERROR });
    }
  };

  const fetchSingleTitle = async (id: string) => {
    dispatch({ type: GET_SINGLE_TITLE_START });
    try {
      let response = null;
      const { fetchSingleMovie, fetchSingleTV } = getSingleTitleEndpoint(id);
      if (state.active_topbar === 1) {
        response = await axios.get(fetchSingleMovie);
      } else if (state.active_topbar === 2) {
        response = await axios.get(fetchSingleTV);
      }
      dispatch({
        type: GET_SINGLE_TITLE_SUCCESS,
        payload: response!.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_SINGLE_TITLE_ERROR });
    }
  };

  useEffect(() => {
    fetchLatest();
    fetchTrending();
    fetchTopRated();
    fetchAction();
    fetchComedy();
    fetchCrime();
    fetchDrama();
    fetchSciFi();
  }, [state.active_topbar]);

  useEffect(() => {
    if (state.title_id) {
      fetchSingleTitle(state.title_id);
    }
  }, [state.title_id]);

  return (
    <MoviesContext.Provider
      value={{ ...state, handleActiveTopBar, handleSearch, handleTitleId }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesProvider, MoviesContext };

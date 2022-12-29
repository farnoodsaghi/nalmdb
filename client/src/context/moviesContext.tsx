import React, { useEffect, useReducer } from "react";
import reducer, { State } from "../reducers/moviesReducer";
import {
  getSingleTitleEndpoint,
  getCastEndpoint,
  constructBrowseEndpoint,
} from "../utils/helpers";
import { SORT_VALUES, GENRE_VALUES } from "../utils/constants";
import {
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  SET_ACTIVE_TOPBAR,
  SET_ACTIVE_SIDEBAR,
  SET_SEARCH_INPUT,
  SET_TITLE_ID,
  SET_MEDIA_TYPE,
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
  GET_CAST_START,
  GET_CAST_SUCCESS,
  GET_CAST_ERROR,
  GET_SEARCH_RESULTS_START,
  GET_SEARCH_RESULTS_SUCCESS,
  GET_SEARCH_RESULTS_ERROR,
  SET_CURRENT_SORT,
  SET_CURRENT_GENRE,
  GET_BROWSE_START,
  GET_BROWSE_SUCCESS,
  GET_BROWSE_ERROR,
  SET_REVIEW_MODAL,
  SET_REVIEW_FORM,
  SET_REVIEW_STAR_RATING,
  LOAD_SINGLE_TITLE_REVIEWS,
  ADD_NEW_REVIEW,
  NEW_REVIEW_SUBMIT,
  TITLE_TRAILER_START,
  TITLE_TRAILER_SUCCESS,
  TITLE_TRAILER_ERROR,
  SET_TITLE_RATING,
  SET_RATING_BOX,
  LOAD_RATED_MOVIES_START,
  LOAD_RATED_MOVIES_SUCCESS,
  LOAD_RATED_MOVIES_ERROR,
  LOAD_RATED_TV_START,
  LOAD_RATED_TV_SUCCESS,
  LOAD_RATED_TV_ERROR,
} from "../actions";
import axios from "../axios";
import requests from "../requests";
import { UserContext } from "../context/userContext";

interface MoviesContextProps extends State {
  handleActiveTopBar: (id: number) => void;
  handleActiveSideBar: (id: number) => void;
  handleSearch: (value: string) => void;
  handleTitleId: (id: string) => void;
  handleMediaType: (type: null | string) => void;
  handleCurrentSort: (id: number) => void;
  handleCurrentGenre: (id: number) => void;
  handleReviewModal: (isOpen: boolean) => void;
  handleReviewForm: (target: any) => void;
  handleReviewStarRating: (rating: number) => void;
  getTitleTrailer: () => void;
  handleTitleRating: (rating: number) => void;
  handleRatingBox: (isOpen: boolean) => void;
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
  active_sidebar: 1,
  current_sort: 1,
  current_genre: 1,
  title_id: "",
  title_media_type: null,
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
  cast_loading: false,
  cast_list: [],
  cast_error: false,
  search_loading: false,
  search_list: [],
  search_error: false,
  browse_loading: false,
  browse_list: [],
  browse_error: false,
  review_model_open: false,
  review_form: { rating: 0, title: "", content: "" },
  review_list: [],
  current_title_reviews: {},
  current_rating: 0,
  rating_box_open: false,
  title_trailer_loading: false,
  title_trailer_error: false,
  title_trailer: {
    type: "",
    official: false,
    key: "",
    site: "",
  },
  rated_movies_loading: false,
  rated_movies_list: [],
  rated_movies_error: false,
  rated_tv_loading: false,
  rated_tv_list: [],
  rated_tv_error: false,
};

const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { current_review, session_id, user_id, is_logged_in } =
    React.useContext(UserContext)!;
  // const {user_name} = React.useContext()

  const handleActiveTopBar = (id: number): void => {
    dispatch({ type: SET_ACTIVE_TOPBAR, payload: id });
  };

  const handleActiveSideBar = (id: number) => {
    dispatch({ type: SET_ACTIVE_SIDEBAR, payload: id });
  };

  const handleSearch = (value: string): void => {
    dispatch({ type: SET_SEARCH_INPUT, payload: value });
  };

  const handleTitleId = (id: string): void => {
    dispatch({ type: SET_TITLE_ID, payload: id });
  };

  const handleCurrentSort = (id: number): void => {
    dispatch({ type: SET_CURRENT_SORT, payload: id });
  };

  const handleCurrentGenre = (id: number): void => {
    dispatch({ type: SET_CURRENT_GENRE, payload: id });
  };

  const handleReviewModal = (isOpen: boolean): void => {
    dispatch({ type: SET_REVIEW_MODAL, payload: isOpen });
  };

  const handleRatingBox = (isOpen: boolean): void => {
    dispatch({ type: SET_RATING_BOX, payload: isOpen });
  };

  const handleReviewForm = (target: any): void => {
    const { name, value } = target;
    dispatch({ type: SET_REVIEW_FORM, payload: { [name]: value } });
  };

  const handleReviewStarRating = (rating: number): void => {
    dispatch({ type: SET_REVIEW_STAR_RATING, payload: rating });
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
      if (
        state.title_media_type === "movie" ||
        (!state.title_media_type && state.active_topbar === 1)
      ) {
        response = await axios.get(fetchSingleMovie);
      } else if (
        state.title_media_type === "tv" ||
        (!state.title_media_type && state.active_topbar === 2)
      ) {
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

  const fetchSingleTitleCast = async (id: string) => {
    dispatch({ type: GET_CAST_START });
    try {
      let response = null;
      const { fetchMovieCast, fetchTVCast } = getCastEndpoint(id);
      if (
        state.title_media_type === "movie" ||
        (!state.title_media_type && state.active_topbar === 1)
      ) {
        response = await axios.get(fetchMovieCast);
      } else if (
        state.title_media_type === "tv" ||
        (!state.title_media_type && state.active_topbar === 2)
      ) {
        response = await axios.get(fetchTVCast);
      }
      dispatch({
        type: GET_CAST_SUCCESS,
        payload: response!.data.cast,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_CAST_ERROR });
    }
  };

  const fetchSearchResults = async (query: string) => {
    dispatch({ type: GET_SEARCH_RESULTS_START });
    try {
      const response = await axios.get(
        `${requests.fetchSearchResults}${query}`
      );
      dispatch({
        type: GET_SEARCH_RESULTS_SUCCESS,
        payload: response!.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_SEARCH_RESULTS_ERROR });
    }
  };

  const handleMediaType = (type: null | string) => {
    dispatch({ type: SET_MEDIA_TYPE, payload: type });
  };

  const fetchBrowseList = async () => {
    dispatch({ type: GET_BROWSE_START });
    try {
      const { movieId, tvId } = GENRE_VALUES.find(
        (val: any) => val.id === state.current_genre
      )!;
      const mediaType = state.active_topbar === 1 ? "movie" : "tv";
      const genreId = state.active_topbar === 1 ? movieId : tvId;
      const queryString = SORT_VALUES.find(
        (val: any) => val.id === state.current_sort
      )!.value;

      const response = await axios.get(
        constructBrowseEndpoint(mediaType, genreId, queryString)
      );
      dispatch({
        type: GET_BROWSE_SUCCESS,
        payload: response!.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_BROWSE_ERROR });
    }
  };

  const loadSingleTitleReviews = (media_id: string, media_type: string) => {
    dispatch({
      type: LOAD_SINGLE_TITLE_REVIEWS,
      payload: { media_id, media_type },
    });
  };

  const submitTitleRating = async () => {
    try {
      const endpoint = `/${state.title_media_type!}/${state.title_id!}/rating?session_id=${session_id}&api_key=${
        process.env.REACT_APP_MOVIE_API_KEY
      }`;
      const response = await axios.post(
        endpoint,
        JSON.stringify({ value: state.current_rating! * 2 }),
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitleRating = (rating: number) => {
    dispatch({ type: SET_TITLE_RATING, payload: rating });
  };

  const getTitleTrailer = async () => {
    dispatch({ type: TITLE_TRAILER_START });
    try {
      let endpoint = `/${state.title_media_type!}/${state.title_id!}/videos?api_key=${
        process.env.REACT_APP_MOVIE_API_KEY
      }&language=en-US`;
      const response = await axios.get(endpoint);
      dispatch({
        type: TITLE_TRAILER_SUCCESS,
        payload: response!.data.results,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: TITLE_TRAILER_ERROR });
    }
  };

  const fetchRatedTV = async () => {
    dispatch({ type: LOAD_RATED_TV_START });
    try {
      const response = await axios.get(
        `/account/${user_id}/rated/tv?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&session_id=${session_id}`
      );
      dispatch({
        type: LOAD_RATED_TV_SUCCESS,
        payload: response!.data.results,
      });
      console.log(response!.data.results);
    } catch (error) {
      dispatch({ type: LOAD_RATED_TV_ERROR });
    }
  };

  const fetchRatedMovies = async () => {
    dispatch({ type: LOAD_RATED_MOVIES_START });
    try {
      const response = await axios.get(
        `/account/${user_id}/rated/movies?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&session_id=${session_id}`
      );
      dispatch({
        type: LOAD_RATED_MOVIES_SUCCESS,
        payload: response!.data.results,
      });
      console.log(response!.data.results);
    } catch (error) {
      dispatch({ type: LOAD_RATED_MOVIES_ERROR });
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
      handleTitleRating(0);
      fetchSingleTitle(state.title_id);
      fetchSingleTitleCast(state.title_id);
      // loadSingleTitleReviews(state.title_id, state.title_media_type);
    }
  }, [state.title_id]);

  useEffect(() => {
    loadSingleTitleReviews(state.title_id, state.title_media_type);
  }, [state.title_id, state.review_list]);

  useEffect(() => {
    if (state.search_input) {
      fetchSearchResults(state.search_input);
    }
  }, [state.search_input]);

  useEffect(() => {
    fetchBrowseList();
  }, [state.active_topbar, state.current_sort, state.current_genre]);

  useEffect(() => {
    if (Object.keys(current_review).length > 0) {
      dispatch({ type: ADD_NEW_REVIEW, payload: current_review });
    }
  }, [current_review]);

  useEffect(() => {
    if (state.title_media_type && state.title_id) {
      submitTitleRating();
    }
  }, [state.current_rating]);

  useEffect(() => {
    if (is_logged_in && user_id && session_id) {
      fetchRatedTV();
      fetchRatedMovies();
    }
  }, [is_logged_in, state.current_rating, user_id, session_id]);

  return (
    <MoviesContext.Provider
      value={{
        ...state,
        handleActiveTopBar,
        handleActiveSideBar,
        handleSearch,
        handleTitleId,
        handleMediaType,
        handleCurrentSort,
        handleCurrentGenre,
        handleReviewModal,
        handleReviewForm,
        handleReviewStarRating,
        getTitleTrailer,
        handleTitleRating,
        handleRatingBox,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesProvider, MoviesContext };

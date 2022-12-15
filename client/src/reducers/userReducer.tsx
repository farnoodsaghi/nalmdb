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

export interface State {
  is_logged_in: boolean;
  user_name: string;
  user_avatar: string;
  user_loading: boolean;
  user_error: boolean;
  user_watch_list: Movie[];
  current_review: any;
  user_reviews_list: any[];
  request_token_loading: boolean;
  request_token: string;
  request_token_error: boolean;
  session_id_loading: boolean;
  session_id: string;
  session_id_error: boolean;
  user_logout_loading: boolean;
  user_logout_error: boolean;
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
  if (action.type === NEW_REVIEW_SUBMIT) {
    return { ...state, current_review: action.payload };
  }
  if (action.type === USER_REVIEW_LIST_ADD) {
    return {
      ...state,
      user_reviews_list: [...state.user_reviews_list, action.payload],
    };
  }
  if (action.type === REVIEW_LIST_REMOVE) {
    return {
      ...state,
      user_reviews_list: state.user_reviews_list.filter((review) => {
        return review.review_id !== action.payload;
      }),
    };
  }
  if (action.type === TOKEN_REQUEST_START) {
    return {
      ...state,
      request_token_loading: true,
      request_token_error: false,
    };
  }
  if (action.type === TOKEN_REQUEST_SUCCESS) {
    const { request_token } = action.payload;
    return {
      ...state,
      request_token_loading: false,
      request_token: request_token,
    };
  }
  if (action.type === TOKEN_REQUEST_ERROR) {
    return {
      ...state,
      request_token_loading: false,
      request_token_error: true,
    };
  }
  if (action.type === SESSION_ID_START) {
    return {
      ...state,
      session_id_loading: true,
      session_id_error: false,
    };
  }
  if (action.type === SESSION_ID_SUCCESS) {
    const { session_id } = action.payload;
    return {
      ...state,
      session_id_loading: false,
      session_id: session_id,
    };
  }
  if (action.type === SESSION_ID_ERROR) {
    return {
      ...state,
      session_id_loading: false,
      session_id_error: true,
    };
  }
  if (action.type === LOGIN) {
    return { ...state, is_logged_in: true };
  }
  if (action.type === VERIFY_USER) {
    return { ...state, session_id: action.payload };
  }
  if (action.type === USER_LOGOUT_START) {
    return {
      ...state,
      user_logout_loading: true,
      user_logout_error: false,
    };
  }
  if (action.type === USER_LOGOUT_SUCCESS) {
    return {
      ...state,
      user_logout_loading: false,
      session_id: "",
      request_token: "",
      is_logged_in: false,
    };
  }
  if (action.type === USER_LOGOUT_ERROR) {
    return {
      ...state,
      user_logout_loading: false,
      user_logout_error: true,
    };
  }
  if (action.type === ACCOUNT_INFO_START) {
    return {
      ...state,
      user_loading: true,
      user_error: false,
    };
  }
  if (action.type === ACCOUNT_INFO_SUCCESS) {
    const {
      avatar: {
        gravatar: { hash },
      },
      name,
      username,
    } = action.payload;
    return {
      ...state,
      user_loading: false,
      user_name: name || username,
      user_avatar: `https://www.gravatar.com/avatar/${hash}`,
    };
  }
  if (action.type === ACCOUNT_INFO_ERROR) {
    return {
      ...state,
      user_loading: false,
      user_error: true,
    };
  }
  throw Error("Invalid action type");
};

export default reducer;

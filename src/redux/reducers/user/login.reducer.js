import {
  CLEAR_ERROR_MESSAGE,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./user.types";

const initialStateLogin = {
  currentUser: undefined,
  loading: false,
  error: "",
};

const loginReducer = (state = initialStateLogin, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: "", currentUser: undefined };

    case CLEAR_ERROR_MESSAGE:
      return { ...state, loading: false, error: "", currentUser: undefined };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        currentUser: payload,
      };

    case USER_LOGOUT:
      return { ...state, error: "", currentUser: undefined };

    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
        currentUser: undefined,
      };

    default:
      return state;
  }
};
export default loginReducer;

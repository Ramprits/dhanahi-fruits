import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./user.types";

const initialStateLogin = {
  currentUser: undefined,
  loading: false,
  error: "",
};

export const loginReducer = (state = initialStateLogin, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: "", currentUser: undefined };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        currentUser: payload,
      };
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

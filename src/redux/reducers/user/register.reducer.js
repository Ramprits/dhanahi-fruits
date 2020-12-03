import {
  CLEAR_ERROR_MESSAGE,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./user.types";

const initialState = {
  user: undefined,
  loading: false,
  error: "",
};

const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: "", user: undefined };

    case CLEAR_ERROR_MESSAGE:
      return { ...state, loading: false, error: "", user: undefined };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        user: payload,
      };

    case REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
        user: undefined,
      };

    default:
      return state;
  }
};
export default registerReducer;

import axios from "axios";
import history from "../../../utils/history";

import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./user.types";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailed = (payload) => ({
  type: LOGIN_FAILED,
  payload,
});

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post("/auth/local", {
      identifier: userData.identifier,
      password: userData.password,
    });
    dispatch(loginSuccess(data));
    history.push("/");
  } catch (error) {
    dispatch(loginFailed(error));
  }
};

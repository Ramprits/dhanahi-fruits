import axios from "axios";
import history from "../../../utils/history";
import { strapiError } from "../../../utils/strapiError";

import {
  CLEAR_ERROR_MESSAGE,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  USER_LOGOUT,
} from "./user.types";

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

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerFailed = (payload) => ({
  type: REGISTER_FAILED,
  payload,
});

export const logout = () => ({
  type: USER_LOGOUT,
});
/**
 * register new user with first_name, last_name email and password
 * post method
 * @param {any} userData
 */
export const clearRegisterError = () => ({
  type: CLEAR_ERROR_MESSAGE,
});

export const clearLoginError = () => ({
  type: CLEAR_ERROR_MESSAGE,
});

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/auth/local/register`,
      {
        first_name: userData.first_name,
        last_name: userData.last_name,
        username: userData.first_name.toLowerCase(),
        email: userData.email,
        password: userData.password,
      }
    );
    dispatch(registerSuccess(data));
    history.push("/");
  } catch (error) {
    const errorMessage = strapiError(error);
    dispatch(registerFailed(errorMessage));
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/auth/local`,
      {
        identifier: userData.identifier.toLowerCase(),
        password: userData.password,
      }
    );
    dispatch(loginSuccess(data));
    history.push("/");
  } catch (error) {
    const errorMessage = strapiError(error);
    dispatch(loginFailed(errorMessage));
  }
};

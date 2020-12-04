import axios from "axios";
import {
  PRODUCT_ERROR,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./product.types";

export const productRequest = () => ({
  type: PRODUCT_REQUEST,
});

export const productSuccess = (payload) => ({
  type: PRODUCT_SUCCESS,
  payload,
});

export const productError = (payload) => ({
  type: PRODUCT_ERROR,
  payload,
});

/**
 * fetch products from strapi server
 */

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(productRequest());
    const { data } = await axios.get(`${process.env.REACT_APP_API}/products`);
    dispatch(productSuccess(data));
  } catch (error) {
    dispatch(productError(error.message));
  }
};

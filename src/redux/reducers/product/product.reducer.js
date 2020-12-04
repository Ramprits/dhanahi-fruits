import {
  PRODUCT_ERROR,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./product.types";

const initialState = {
  productList: [],
  isLoading: false,
  error: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };

    case PRODUCT_SUCCESS:
      return { ...state, isLoading: false, productList: payload };

    case PRODUCT_ERROR:
      return { ...state, isLoading: false, productList: [], error: payload };

    default:
      return state;
  }
};

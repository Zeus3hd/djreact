import axios from "axios";
import { GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT } from "./types";
import { tokenConfig } from "./auth";
// GET_PRODUCTS
export const getProducts = () => (dispatch, getState) => {
  axios
    .get("/api/products/", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

// DELETE_PRODUCT
export const deleteProduct = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/products/${id}/`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      })
    )
    .catch((err) => console.log(err));
};

//ADD_PRODUCT

export const addProduct = (product) => (dispatch, getState) => {
  axios.post("/api/products/", product, tokenConfig(getState)).then((res) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
  });
};

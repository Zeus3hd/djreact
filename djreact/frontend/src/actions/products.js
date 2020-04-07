import axios from "axios";
import { GET_PRODUCTS, DELETE_PRODUCT } from "./types";

// GET_PRODUCTS
export const getProducts = () => (dispatch) => {
  axios
    .get("/api/products/")
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

// DELETE_PRODUCT
export const deleteProduct = (id) => (dispatch) => {
  axios
    .delete(`/api/products/${id}/`)
    .then((res) =>
      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      })
    )
    .catch((err) => console.log(err));
};

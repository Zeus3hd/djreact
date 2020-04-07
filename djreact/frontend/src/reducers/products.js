import { GET_PRODUCTS } from "../actions/types.js";

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}

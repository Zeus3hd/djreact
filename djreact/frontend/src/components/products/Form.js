import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions/products";

export default function Form() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = state;
    const product = { name, email, message };
    console.log(product);
    dispatch(addProduct(product));
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          value={state.name}
          placeholder="name"
        />
        <input
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          value={state.email}
          placeholder="email"
        />
        <input
          type="message"
          name="message"
          onChange={(e) => handleChange(e)}
          value={state.message}
          placeholder="message"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

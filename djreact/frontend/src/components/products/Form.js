import React, { useState } from "react";

export default function Form() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(state);
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

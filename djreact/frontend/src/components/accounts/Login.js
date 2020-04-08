import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleOnSubmit = (e) => {
    e.prevebtDefault();
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          type="text"
          name="username"
          onChange={(e) => handleChange(e)}
          value={state.username}
          placeholder="username"
        />

        <input
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          value={state.password}
          placeholder="password"
        />

        <button type="submit">sign in</button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

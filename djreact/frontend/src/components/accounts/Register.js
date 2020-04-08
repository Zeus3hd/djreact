import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Register() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
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
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          value={state.email}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          value={state.password}
          placeholder="password"
        />
        <input
          type="password"
          name="rePassword"
          onChange={(e) => handleChange(e)}
          value={state.rePassword}
          placeholder="repassword"
        />
        <button type="submit">sign up</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

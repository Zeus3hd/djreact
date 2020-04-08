import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/auth";
export default function Login() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(state.username, state.password));
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
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

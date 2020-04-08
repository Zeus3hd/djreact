import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const authLinks = (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <button>Logout</button>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
    </ul>
  );
  return <div>{auth.isAuthenticated ? authLinks : guestLinks}</div>;
}

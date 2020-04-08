import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
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
    </div>
  );
}

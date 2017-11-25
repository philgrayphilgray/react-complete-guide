import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const navigation = props => {
  return (
    <nav className="Navigation">
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses/">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/users/">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default navigation;

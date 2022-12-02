import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <div className="links">
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active link" : "link")}
          exact="true">
          Books List
        </NavLink>
        <NavLink
          to="/add"
          className={(navData) => (navData.isActive ? "active link" : "link")}>
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

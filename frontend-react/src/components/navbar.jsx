import React from "react";
import { Link } from "react-router-dom";

const navbar = ({ totalCounters }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Navbar
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
          <ul className="nav-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>
            <Link to="/test">
              <li>Test</li>
            </Link>
          </ul>
        </span>
      </nav>
    </div>
  );
};

export default navbar;

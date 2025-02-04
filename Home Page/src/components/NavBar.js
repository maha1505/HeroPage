import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"; // Updated import ✅

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
    </nav>
  );
}

export default NavBar;

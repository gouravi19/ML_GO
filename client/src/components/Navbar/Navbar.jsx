import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/services" className="nav-item">Services</Link>
        <a href="#about" className="nav-item">About</a>
      </div>
      <div className="navbar-right">
          <>
            <Link to="/register3d" className="nav-item">Register</Link>
            <Link to="/login3d" className="nav-item">Login</Link>
          </>
      </div>
    </div>
  );
};

export default Navbar;

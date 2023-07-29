// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">TalentTech</Link>
        </li>
        <li>
          <Link to="/interview">Interview</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

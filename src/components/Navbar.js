import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.module.css';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Home</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <ul className="nav-links">
        <li><Link to="/goals">Goals</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {isLoggedIn ? (
          <li><button onClick={onLogout}>Sign Out</button></li>
        ) : (
          <>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
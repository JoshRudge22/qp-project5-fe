import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import navStyles from '../styles/NavBar.module.css';

function Navbar({ isLoggedIn, onLogout, setSearchQuery }) {
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push('/search-results');
  };

  return (
    <nav className={navStyles.navbar}>
      <ul className={navStyles['nav-links']}>
        {!isLoggedIn ? (
          // Links visible when the user is not logged in
          <>
            <li>
              <NavLink
                exact
                to="/"
                activeClassName={navStyles.active}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signin"
                activeClassName={navStyles.active}
              >
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                activeClassName={navStyles.active}
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName={navStyles.active}
              >
                Contact Us
              </NavLink>
            </li>
          </>
        ) : (
          // Links visible when the user is logged in
          <>
            <li>
              <NavLink
                to="/profile"
                activeClassName={navStyles.active}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/goals"
                activeClassName={navStyles.active}
              >
                Goals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/journey"
                activeClassName={navStyles.active}
              >
                Journey
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                activeClassName={navStyles.active}
              >
                Settings
              </NavLink>
            </li>
            <li>
              <button onClick={onLogout}>Sign Out</button>
            </li>
          </>
        )}
      </ul>

      {/* Search Bar */}
      {isLoggedIn && (
        <form className={navStyles['search-bar']} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      )}
    </nav>
  );
}

export default Navbar;
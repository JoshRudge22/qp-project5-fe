import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Navbar({ isLoggedIn, onLogout, setSearchQuery }) {
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push('/search-results');
  };

  return (
    <nav>
      {!isLoggedIn ? (
        // Links visible when the user is not logged in
        <>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/contact">Contact Us</Link>
        </>
      ) : (
        // Links visible when the user is logged in
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/goals">Goals</Link>
          <Link to="/journey">Journey</Link>
          <Link to="/settings">Settings</Link>
          <button onClick={onLogout}>Sign Out</button>
        </>
      )}

      {/* Search Bar */}
      {isLoggedIn && (
        <form onSubmit={handleSearch}>
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
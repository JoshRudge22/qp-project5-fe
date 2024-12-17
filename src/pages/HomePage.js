import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Welcome to the App</h1>
    <p>Please <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>.</p>
  </div>
);

export default HomePage;
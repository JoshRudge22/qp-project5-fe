import React from 'react';
import { Link } from 'react-router-dom';
import homeStyles from '../styles/Home.module.css';

function HomePage() {
  return (
    <div className={homeStyles.container}>
      {/* Log In Section */}
      <div className={homeStyles.section}>
        <img
          /*src=*/
          alt="Log In"
        />
        <h2>Log In</h2>
        <Link to="/signin">Go to Log In</Link>
      </div>

      {/* Sign Up Section */}
      <div className={homeStyles.section}>
        <img
        /*src=*/
          alt="Sign Up"
        />
        <h2>Sign Up</h2>
        <Link to="/signup">Go to Sign Up</Link>
      </div>
    </div>
  );
}

export default HomePage;
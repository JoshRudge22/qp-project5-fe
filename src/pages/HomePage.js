import React, { useState } from 'react';

function HomePage({ onLogIn, onSignUp }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div>
      <h1>Welcome to the App</h1>
      <h2>Log In</h2>
      <form onSubmit={(e) => { e.preventDefault(); onLogIn(credentials); }}>
        <input name="username" placeholder="Username" onChange={handleInputChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleInputChange} />
        <button type="submit">Log In</button>
      </form>
      <h2>Sign Up</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSignUp(credentials); }}>
        <input name="username" placeholder="Username" onChange={handleInputChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleInputChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default HomePage;
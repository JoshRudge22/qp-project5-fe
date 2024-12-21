import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { logIn } from "../services/authService";

function LogInPage({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await logIn(credentials);
      alert("Log-in successful!");
      onLogin(userData); // Update parent state to indicate logged-in status
      history.push("/profile");
    } catch (err) {
      setError(err.error || "Invalid credentials.");
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LogInPage;
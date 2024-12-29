import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signUp } from "../../components/Authorize";
import signupStyles from "../../styles/SignUp.module.css"

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(formData);
      alert("Sign-up successful!");
      history.push("/signin");
    } catch (err) {
      setError(err.error || "An error occurred.");
    }
  };

  return (
    <div className={signupStyles.container}> 
      <img 
        /*src=*/
        alt="Sign Up" 
        className={signupStyles.image} 
      />
      <h2 className={signupStyles.title}>Sign Up</h2>
      {error && <p className={signupStyles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={signupStyles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className={signupStyles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={signupStyles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className={signupStyles.input}
        />
        <button type="submit" className={signupStyles.button}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
import React, { useState } from 'react';
import axios from 'axios';
import contactusStyles from "../styles/ContactUs.module.css"; 

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    preferredContactTime: '', 
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/contact/', formData); 
      setSuccessMessage(response.data.message || 'Your message has been sent!');
    } catch (error) {
      setErrorMessage(error.response.data.message || 'An error occurred.');
    }
  };

  return (
    <div className={contactusStyles.container}> 
      <div className={contactusStyles.formContainer}> 
        <h1>Contact Us</h1>
        {successMessage && <p className={contactusStyles.successMessage}>{successMessage}</p>}
        {errorMessage && <p className={contactusStyles.errorMessage}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Your Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className={contactusStyles.input} 
            />
          </label>
          <br />
          <label>
            Your Email:
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className={contactusStyles.input} 
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              className={contactusStyles.input} 
            />
          </label>
          <br />
          <label>
            Preferred Contact Time:
            <select 
              name="preferredContactTime" 
              value={formData.preferredContactTime} 
              onChange={handleChange} 
              className={contactusStyles.input} 
            >
              <option value="">Select</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </label>
          <br />
          <label>
            Message:
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              className={contactusStyles.input} 
            />
          </label>
          <br />
          <button type="submit" className={contactusStyles.button}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsPage;
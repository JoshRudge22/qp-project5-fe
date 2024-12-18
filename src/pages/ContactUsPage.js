import React from 'react';

function ContactUsPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label>
          Your Email:
          <input type="email" required />
        </label>
        <br />
        <label>
          Message:
          <textarea required></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactUsPage;
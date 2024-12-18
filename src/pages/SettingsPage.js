import React from 'react';
import { Link } from 'react-router-dom';

function SettingsPage() {
  return (
    <div>
      <h1>Settings</h1>
      <ul>
        <li>
          <Link to="/settings/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default SettingsPage;
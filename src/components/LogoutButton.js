import React from "react";
import { logOut } from "../components/Authorize";

function LogoutButton({ onLogout }) {
  const handleLogout = async () => {
    try {
      await logOut();
      alert("Logged out successfully!");
      onLogout();
    } catch (err) {
      alert("Error logging out.");
    }
  };

  return <button onClick={handleLogout}>Log Out</button>;
}

export default LogoutButton;
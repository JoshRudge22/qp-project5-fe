import React, { useState } from 'react';

const ProfilePage = () => {
  const [profile, setProfile] = useState({ name: '', height: '', weight: '', image: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfile({ ...profile, image: e.target.files[0] });
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <form>
        <label>Profile Picture:</label>
        <input type="file" onChange={handleImageChange} /><br />
        <label>Name:</label>
        <input type="text" name="name" value={profile.name} onChange={handleChange} /><br />
        <label>Height:</label>
        <input type="number" name="height" value={profile.height} onChange={handleChange} /><br />
        <label>Weight:</label>
        <input type="number" name="weight" value={profile.weight} onChange={handleChange} /><br />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
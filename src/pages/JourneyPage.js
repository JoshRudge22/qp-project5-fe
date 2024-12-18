import React, { useState } from 'react';

function JourneyPage() {
  const [journeyUpdates, setJourneyUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState('');

  const handleAddUpdate = () => {
    setJourneyUpdates([...journeyUpdates, newUpdate]);
    setNewUpdate('');
  };

  return (
    <div>
      <h1>Your Journey</h1>
      <textarea
        value={newUpdate}
        onChange={(e) => setNewUpdate(e.target.value)}
        placeholder="Share your journey..."
      ></textarea>
      <button onClick={handleAddUpdate}>Post</button>
      <ul>
        {journeyUpdates.map((update, index) => (
          <li key={index}>{update}</li>
        ))}
      </ul>
    </div>
  );
}

export default JourneyPage;
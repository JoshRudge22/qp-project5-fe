import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JourneyPage() {
  const [journeyUpdates, setJourneyUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchJourneyUpdates = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get('/api/journeys/');
        setJourneyUpdates(response.data);
      } catch (error) {
        console.error('Error fetching journey updates:', error);
        setError('Failed to load journey updates. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchJourneyUpdates();
  }, []);

  const handleAddUpdate = async () => {
    if (!newUpdate.trim()) {
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('content', newUpdate);
    if (selectedImage) {
      formData.append('image', selectedImage);
    }

    try {
      const response = await axios.post('/api/journeys/', formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });

      setJourneyUpdates([...journeyUpdates, response.data]);
      setTitle('');
      setDescription('');
      setNewUpdate('');
      setSelectedImage(null);
    } catch (error) {
      console.error('Error adding journey update:', error);
      setError('Failed to add update. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = async (journeyId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`/api/journeys/${journeyId}/like/`, null, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const updatedJourney = journeyUpdates.find((journey) => journey.id === journeyId);
      updatedJourney.like_count = response.data.like_count;
      setJourneyUpdates([...journeyUpdates]);
    } catch (error) {
      console.error('Error liking journey:', error);
      setError('Failed to like journey. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  return (
    <div className="container">
      <h1>Your Journey</h1>
      {isLoading && <p className="loading">Loading journey updates...</p>}
      {error && <p className="error">{error}</p>}

      <div className="new-update">
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />

        <label htmlFor="description">Description:</label>
        <textarea 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />

        <label htmlFor="content">Update:</label>
        <textarea 
          id="content" 
          value={newUpdate} 
          onChange={(e) => setNewUpdate(e.target.value)} 
          placeholder="Share your journey..." 
          disabled={isLoading} 
        />

        <div className="upload-photo">
          <label htmlFor="image-upload">Upload Photo</label>
          <input 
            type="file" 
            id="image-upload" 
            onChange={handleImageChange} 
          />
        </div>

        <button onClick={handleAddUpdate} disabled={isLoading}>
          Post {isLoading && <span className="loading-icon">...</span>}
        </button>
      </div>

      <ul className="journey-list">
        {journeyUpdates.map((update, index) => (
          <li key={index} className="journey-item">
            <div className="journey-item-header">
              <span className="username">{update.user.username}</span> 
              <span className="date">{new Date(update.created_at).toLocaleDateString()}</span> 
            </div>
            <p>{update.content}</p>
            {update.image && <img src={update.image} alt="Journey Update" />} 
            <div className="update-actions">
              <button onClick={() => handleLike(update.id)} disabled={isLoading}>
                Like {update.like_count} {isLoading && <span className="loading-icon">...</span>}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JourneyPage;

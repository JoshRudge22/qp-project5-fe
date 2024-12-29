import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './api/axiosDefault';
import Navbar from './components/Navbar';
import { signUp, logIn, logOut } from './components/Authorize';
import HomePage from './pages/HomePage';
import LogInPage from './pages/auth/LogInPage';
import SignUpPage from './pages/auth/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import GoalsPage from './pages/GoalsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import SettingsPage from './pages/SettingsPage';
import ContactUsPage from './pages/ContactUsPage';
import JourneyPage from './pages/JourneyPage';
import NoteDetailPage from './pages/NoteDetailPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (userData) => {
    try {
      await signUp(userData);
      setError('');
      alert('Sign-up successful! You can now log in.');
    } catch (err) {
      setError(err.error || 'An error occurred during sign-up.');
    }
  };

  const handleLogIn = async (credentials) => {
    try {
      await logIn(credentials);
      setIsLoggedIn(true);
      setError('');
      alert('Logged in successfully!');
    } catch (err) {
      setError(err.error || 'Invalid credentials.');
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      setIsLoggedIn(false);
      alert('Logged out successfully!');
    } catch (err) {
      setError(err.error || 'An error occurred while logging out.');
    }
  };

  return (
    <Router>
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogOut} 
        setSearchQuery={setSearchQuery} 
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Switch>
        <Route 
          exact 
          path="/" 
          render={() => <HomePage onLogIn={handleLogIn} onSignUp={handleSignUp} />} 
        />
        <Route 
          path="/login" 
          render={() => <LogInPage onLogin={handleLogIn} />} 
        />
        <Route 
          path="/signup" 
          render={() => <SignUpPage onSignUp={handleSignUp} />} 
        />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/goals" component={GoalsPage} />
        <Route 
          path="/search-results" 
          render={() => <SearchResultsPage query={searchQuery} />} 
        />
        <Route exact path="/settings" component={SettingsPage} />
        <Route path="/settings/contact-us" component={ContactUsPage} />
        <Route path="/journey" component={JourneyPage} />
        <Route path="/note/:id" component={NoteDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
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

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout} 
        setSearchQuery={setSearchQuery} 
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
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
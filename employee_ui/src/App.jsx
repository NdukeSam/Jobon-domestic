import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from "./components/Landing";
import Login from './components/Login';
import PreferenceSearch from './components/PreferenceSearch';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/preferencesearch' element={<PreferenceSearch />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

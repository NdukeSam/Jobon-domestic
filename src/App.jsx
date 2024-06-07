import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Landing from "./components/Landing.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Router>
          <Routes>
            <Route 
              path='/'
                element={<Landing />}
            />
          </Routes>
      </Router>
    </>
  )
}

export default App
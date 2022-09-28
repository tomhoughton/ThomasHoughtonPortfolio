// Imports:
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// Components:
import Home from './components/Home';
// TODO: 
// Setup React Router.
// Setup the carousel.
// Setup TailWind.

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes> 
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';

function App() {
  return (
    <Router>
      <div>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;

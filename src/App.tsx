import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './Pages/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Index/></>}/>
      </Routes>
    </Router>
  );
}

export default App;

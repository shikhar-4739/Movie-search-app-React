import React from 'react'
import Home from './components/Home';
import Error from './components/Error';
import SingleMovie from './components/SingleMovie';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='movie/:id' element={<SingleMovie />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </>
  );
};

export default App;


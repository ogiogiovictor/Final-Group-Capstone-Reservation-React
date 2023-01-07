import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from './components/frontpage/mainpage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Slider />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

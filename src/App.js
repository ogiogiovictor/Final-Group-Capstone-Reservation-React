import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from './components/frontpage/mainpage';
import CarModels from './components/models/carmodels';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/home" element={<CarModels />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

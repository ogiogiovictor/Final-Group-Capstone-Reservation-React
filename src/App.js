import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from './components/frontpage/mainpage';
import CarModels from './components/models/carmodels';
import TestRide from './components/models/testride';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/home" element={<CarModels />} />
          <Route path="/test_ride" element={<TestRide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

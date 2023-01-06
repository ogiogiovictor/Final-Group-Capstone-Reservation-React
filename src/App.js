import './App.css';
import axios from 'axios';
import Motorcycles from './components/motorcycles';
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/v1/motorcycles";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {

  const [motorcycles, setMotorcycles] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setMotorcycles(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Hello - API connection testing</h1>
      <Motorcycles motorcycles={motorcycles} />
    </div>
  );
}

export default App;

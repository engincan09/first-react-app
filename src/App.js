import axios from 'axios'
import { useEffect, useState } from 'react';
import City from './City';
function App() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  const key = "6kN4mbZdpjlWquT6OQk1UK:1zWLzx2QpKX6frmqBPiRil";
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'authorization': `apikey ${key}`
    }
  }
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${search}`, config);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search])
  return (
    <div className="App">
      <div className ="mb-3 mt-3 pt-0">
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="ŞEHİR" className ="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
      </div>
      <City data={city}/>
    </div>
  );
}

export default App;

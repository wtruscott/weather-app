import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import WeatherDisplay from "./components/WeatherDisplay";
function App() {
  const apiKey = "d779ca4fcd1a037c78f9ae45a052f427";
  const [weather, setWeather] = useState(null);
  const getWeather = async (searchTerm) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${searchTerm},us&units=imperial&appid=${apiKey}`
    );
    const data = await response.json();
    setWeather(data);
  };


  return (
    <div className="App">
      <Form weathersearch={getWeather} />
      <WeatherDisplay weather={weather}/>
    </div>
  );
}
export default App;

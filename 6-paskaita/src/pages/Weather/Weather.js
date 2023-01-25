import React, { useState } from "react";
import TopBar from "../../components/TopBar";
import { useEffect } from "react";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

const weatherAPI =
  "https://api.open-meteo.com/v1/forecast?latitude=54.69&longitude=25.28&timezone=Europe/Vilnius&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max";

const Weather = () => {
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    fetch(weatherAPI)
      .then((resp) => resp.json())
      .then((response) => {
        setWeather(response);
      })
      .catch((error) => console.error(error));
  }, []);

  // console.log(weather);

  return (
    <div>
      <TopBar />
      <div className="weather-container">
        <h2>Weather forecast</h2>
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
};

export default Weather;

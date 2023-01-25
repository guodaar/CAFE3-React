import React from "react";
import "./weatherCard.scss";
import { FaSnowflake, FaSun } from "react-icons/fa";

const powderBlue = "rgba(176, 224, 230, 0.7)";
const lightYellow = "rgba(255, 252, 163, 0.7)";

const WeatherCard = ({ weather }) => {
  const getWeatherIcon = (weathercode) => {
    switch (weathercode) {
      case 71:
        return {
          icon: <FaSnowflake color="white" size="5rem" />,
          backgroundColor: powderBlue,
        };
      default:
        return {
          icon: <FaSun color="rgb(217, 210, 0)" size="5rem" />,
          backgroundColor: lightYellow,
        };
    }
  };

  const { icon, backgroundColor } = getWeatherIcon(
    weather.daily.weathercode[0]
  );

  console.log(weather);
  return (
    <div className="weather-card" style={{ backgroundColor }}>
      <div className="left">
        <p className="weather-city">{weather.timezone}</p>
        <p className="weather-date">{new Date().toDateString()}</p>
        <p className="weather-temp">
          {weather.daily.temperature_2m_min[0]}{" "}
          {weather.daily_units.temperature_2m_min} -{" "}
          {weather.daily.temperature_2m_max[0]}{" "}
          {weather.daily_units.temperature_2m_max}
        </p>
        <p className="weather-wind">
          {weather.daily.windspeed_10m_max[0]}{" "}
          {weather.daily_units.windspeed_10m_max}
        </p>
      </div>
      <div className="right">
        <p>{icon}</p>
      </div>
    </div>
  );
};

export default WeatherCard;

import React from 'react';
import WeatherCard from './WeatherCard';

const Forecast = ({ data, unit }) => {
  if (!data || data.length === 0) return null;

  const tempUnit = unit === 'metric' ? '°C' : '°F';

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {data.map((day, index) => (
        <div
          key={index}
          className="weather-container p-6 text-center hover:shadow-xl transition-all duration-300"
        >
          <p className="text-gray-600 font-semibold mb-3">{formatDate(day.dt_txt)}</p>
          <img
            src={getWeatherIcon(day.weather[0].icon)}
            alt={day.weather[0].description}
            className="w-16 h-16 mx-auto mb-3"
          />
          <p className="text-gray-700 capitalize text-sm mb-3">{day.weather[0].main}</p>
          <div className="flex justify-center items-center gap-3 mb-3">
            <span className="text-2xl font-bold text-blue-600">
              {Math.round(day.main.temp_max)}{tempUnit}
            </span>
            <span className="text-lg text-gray-500">
              {Math.round(day.main.temp_min)}{tempUnit}
            </span>
          </div>
          <div className="text-xs text-gray-500 space-y-1">
            <p>Humidity: {day.main.humidity}%</p>
            <p>Wind: {day.wind.speed} m/s</p>
            <p>Rain: {(day.pop * 100).toFixed(0)}%</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forecast;

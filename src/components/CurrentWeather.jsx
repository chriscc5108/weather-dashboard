import React from 'react';
import { Cloud, Droplets, Wind, Eye, Gauge, Sunrise, Sunset } from 'lucide-react';
import WeatherCard from './WeatherCard';

const CurrentWeather = ({ data, unit }) => {
  if (!data) return null;

  const tempUnit = unit === 'metric' ? '°C' : '°F';
  const speedUnit = unit === 'metric' ? 'm/s' : 'mph';

  const getWeatherIcon = (iconCode) => {
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    return iconUrl;
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="weather-container p-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Main Weather Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{data.name}, {data.sys.country}</h2>
            <p className="text-lg text-gray-600 capitalize">{data.weather[0].description}</p>
          </div>
          <div className="flex items-start">
            <span className="text-7xl font-bold text-blue-600 mr-4">
              {Math.round(data.main.temp)}
            </span>
            <div>
              <p className="text-3xl text-gray-600">{tempUnit}</p>
              <p className="text-sm text-gray-500 mt-2">
                Feels like {Math.round(data.main.feels_like)}{tempUnit}
              </p>
            </div>
          </div>
        </div>

        {/* Weather Icon */}
        <div className="flex justify-center items-center">
          <img
            src={getWeatherIcon(data.weather[0].icon)}
            alt={data.weather[0].description}
            className="w-48 h-48 object-contain"
          />
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-200">
        <WeatherCard
          icon={<Droplets className="w-6 h-6" />}
          label="Humidity"
          value={`${data.main.humidity}%`}
        />
        <WeatherCard
          icon={<Wind className="w-6 h-6" />}
          label="Wind Speed"
          value={`${data.wind.speed} ${speedUnit}`}
        />
        <WeatherCard
          icon={<Eye className="w-6 h-6" />}
          label="Visibility"
          value={`${(data.visibility / 1000).toFixed(1)} km`}
        />
        <WeatherCard
          icon={<Gauge className="w-6 h-6" />}
          label="Pressure"
          value={`${data.main.pressure} mb`}
        />
      </div>

      {/* Sunrise & Sunset */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <WeatherCard
          icon={<Sunrise className="w-6 h-6" />}
          label="Sunrise"
          value={formatTime(data.sys.sunrise)}
        />
        <WeatherCard
          icon={<Sunset className="w-6 h-6" />}
          label="Sunset"
          value={formatTime(data.sys.sunset)}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;

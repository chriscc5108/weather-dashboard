import React, { useState, useEffect } from 'react';
import { Cloud, Droplets, Wind, Eye, Gauge } from 'lucide-react';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import useWeather from './hooks/useWeather';
import './App.css';

function App() {
  const [city, setCity] = useState('London');
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const { currentWeather, forecast, loading, error, fetchWeather } = useWeather(unit);

  useEffect(() => {
    fetchWeather(city);
  }, [city, unit]);

  useEffect(() => {
    // Request geolocation on mount
    if (navigator.geolocation && process.env.REACT_APP_ENABLE_GEOLOCATION === 'true') {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(null, latitude, longitude);
        },
        (err) => {
          console.log('Geolocation not available, using default city');
        }
      );
    }
  }, []);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Weather Dashboard</h1>
          <p className="text-blue-100 text-lg">Real-time weather information at your fingertips</p>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-8">
          <SearchBar onSearch={handleSearch} />
          <button
            onClick={toggleUnit}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            °{unit === 'metric' ? 'C' : 'F'} | Switch to °{unit === 'metric' ? 'F' : 'C'}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg mb-8 error-message">
            <p className="font-semibold">Error: {error}</p>
            <p className="text-sm mt-1">Please check the city name and try again.</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="loading-spinner"></div>
            <p className="text-white ml-4 text-lg">Loading weather data...</p>
          </div>
        )}

        {/* Current Weather Section */}
        {currentWeather && !loading && (
          <div className="mb-8">
            <CurrentWeather data={currentWeather} unit={unit} />
          </div>
        )}

        {/* Forecast Section */}
        {forecast && forecast.length > 0 && !loading && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">5-Day Forecast</h2>
            <Forecast data={forecast} unit={unit} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

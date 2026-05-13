import { useState, useCallback } from 'react';
import axios from 'axios';

const useWeather = (unit = 'metric') => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const baseUrl = process.env.REACT_APP_WEATHER_API_URL || 'https://api.openweathermap.org/data/2.5';

  const fetchWeather = useCallback(
    async (city = null, lat = null, lon = null) => {
      if (!apiKey) {
        setError('API key not configured. Please set REACT_APP_WEATHER_API_KEY in .env file');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        let currentUrl = '';
        let forecastUrl = '';

        if (city) {
          // Search by city name
          currentUrl = `${baseUrl}/weather?q=${city}&units=${unit}&appid=${apiKey}`;
          forecastUrl = `${baseUrl}/forecast?q=${city}&units=${unit}&appid=${apiKey}`;
        } else if (lat && lon) {
          // Search by coordinates
          currentUrl = `${baseUrl}/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
          forecastUrl = `${baseUrl}/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
        } else {
          setError('Please provide a city name or coordinates');
          setLoading(false);
          return;
        }

        // Fetch current weather and forecast simultaneously
        const [currentRes, forecastRes] = await Promise.all([
          axios.get(currentUrl),
          axios.get(forecastUrl),
        ]);

        setCurrentWeather(currentRes.data);

        // Process forecast data - get one entry per day (first occurrence at noon)
        const forecastList = forecastRes.data.list;
        const dailyForecasts = [];
        const seenDates = new Set();

        forecastList.forEach((item) => {
          const date = new Date(item.dt_txt).toLocaleDateString();
          if (!seenDates.has(date) && dailyForecasts.length < 5) {
            seenDates.add(date);
            dailyForecasts.push(item);
          }
        });

        setForecast(dailyForecasts);
        setError(null);
      } catch (err) {
        if (err.response?.status === 404) {
          setError('City not found. Please check the spelling and try again.');
        } else if (err.response?.status === 401) {
          setError('Invalid API key. Please check your configuration.');
        } else if (err.message === 'Network Error') {
          setError('Network error. Please check your connection.');
        } else {
          setError(err.message || 'An error occurred while fetching weather data');
        }
        setCurrentWeather(null);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    },
    [apiKey, baseUrl, unit]
  );

  return { currentWeather, forecast, loading, error, fetchWeather };
};

export default useWeather;

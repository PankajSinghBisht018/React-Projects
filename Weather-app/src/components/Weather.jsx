import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../features/weatherSlice';

const Weather = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const handleFetchWeather = () => {
    if (city !== '') {
      dispatch(fetchWeather(city));
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-3xl font-bold">Weather App</h1>
      <div className="bg-white shadow-md rounded-md p-4 w-full max-w-md">
        <input
          className="border p-2 rounded w-full mb-4"
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded w-full"
          onClick={handleFetchWeather}
        >
          Get Weather
        </button>
        {weather.status === 'loading' && <p>Loading...</p>}
        {weather.status === 'failed' && <p className="text-red-500">{weather.error}</p>}
        {weather.status === 'succeeded' && weather.data && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">{weather.data.name}</h2>
            <p>Temperature: {Math.round(weather.data.main.temp - 273.15)}°C</p>
            <p>Description: {weather.data.weather[0].description}</p>
            <p>Clouds: {weather.data.clouds.all}%</p>
            <p>Humidity: {weather.data.main.humidity}%</p>
            <p>Visibility: {weather.data.visibility / 1000} km</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;

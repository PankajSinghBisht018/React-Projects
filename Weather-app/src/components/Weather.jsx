import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../features/weatherSlice';
import axios from 'axios';
import { TextField, Button, Typography, Paper, Grid } from '@mui/material';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import OpacityIcon from '@mui/icons-material/Opacity';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Weather = () => {
  const [city, setCity] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const handleFetchWeather = () => {
    if (city !== '') {
      dispatch(fetchWeather(city));
    }
  };
  
  const fetchRandomImage = async () => {
    const response = await axios.get(
      'https://api.unsplash.com/photos/random',
      {
        params: {
          query: 'weather',
          client_id: 'Rxp2BCKd-vTWqqUGG5oKD4_20iHiiTS1qTbKcW85bGg',
        },
      }
    );
    setImageUrl(response.data.urls.regular);
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h3" color='Black' align="center" gutterBottom >
        Weather App
      </Typography>
      <Paper elevation={3} className="p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              label="Enter City"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleFetchWeather}
            >
              Get Weather
            </Button>
          </Grid>
        </Grid>
        {weather.status === 'loading' && <p>Loading...</p>}
        {weather.status === 'failed' && (
          <p className="text-red-500">{weather.error}</p>
        )}
        {weather.status === 'succeeded' && weather.data && (
          <div className="mt-4">
            <Typography variant="h5" gutterBottom>
              {weather.data.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Temperature: {Math.round(weather.data.main.temp - 273.15)}°C
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Description: {weather.data.weather[0].description}
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <CloudQueueIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  Clouds: {weather.data.clouds.all}%
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <OpacityIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  Humidity: {weather.data.main.humidity}%
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <VisibilityIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  Visibility: {weather.data.visibility / 1000} km
                </Typography>
              </Grid>
            </Grid>
          </div>
        )}
      </Paper>
    </div>
  );
};

export default Weather;

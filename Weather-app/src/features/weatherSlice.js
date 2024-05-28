import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWeather = (city) => async (dispatch) => {
  dispatch(fetchWeatherStart());
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb72d7b2c0efdb3687e9f8274f23e822`);
    
    dispatch(fetchWeatherSuccess(response.data));
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    fetchWeatherStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    fetchWeatherSuccess(state, action) {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    fetchWeatherFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } = weatherSlice.actions;

export default weatherSlice.reducer;

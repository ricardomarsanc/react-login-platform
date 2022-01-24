import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import WeatherService, { CityDataObj } from "../../services/WeatherService";

export interface WeatherData {
  weatherInfo: any | undefined;
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

export const getWeatherData = createAsyncThunk(
  "getWeatherData",
  async (dataObj: CityDataObj) => {
    const response = await WeatherService.getWeather(dataObj);
    return response.data;
  }
);

const initialState = {
  weatherInfo: undefined,
  loading: false,
  error: false,
  errorMessage: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    resetWeatherData(state) {
      state.weatherInfo = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherData.pending, (state: WeatherData) => {
      state.weatherInfo = undefined;
      state.loading = true;
    });
    builder.addCase(getWeatherData.fulfilled, (state: WeatherData, payload) => {
      state.weatherInfo = payload.payload;
      state.loading = false;
    });
    builder.addCase(getWeatherData.rejected, (state: WeatherData, payload) => {
      let errorInfo;

      if (payload.error.message)
        errorInfo = JSON.parse(payload.error.message).responseBackEnd;

      state.weatherInfo = {};
      state.errorMessage = errorInfo;
      state.loading = false;
      state.error = true;
    });
  },
});

export const { resetWeatherData } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;

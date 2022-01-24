import apiClient from "../utils/apiClient";

export interface CityDataObj {
  city: string;
  countryCode: string;
}

const api_key = process.env.REACT_APP_WEATHER_API_KEY || "";
const api_url = process.env.REACT_APP_WEATHER_API_URL || "";

export const getForecastUrl = (dataObj: CityDataObj) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${dataObj.city},${dataObj.countryCode}&appid=${api_key}`;

class WeatherService {
  getWeather = (dataObj: CityDataObj) =>
    apiClient(api_url).get(
      `weather?q=${dataObj.city},${dataObj.countryCode}&appid=${api_key}`
    );
}

export default new WeatherService();

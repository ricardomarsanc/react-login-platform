import { combineReducers } from "redux";
import { CountryData, countryReducer as country } from "./reducers/countries";
import { userReducer as user, UserState } from "./reducers/user";
import { weatherReducer as weather, WeatherData } from "./reducers/weather";

export interface RootState {
  user: UserState;
  weather: WeatherData;
  country: CountryData;
}

export const rootReducer = () =>
  combineReducers({
    user,
    weather,
    country,
  });

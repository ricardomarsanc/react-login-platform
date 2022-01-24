import { combineReducers } from "redux";
import { userReducer as user, UserState } from "./reducers/user";
import { weatherReducer as weather, WeatherData } from "./reducers/weather";

export interface RootState {
  user: UserState;
  weather: WeatherData;
}

export const rootReducer = () =>
  combineReducers({
    user,
    weather,
  });

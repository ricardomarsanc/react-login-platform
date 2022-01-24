import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../../redux/reducers/weather";
import { weatherData } from "../../redux/selectors/weather.selector";

export interface CityData {
  city: string;
  country: string;
  countryCode: string;
}

export interface CityDataObj {
  city: string;
  countryCode: string;
}

const cities: CityData[] = [
  { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
  { city: "Valladolid", country: "España", countryCode: "ES" },
  { city: "París", country: "Francia", countryCode: "FR" },
  { city: "Tokio", country: "Japón", countryCode: "JP" },
  { city: "Londres", country: "Reino Unido", countryCode: "GB" },
];

const Weather = () => {
  const dispatch = useDispatch();

  const weather = useSelector(weatherData);

  useEffect(() => {
    const requestDataObj: CityDataObj = {
      city: cities[0].city,
      countryCode: cities[0].countryCode,
    };
    dispatch(getWeatherData(requestDataObj));
  }, [dispatch]);

  console.log("Weather: ", weather);

  return (
    <>
      <div>Weather Service Data</div>
      {weather.weatherInfo && <div>Hola</div>}
    </>
  );
};

export default Weather;

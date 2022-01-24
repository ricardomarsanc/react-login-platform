import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData, resetWeatherData } from "../../redux/reducers/weather";
import { weatherData } from "../../redux/selectors/weather.selector";
import { toCelsius } from "../../utils/NumberUtils";
import {
  CircularProgress,
  Card,
  Avatar,
  CardHeader,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import styles from "./Weather.module.scss";

export interface CityDataObj {
  city: string;
  countryCode: string;
}

const dateOptions: any = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const cityData: CityDataObj = { city: "Valladolid", countryCode: "ES" };

const Weather = () => {
  const dispatch = useDispatch();

  const weather = useSelector(weatherData);
  let sanitizedWeatherData: any = weather.weatherInfo
    ? weather.weatherInfo
    : undefined;

  useEffect(() => {
    dispatch(getWeatherData(cityData));
    return () => {
      dispatch(resetWeatherData);
    };
  }, [dispatch]);

  console.log("Weather: ", sanitizedWeatherData);

  return (
    <>
      {weather.weatherInfo ? (
        <div>
          <Paper className={styles.header} elevation={3}>
            <h1>Weather forecast in {sanitizedWeatherData.name}</h1>
          </Paper>
          <div className={styles.cardContainer}>
            <Card
              className={styles.card}
              sx={{
                maxWidth: "70%",
                width: "40%",
              }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "lightblue" }} aria-label='recipe'>
                    <ThermostatIcon />
                  </Avatar>
                }
                title={sanitizedWeatherData.name}
                subheader={new Date().toLocaleDateString("en-US", dateOptions)}
              />
              <Divider light />
              <CardContent>
                <Typography variant='body1' color='text.secondary'>
                  Forecast: {sanitizedWeatherData.weather[0].main}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  Current Temperature:{" "}
                  {toCelsius(Number(sanitizedWeatherData.main.temp)).toFixed(2)}
                  º
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Weather;

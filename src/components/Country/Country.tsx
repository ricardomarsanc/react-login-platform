import React, { useEffect } from "react";
import {
  Paper,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCountryData } from "../../redux/reducers/countries";
import { countryData } from "../../redux/selectors/country.selector";
import { CountryDataObj } from "../../services/CountryService";
import styles from "./Country.module.scss";

const countryObj: CountryDataObj = { name: "Spain" };

const Country = () => {
  const dispatch = useDispatch();

  const country = useSelector(countryData);

  let sanitizedCountryData: any = country.countryInfo
    ? country.countryInfo[0]
    : undefined;

  useEffect(() => {
    let sanitizedDataObj = {
      name: countryObj.name.toLowerCase(),
    };
    dispatch(getCountryData(sanitizedDataObj));
  }, [dispatch]);

  console.log(sanitizedCountryData);

  return (
    <>
      {country.countryInfo ? (
        <div>
          <Paper className={styles.header} elevation={3}>
            <h1>Country Data info from {sanitizedCountryData.name.common}</h1>
          </Paper>
          <div className={styles.cardContainer}>
            <Card
              sx={{
                maxWidth: "70%",
              }}>
              <CardMedia
                component='img'
                height={450}
                image={sanitizedCountryData.flags.svg}
                alt='country flag'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {sanitizedCountryData.name.official}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Population: {sanitizedCountryData.population.toLocaleString()}
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

export default Country;

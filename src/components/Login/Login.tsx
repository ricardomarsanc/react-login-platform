import React, { useState } from "react";
import { Grid, Paper, Avatar } from "@mui/material";
import styles from "./Login.module.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SignForm from "../SignForm/SignForm";
import { useDispatch } from "react-redux";
import { auth, signInWithEmailAndPassword } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Link, Snackbar, Alert } from "@mui/material";
import { login } from "../../redux/reducers/user";

const textSubmit = "Sign in";
const vertical = "top";
const horizontal = "center";

const Login = () => {
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginToApp = (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            id: userAuth.user.uid,
          })
        );
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(true);
      });
  };
  return (
    <>
      <Grid container className={styles.gridSpacing}>
        <Paper elevation={10} className={styles.loginContainer}>
          <Grid
            className={styles.formContainer}
            container
            direction='column'
            alignItems='center'
            justifyContent='center'>
            <Avatar className={styles.avatarStyle}>
              <AccountCircleOutlinedIcon />
            </Avatar>
            <h1 className={styles.heading}>{textSubmit}</h1>
            <SignForm onSubmit={loginToApp} submitTxt={textSubmit} />
            <Link className={styles.register} href='/register'>
              Don't have an account yet? Register here
            </Link>
          </Grid>
        </Paper>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={error}
        autoHideDuration={6000}
        onClose={() => setError(false)}
        key={vertical + horizontal}>
        <Alert severity='error'>
          There was an error during login process, please ensure credentials are
          correct
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;

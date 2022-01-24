import React from "react";
import { Grid, Paper, Avatar } from "@mui/material";
import styles from "./Register.module.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SignForm from "../SignForm/SignForm";
// import { useDispatch } from "react-redux";
import { auth, createUserWithEmailAndPassword } from "../../firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/user";

const textSubmit = "Sign up";

const Register = () => {
  const dispatch = useDispatch();

  const registerToApp = (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();

    // Sign in an existing user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        // Dispatch the user information for persistence in the redux state
        dispatch(
          login({
            email: userAuth.user.email,
            id: userAuth.user.uid,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
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
          <SignForm onSubmit={registerToApp} submitTxt={textSubmit} />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Register;

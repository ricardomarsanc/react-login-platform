import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./SignForm.module.scss";

type SignFormProps = {
  onSubmit: Function;
  submitTxt: string;
};

const SignForm = (props: SignFormProps) => {
  const { submitTxt, onSubmit } = props;

  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <form onSubmit={(e) => onSubmit(e, userId, password)}>
        <TextField
          name='username'
          label='Username'
          variant='outlined'
          fullWidth
          required
          margin='normal'
          onChange={(e) => setUserId(e.target.value)}
        />
        <TextField
          name='password'
          label='Password'
          variant='outlined'
          fullWidth
          type='password'
          required
          margin='normal'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className={styles.submitBtn}
          variant='contained'
          type='submit'
          fullWidth
          size='medium'>
          {submitTxt}
        </Button>
      </form>
    </>
  );
};

export default SignForm;

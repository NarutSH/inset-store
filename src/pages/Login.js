import React from "react";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onHandleSubmit = (ev) => {
    console.log(ev);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <Stack spacing={3} marginTop={3}>
          <TextField label="Email" variant="outlined" {...register("email")} />
          <TextField
            label="Password"
            variant="outlined"
            {...register("password")}
          />

          <Button variant="contained" type="submit">
            LOGIN
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Login;

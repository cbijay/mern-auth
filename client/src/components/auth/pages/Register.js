import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../context/AppContext";
import { useHistory } from "react-router-dom";
import AuthHeader from "../layouts/AuthHeader";
import AuthFooter from "../layouts/AuthFooter";
import authStyles from "../styles/authStyle";
import Axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";
import Error from "../errors/Error";

function Register() {
  const classes = authStyles();
  const history = useHistory();
  const { authUser, setAuthUser } = useContext(AppContext);

  useEffect(() => {
    if (authUser.user) {
      history.push("dashboard");
    }
  });

  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState();

  const loginLink = () => {
    history.push("/");
  };

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await Axios.post(
        process.env.REACT_APP_API_URL + "/users/register",
        inputValue
      );

      const loginRes = await Axios.post(
        process.env.REACT_APP_API_URL + "/users/login",
        {
          email: inputValue.email,
          password: inputValue.password,
        }
      );

      //Store logged in user to context api's authUser variable
      setAuthUser(loginRes.data);

      //Store logged in user details in local storage
      localStorage.setItem("auth-token", loginRes.data.token);

      //Redirects to dashboard after successfully register
      history.push("dashboard");
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <AuthHeader />
        <Card className={classes.root}>
          <CardHeader title="Register" className={classes.title} />
          <CardContent className={classes.cardContent}>
            {error && (
              <Error message={error} clearError={() => setError(undefined)} />
            )}
            <form className={classes.form} onSubmit={handleRegister} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="fullName"
                    required
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    className={classes.inputField}
                    autoFocus
                    value={inputValue.fullName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    className={classes.inputField}
                    autoComplete="email"
                    value={inputValue.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    className={classes.inputField}
                    autoComplete="current-password"
                    value={inputValue.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    className={classes.inputField}
                    autoComplete="password"
                    onChange={handleChange}
                    value={inputValue.confirmPassword}
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth className={classes.btnSubmit}>
                Register
              </Button>
              <Grid container justify="center">
                <Grid item>
                  <Button onClick={loginLink} className={classes.routeLink}>
                    Already have an account? Log in
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
      <AuthFooter />
    </Container>
  );
}

export default Register;

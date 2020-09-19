import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthHeader from "../layouts/AuthHeader";
import AuthFooter from "../layouts/AuthFooter";
import authStyles from "../styles/authStyle";
import Axios from "axios";
import { AppContext } from "../../../context/AppContext";
import Error from "../errors/Error";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from "@material-ui/core";

function Login() {
  const classes = authStyles();
  const history = useHistory();

  const { authUser, setAuthUser } = useContext(AppContext);
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [error, setError] = useState();

  useEffect(() => {
    if (authUser.user) {
      history.push("dashboard");
    }
  });

  const registerLink = () => {
    history.push("register");
  };

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await Axios.post(
        process.env.REACT_APP_API_URL + "/users/login",
        inputValue
      );

      //Store logged in user to context api's authUser variable
      setAuthUser(loginRes.data);

      //Store logged in user details in local storage
      localStorage.setItem("auth-token", loginRes.data.token);

      //Redirects to dashboard after successfully logged in
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
          <CardHeader title="Log In" className={classes.title} />
          <CardContent className={classes.cardContent}>
            {error && (
              <Error message={error} clearError={() => setError(undefined)} />
            )}
            <form className={classes.form} onSubmit={handleLogin} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                className={classes.inputField}
                onChange={handleChange}
                value={inputValue.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                className={classes.inputField}
                autoComplete="password"
                onChange={handleChange}
                value={inputValue.password}
              />
              <Button type="submit" fullWidth className={classes.btnSubmit}>
                Log In
              </Button>
              <Grid container className={classes.gridLink}>
                <Button onClick={registerLink} className={classes.routeLink}>
                  {"Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
      <AuthFooter />
    </Container>
  );
}

export default Login;

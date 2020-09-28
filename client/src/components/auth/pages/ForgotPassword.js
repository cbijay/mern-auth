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
import Success from "../../message/success";
import Error from "../../message/Error";

function ForgotPassword() {
  const classes = authStyles();
  const history = useHistory();
  const { authUser } = useContext(AppContext);

  useEffect(() => {
    if (authUser.user) {
      history.push("dashboard");
    }
  });

  const [inputValue, setInputValue] = useState({
    email: "",
  });

  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const loginLink = () => {
    history.push("/");
  };

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handlePassword = async (e) => {
    e.preventDefault();

    try {
      const user = await Axios.post(
        process.env.REACT_APP_API_URL + "/api/users/forgot-password",
        inputValue
      );

      if (user) {
        setSuccess("Password reset link has been sent to your email!!");
        setInputValue({
          email: "",
        });
      }
    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <AuthHeader />
        <Card className={classes.root}>
          <CardHeader title="Forgot Password" className={classes.title} />
          <CardContent className={classes.cardContent}>
            {success && (
              <Success
                success={success}
                clearSuccess={() => setSuccess(undefined)}
              />
            )}
            {error && (
              <Error error={error} clearError={() => setError(undefined)} />
            )}
            <form className={classes.form} onSubmit={handlePassword} noValidate>
              <Grid container spacing={1}>
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
              </Grid>
              <Button type="submit" fullWidth className={classes.btnSubmit}>
                Submit
              </Button>
              <Grid container justify="center">
                <Grid item>
                  <Button onClick={loginLink} className={classes.routeLink}>
                    Back to Log in
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

export default ForgotPassword;

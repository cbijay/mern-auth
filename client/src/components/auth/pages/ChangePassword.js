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

function ChangePassword(props) {
  const classes = authStyles();
  const history = useHistory();
  const { authUser } = useContext(AppContext);

  useEffect(() => {
    if (authUser.user) {
      history.push("dashboard");
    }
  });

  const [inputValue, setInputValue] = useState({
    password: "",
    confirmPassword: "",
  });

  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handlePassword = async (e) => {
    e.preventDefault();

    const token = props.match.params.token;

    try {
      const user = await Axios.put(
        process.env.REACT_APP_API_URL + "/api/users/changePassword/" + token,
        inputValue
      );

      console.log(user);

      if (user.data === true) {
        setSuccess("Password has been changed!!");
        setInputValue({
          password: "",
          confirmPassword: "",
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
          <CardHeader title="Change Password" className={classes.title} />
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
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <AuthFooter />
    </Container>
  );
}

export default ChangePassword;

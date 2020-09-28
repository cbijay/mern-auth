import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Button,
} from "@material-ui/core";
import { AppContext } from "../../../context/AppContext";
import authStyles from "../styles/authStyle";
import Axios from "axios";

function Token(props) {
  const classes = authStyles();
  const { authUser } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (authUser.user !== undefined) {
      history.push("dashboard");
    }

    const verifyToken = async () => {
      const token = props.match.params.token;

      //Verify token with database user's table token
      const tokenRes = await Axios.put(
        process.env.REACT_APP_API_URL + "/api/users/verify/" + token
      );

      console.log(tokenRes);

      if (!tokenRes) {
        history.push("/");
      }
    };

    verifyToken();
  });

  const loginLink = () => {
    history.push("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Card className={classes.root}>
          <CardHeader title="Email Confirmation!!" className={classes.title} />
          <CardContent className={classes.cardContent}>
            <p>
              Your email has been confirmed, you can now
              <Button onClick={loginLink} className={classes.routeLink}>
                Log In.
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}

export default Token;

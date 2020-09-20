import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/pages/Login";
import Register from "./components/auth/pages/Register";
import Dashboard from "./components/admin/pages/Dashboard";
import { AppContext } from "./context/AppContext";
import Axios from "axios";
import "./App.css";

function App() {
  const [authUser, setAuthUser] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    //Checks whether user is alreay logged in
    const checkLoggedin = async () => {
      //Retrieve token from local storage
      let token = localStorage.getItem("auth-token");

      //Checks whether token value is empty and set token value in local storage
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      //Validate local storage token with login token
      const tokenRes = await Axios.post(
        process.env.REACT_APP_API_URL + "/api/users/tokenIsValid",
        null,
        {
          headers: { "x-auth-token": token },
        }
      );

      //Checks if token has data and store token's response data in contextapi
      if (tokenRes.data) {
        const userRes = await Axios.get(
          process.env.REACT_APP_API_URL + "/api/users/",
          {
            headers: { "x-auth-token": token },
          }
        );

        setAuthUser({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedin();
  }, []);

  return (
    <AppContext.Provider value={{ authUser, setAuthUser }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

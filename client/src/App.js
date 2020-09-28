import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import Axios from "axios";
import "./App.css";
import Login from "./components/auth/pages/Login";
import Register from "./components/auth/pages/Register";
import Dashboard from "./components/admin/pages/Dashboard";
import Token from "./components/auth/pages/Token";
import ForgotPassword from "./components/auth/pages/ForgotPassword";
import ChangePassword from "./components/auth/pages/ChangePassword";

function App() {
  const [authUser, setAuthUser] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        process.env.REACT_APP_API_URL + "/api/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
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

    checkLoggedIn();
  }, []);

  return (
    <AppContext.Provider value={{ authUser, setAuthUser }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/verifyToken/:token" component={Token} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/changePassword/:token" component={ChangePassword} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import logo from "../../../images/boiling-head-logo.png";
import authStyles from "../styles/authStyle";

export default function AuthHeader() {
  const classes = authStyles();

  return (
    <>
      <Avatar className={classes.avatar}>
        <img src={logo} alt="Boiling Head" className={classes.logo} />
      </Avatar>
    </>
  );
}

import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import adminHeaderStyle from "../styles/adminHeader";
import { AppContext } from "../../../context/AppContext";

function AdminHeader() {
  const classes = adminHeaderStyle();

  const { setAuthUser } = useContext(AppContext);
  const history = useHistory();

  const handleLogout = () => {
    setAuthUser({
      token: undefined,
      user: undefined,
    });

    localStorage.setItem("auth-token", "");
    history.push("/");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Boiling Head
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default AdminHeader;

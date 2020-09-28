import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const authStyles = makeStyles((theme) => ({
  logo: {
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },  
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "transparent !important",
    width: "150px",
    height: "auto",
    borderRadius: "0",
  },
  root: {
    width: "100%"
  },
  title: {
    padding: `${theme.spacing(1, 0, 1)} !important`,
    textAlign: "center",
    borderBottom: `1px solid ${grey[300]}`,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  inputField: {
    margin: "0 0 8px !important",
  },
  btnSubmit: {
    margin: `${theme.spacing(2, 0, 2)} !important`,
    background: `${grey[900]} !important`,
    color: "#fff !important",
  },
  gridLink: {
    justifyContent: "center",
  },
  routeLink: {
    background: "none !important",
    textTransform: "capitalize !important",
    fontWeight: "400 !important",

    "&:hover": {
      textDecoration: "underline !important",
    },
  },
}));

export default authStyles;

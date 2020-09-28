import React from "react";
import { Alert } from "@material-ui/lab";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Error({ error, clearError }) {
  return (
    <Alert
      variant="filled"
      severity="error"
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            clearError();
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      {error}
    </Alert>
  );
}

export default Error;

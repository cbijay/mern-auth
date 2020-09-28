import React from "react";
import { Alert } from "@material-ui/lab";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Success({ success, clearSuccess }) {
  return (
    <Alert
      variant="filled"
      severity="success"
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            clearSuccess();
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      {success}
    </Alert>
  );
}

export default Success;

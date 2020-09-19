import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function AuthFooter() {
  return (
    <Box mt={8}>
      <Typography variant="body2" color="textSecondary" align="center">
        {`Copyright © ${new Date().getFullYear()} Boiling Head`}
      </Typography>
    </Box>
  );
}

export default AuthFooter;

import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";

const CustomSnackbar = ({ error, handleClose }) => {
  const action = (
    <Button color="secondary" size="small" style={{ textTransform: "none" }}>
      Close
    </Button>
  );
  return (
    <Snackbar
      open={!!error}
      message={error}
      onClick={handleClose}
      action={action}
    />
  );
};

export default CustomSnackbar;

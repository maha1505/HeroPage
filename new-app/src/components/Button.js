import React from "react";
import { Button as MuiButton } from "@mui/material";

function Button({ text, onClick }) {
  return (
    <MuiButton
      variant="contained"
      color="primary"
      onClick={onClick}
      sx={{ borderRadius: "8px", textTransform: "none", width: "200px" }}
    >
      {text}
    </MuiButton>
  );
}

export default Button;

import React from "react";
import { Container, Typography } from "@mui/material";

function About() {
  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        About Page
      </Typography>
      <Typography variant="h6">
        This is a sample About page to test React Router and component structure.
      </Typography>
    </Container>
  );
}

export default About;

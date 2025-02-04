import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import myImage from "../image/myImage.jpg";
import Button from "../components/Button";

function Home() {
  const [text, setText] = useState("Not clicked!");

  const updateText = () => {
    setText("Clicked!");
  };

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to React App
      </Typography>
      <Typography variant="h5" color="textSecondary">
        This app is about learning React from basics
      </Typography>

      <Box sx={{ mt: 3 }}>
        <img
          src={myImage}
          alt="My Image"
          width="300"
          style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.3)" }}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3, gap: 2 }}>
        <Button text="Buton1" />
        <Button text="Button2" />
        <Button text={text} onClick={updateText} />
      </Box>
    </Container>
  );
}

export default Home;

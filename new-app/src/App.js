import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import backgroundimg from "./image/backgroundimg.jpg";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Box
        sx={{
          backgroundImage: `url(${backgroundimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import myImage from "../image/myImage.jpg";
import Button from "../components/Button";
import "../styles/Home.css";

function Home() {
  const [text, setText] = useState("Learn More!");

  const updateText = () => {
    setText("Learned!");
  };

  return (
    <div className="home-container">
      <h1>Welcome to React App</h1>
      <h2>This app is about learning React from basics</h2>

      <img src={myImage} alt="My Image" className="home-image" />

      <div className="button-group">
        <Button text={text} onClick={updateText} />
      </div>
    </div>
  );
}

export default Home;

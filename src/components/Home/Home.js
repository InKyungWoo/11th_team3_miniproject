import React from "react";
import { Link } from "react-router-dom";
import "src/style/Home/Home.css";
import title from "src/assets/images/ThisIsForYou.png";
import cake from "src/assets/images/home_cake.png";
import login from "src/assets/images/loginButton.png";
import confetti from "canvas-confetti";

function Home() {

  const handleCakeClick = () => {
    // Generate confetti
    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 }
    });
  };

  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  return (
    <div className="Background">
      <img src={title} className="title"></img>
      <img
        src={cake}
        className="cake"
        alt="케이크"
        onClick={handleCakeClick}
      />
      <Link to="/Login">
        <img src={login} className="login"></img>
      </Link>
    </div>
  );
}

export default Home;

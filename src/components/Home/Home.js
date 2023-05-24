import React from "react";
import { Link } from "react-router-dom";
import "src/style/Home/Home.css";
import title from "src/assets/images/ThisIsForYou.png";
import cake from "src/assets/images/home_cake.png";
import login from "src/assets/images/loginButton.png";

function Home() {
  return (
    <div className="Background">
      <img src={title} className="title"></img>
      <img src={cake} className="cake"></img>
      <Link to="/Login">
        <img src={login} className="login"></img>
      </Link>
    </div>
  );
}

export default Home;

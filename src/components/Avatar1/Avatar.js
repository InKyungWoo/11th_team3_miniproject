import React from "react";
import NextButton from "src/assets/images/avatar/nextButton.png";
import "src/style/Avatar/Avatar.css";
import HeadChange from "src/components/Avatar1/HeadChange";
import BodyChange from "./BodyChange";
import ClothesChange from "./ClothesChange";
import HatChange from "./HatChange";
import { Link } from "react-router-dom";

export default function Avatar() {
  return (
    <div className="Background">
      <div className="AvatarCheck"></div>
      <div>
        <HeadChange />
      </div>
      <div>
        <BodyChange />
      </div>
      <div>
        <ClothesChange />
      </div>
      <div>
        <HatChange />
      </div>
      <Link to="/AftLogin">
        <img src={NextButton} className="Next" alt="다음" />
      </Link>
    </div>
  );
}

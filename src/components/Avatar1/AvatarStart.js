import React from "react";
import NextButton from "src/assets/images/avatar/nextButton.png";
import "src/style/Avatar/Avatar.css";
import modelCat from "src/assets/images/avatar/modelCat.png";
import "src/style/Avatar/AvatarStart.css";
import { Link } from "react-router-dom";
import pickHead from "src/assets/images/avatar/pickHead.png";
import pickBody from "src/assets/images/avatar/pickBody.png";
import pickClothes from "src/assets/images/avatar/pickClothes.png";
import pickHat from "src/assets/images/avatar/pickHat.png";

export default function AvatarStart() {
  return (
    <Link to="/Avatar">
      <div className="Background">
        <div className="AvatarCheck">
          <img src={modelCat} className="model" alt="고양이보여줌"></img>
        </div>
        <div>
          <img src={pickHead} className="pickHead" alt="머리 선택" />
          <img src={pickBody} className="pickBody" alt="몸 선택"></img>
          <img src={pickClothes} className="pickClothes" alt="옷 선택" />
          <img src={pickHat} className="pickHat" alt="모자 선택"></img>
        </div>

        <img src={NextButton} className="Next" alt="다음" />
      </div>
    </Link>
  );
}

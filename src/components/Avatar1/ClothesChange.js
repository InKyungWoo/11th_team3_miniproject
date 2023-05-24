import RightGreen from "src/assets/images/avatar/arrowRight_Green.png";
import LeftGreen from "src/assets/images/avatar/arrowLeft.png";

import Boy from "src/assets/images/avatar/clothes/winterBoy_clothes.png";
import purpleHoodie from "src/assets/images/avatar/clothes/purpleHoodie.png";
import Girl from "src/assets/images/avatar/clothes/winterGirl_clothes.png";
import brownCoat from "src/assets/images/avatar/clothes/brownCoat.png";
import BuleShirt from "src/assets/images/avatar/clothes/buleShirts.png";
import overall from "src/assets/images/avatar/clothes/overall_clothes.png";
import greenHoodie from "src/assets/images/avatar/clothes/greenHoodie.png";
import redHoodie from "src/assets/images/avatar/clothes/redHoodie.png";
import Nothing from "src/assets/images/avatar/clothes/nothing.png";

import "src/style/Avatar/Avatar.css";

import React, { useState } from "react";

const ClothesChange = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const images = [
    greenHoodie,
    Boy,
    purpleHoodie,
    redHoodie,
    Girl,
    brownCoat,
    BuleShirt,
    overall,

    Nothing,
  ];
  return (
    <div className="slider">
      <img
        className="SeeBody "
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <div className="PickClothes"></div>
      <img
        className="Clothes"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />

      <div>
        <img
          onClick={handleNext}
          src={RightGreen}
          className="ClothesRight"
          alt="오른쪽버튼"
        />
        <img
          onClick={handlePrevious}
          src={LeftGreen}
          className="ClothesLeft"
          alt="왼쪽버튼"
        />
      </div>
    </div>
  );
};

export default ClothesChange;

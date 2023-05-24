import bule from "src/assets/images/avatar/hat/blue_hat.png";
import candle from "src/assets/images/avatar/hat/candle_hat.png";
import crown from "src/assets/images/avatar/hat/crown_hat.png";
import headset from "src/assets/images/avatar/hat/headset.png";
import hoddie from "src/assets/images/avatar/hat/hooded_hat.png";
import pink from "src/assets/images/avatar/hat/pink_hat.png";
import snowman from "src/assets/images/avatar/hat/snowman_hat.png";
import sprout from "src/assets/images/avatar/hat/sprout_hat.png";
import straw from "src/assets/images/avatar/hat/straw_hat.png";
import nothing from "src/assets/images/avatar/clothes/nothing.png";

import RightRed from "src/assets/images/avatar/arrowRight_Red.png";
import LeftRed from "src/assets/images/avatar/arrowLeft_Red.png";
import NextButton from "src/assets/images/avatar/nextButton.png";

import "src/style/Avatar/Avatar.css";

import React, { useState } from "react";

const HatChange = () => {
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
    sprout,
    bule,
    candle,
    crown,
    headset,
    hoddie,
    pink,
    snowman,
    straw,
    nothing,
  ];

  const handleSaveImage = () => {
    const selectedImage = images[currentIndex];
    // Save the selectedImage data to localStorage or perform any other desired action
    console.log(" saved:", selectedImage);
  };

  return (
    <div className="slider">
      <img
        className="SeeHat"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <div className="PickHat"></div>
      <img
        className="Hat"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <div>
        <img
          onClick={handleNext}
          src={RightRed}
          className="HatRight "
          alt="오른쪽버튼"
        />
        <img
          onClick={handlePrevious}
          src={LeftRed}
          className="HatLeft "
          alt="왼쪽버튼"
        />
        <img
          onClick={handleSaveImage}
          src={NextButton}
          className="Next"
          alt="다음"
        />
      </div>
    </div>
  );
};

export default HatChange;

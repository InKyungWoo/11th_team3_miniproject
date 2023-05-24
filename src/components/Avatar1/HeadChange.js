import Boy from "src/assets/images/avatar/head/boy_head.png";
import Cat from "src/assets/images/avatar/head/cat_head.png";
import Girl from "src/assets/images/avatar/head/girl_head.png";
import Snowman from "src/assets/images/avatar/head/snowman_head.png";
import Kangaroo from "src/assets/images/avatar/head/kangaroo_head.png";
import Qwl from "src/assets/images/avatar/head/owl_head.png";
import Penquin from "src/assets/images/avatar/head/penguin_head.png";
import Rabbit from "src/assets/images/avatar/head/rabbit_head.png";
import Raccoon from "src/assets/images/avatar/head/raccoon_head.png";

import RightGreen from "src/assets/images/avatar/arrowRight_Green.png";
import LeftGreen from "src/assets/images/avatar/arrowLeft.png";

import "src/style/Avatar/Avatar.css";

import React, { useState } from "react";

const HeadChange = () => {
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
    Cat,
    Boy,
    Girl,
    Snowman,
    Kangaroo,
    Qwl,
    Penquin,
    Rabbit,
    Raccoon,
  ];

  return (
    <div className="slider">
      <img
        className="SeeHead"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <div className="PickHead">
        <img
          className="Head"
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
      </div>
      <div>
        <img
          onClick={handleNext}
          src={RightGreen}
          className="HeadRight "
          alt="오른쪽버튼"
        />
        <img
          onClick={handlePrevious}
          src={LeftGreen}
          className="HeadLeft"
          alt="왼쪽버튼"
        />
      </div>
    </div>
  );
};

export default HeadChange;

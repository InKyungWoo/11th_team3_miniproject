import React, { useRef } from "react";

import "src/style/Avatar/Avatar.css";

import HeadChange from "src/components/Avatar1/HeadChange";
import BodyChange from "./BodyChange";
import ClothesChange from "./ClothesChange";
import HatChange from "./HatChange";

import { Link } from "react-router-dom";

import NextButton from "src/assets/images/avatar/nextButton.png";

const Avatar = () => {
  const canvasRef = useRef(null);

  const handleNext = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/png");

    // 사용자 입력으로 파일 이름 받기
    const imageName = prompt("이미지의 이름을 입력하세요:");

    // 이미지 저장 로직
    saveImageToLocalStorage(image, imageName);
  };

  const saveImageToLocalStorage = (imageData, imageName) => {
    // 이미지를 localStorage에 저장하는 로직 또는 다른 작업을 수행할 수 있습니다.
    localStorage.setItem(imageName, imageData);
    console.log("저장된 이미지:", imageName);
  };

  const handlePrevious = () => {
    // 이전 버튼을 클릭했을 때 수행할 작업을 구현하세요.
  };

  //btn function code 이 뒤에 작성하기

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

      {/* Canvas 요소 */}
      <canvas ref={canvasRef} className="Canvas" width={200} height={200} />
      
      <div>  
        {/* ======== 기존 코드 =======      */}
        <Link to="/AftLogin">
          <img
            onClick={handleNext}
            src={NextButton}
            className="Next"
            alt="다음"
          />
        </Link>

        {/* ====== 내가 짜본 코드 =======*/}
        {/* <button type="button" className='btn_image' id="img_bt">
          <img src={NextButton}/>
        </button> */}
      </div>
    </div>
  );
};

// 함수형 만들어본거
// function ButtonNext() {
//   return(
//     <button type="button" className='btn_image' id="img_bt">
//       <img src={NextButton}/>
//     </button>
//   )
// }

export default Avatar;
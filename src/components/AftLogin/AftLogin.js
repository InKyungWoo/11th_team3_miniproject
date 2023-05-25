import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
//import { useHistory } from "history";
import "src/style/AftLogin/AftLogin.css";
import title from "src/assets/images/ThisIsForYou.png";
import cake2 from "src/assets/images/aftlogin/cake.png";
import partyrule from "src/assets/images/aftlogin/partyrule.png";
import invite from "src/assets/images/aftlogin/invite.png";
import gotoParty from "src/assets/images/aftlogin/gotoParty.png";
import logout from "src/assets/images/aftlogin/logout.png";
import letter from "src/assets/images/aftlogin/letter.png";
import close from "src/assets/images/aftlogin/confirm.png";

import Modal from "react-modal";
import confetti from "canvas-confetti";
//import { Login } from "src/components/Login/login.js";

Modal.setAppElement("#root"); // Set the root element for the modal

function AftLogin() {

  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

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

  const onClickLogoutButton = () => {
    // 로그아웃 동작 구현
    alert("로그아웃되었습니다.");
  };

  return (
    <div className="Background">
      <img src={title} className="title" alt="타이틀" />
      <img
        src={cake2}
        className="cake2"
        alt="케이크"
        onClick={handleCakeClick}
      />
      <div className="pinkRectangle">
        <div className="linkContainer">
        <img
            src={partyrule}
            className="partyrule"
            alt="파티규칙"
            onClick={handlePopupOpen}
          />
          <Link to="/WriteInvitation">
            <img src={invite} className="invite" alt="초대장 작성" />
          </Link>
          <Link to="/Partyroom">
            <img src={gotoParty} className="gotoParty" alt="파티방 입장" />
          </Link>

          <Link to="/Home">
            <img
              src={logout}
              alt="로그아웃"
              onClick={onClickLogoutButton}   
              style={{ cursor: "pointer" }}
            />
          </Link>

        </div>
      </div>
      {showPopup && (
        <div className="popupContainer">
          <div className="popupContent">
            <img src={letter} className="popupImage" alt="편지" />
            <img
              src={close}
              className="popupClose"
              onClick={handlePopupClose}
              alt="닫기"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AftLogin;
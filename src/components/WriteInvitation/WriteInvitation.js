import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "src/style/WriteInvitation/WriteInvitation.css";
import copylink from "src/assets/images/writeInvitation/copylink.png";
import letter from "src/assets/images/writeInvitation/letter.png";
import envelope from "src/assets/images/writeInvitation/envelope.png";
import heading from "src/assets/images/writeInvitation/heading.png";


function WriteInvitation() {

  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  // {userid}로 접근하도록 수정 필요
  const handleCopyLink = () => {
    const inviteLink = window.location.href;
    navigator.clipboard.writeText(inviteLink);
    setShowPopup(true);
    console.log("초대 링크 복사 완료:", inviteLink);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/AftLogin"); // Navigate to the '/AftLogin' page
  };

  return (
    <div className="Background">
      <div>
        <input
          type="text"
          className="nicknamebox"
          placeholder="  닉네임"
          value={nickname}
          onChange={handleNickname}
        />
      </div>
      <textarea
        className="messagebox"
        placeholder="  초대 메시지 작성"
        value={message}
        onChange={handleMessage}
      ></textarea>

      <img src={letter} className="letter" alt="초대장 작성" />
      <img src={heading} className="heading" alt="~~의 파티에 초대합니다" />
      <img src={envelope} className="envelope" alt="편지 봉투" />
      <img
        src={copylink}
        className="copylink"
        alt="초대 링크 복사"
        onClick={handleCopyLink}
      />

      {showPopup && (
        <div className="popup">
          <p>초대장 링크가 복사되었습니다 :)</p>
          <button onClick={handleClosePopup}>닫기</button>
        </div>
      )}
    </div>
  );
}

export default WriteInvitation;
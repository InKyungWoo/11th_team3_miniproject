import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "src/style/Partyroom/Partyroom.css";

import table from "src/assets/images/partyroom/table.png";
import chair from "src/assets/images/partyroom/chair.png";
import previous from "src/assets/images/partyroom/previous.png";
import cakestack from "src/assets/images/partyroom/cakestack.png";
import maincharacter from "src/assets/images/partyroom/고라니.png";
import guest1 from "src/assets/images/partyroom/새싹냥.png";
import guest2 from "src/assets/images/partyroom/부엉이.png";
import guest3 from "src/assets/images/partyroom/너구리.png";
import guest4 from "src/assets/images/partyroom/guest4.png";

function Partyroom() {

  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    // D-day 계산 로직
    const targetDate = new Date("2023-06-21");
    const today = new Date();
    const timeDifference = targetDate - today;
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    setDaysRemaining(remainingDays);
  }, []);


  return (
    <div className="Background">
      
      <div className="countdown-wrapper">
        <div className="countdown">{`🎉 D-${daysRemaining} day 🎉`}</div>
      </div>
      <img src={table} className="table" alt="테이블" />
      <Link to="/AftLogin">
        <img src={previous} className="previous" alt="이전" />
      </Link>

      <div className="chair-container">
        <img src={chair} className="chair" alt="주인공 의자" />
        <img src={chair} className="chair" alt="의자" />
        <img src={chair} className="chair" alt="의자" />
        <img src={chair} className="chair" alt="의자" />
        <img src={chair} className="chair" alt="의자" />
        <img src={chair} className="chair" alt="의자" />
        <img src={chair} className="chair" alt="의자" />
        <img src={chair} className="chair" alt="의자" />
        <img src={chair} className="chair" alt="의자" />
        <img src={chair} className="chair" alt="의자" />
        <img src={chair} className="chair" alt="의자" />
        {/* 추가적인 의자 필요한 개수만큼 추가 */}
      </div>

      <img src={cakestack} className="cakestack1" alt="케이크 쌓기" />
      <img src={cakestack} className="cakestack2" alt="케이크 쌓기" />
      <img src={cakestack} className="cakestack3" alt="케이크 쌓기" />
      <img src={cakestack} className="cakestack4" alt="케이크 쌓기" />

      <img src={maincharacter} className="maincharacter" alt="주인공 아바타" />
      <img src={guest1} className="guest1" alt="새싹냥" />
      <img src={guest2} className="guest2" alt="부엉이" />
      <img src={guest3} className="guest3" alt="너구리" />
      <img src={guest4} className="guest4" alt="펭귄눈사람" />
    </div>
  );
}

export default Partyroom;
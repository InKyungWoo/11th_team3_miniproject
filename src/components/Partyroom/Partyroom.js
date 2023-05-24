import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "src/style/Partyroom/Partyroom.css";

import table from "src/assets/images/partyroom/table.png";
import chair from "src/assets/images/partyroom/chair.png";
import previous from "src/assets/images/partyroom/previous.png";
import cakestack from "src/assets/images/partyroom/cakestack.png";

function Partyroom() {

  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    // D-day 계산 로직
    const targetDate = new Date("2023-12-31");
    const today = new Date();
    const timeDifference = targetDate - today;
    const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    setDaysRemaining(remainingDays);
  }, []);


  return (
    <div className="Background">
      <div className="countdown-wrapper">
        <div className="countdown">{`D-${daysRemaining} day`}</div>
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
    </div>
  );
}

export default Partyroom;
import React from "react";
import "./strongstrong.css";

export const StrongStrong = ({ className }) => {
  return (
    <div className={`strong-strong ${className}`}>
      <div className="div-how-title">
        <div className="p">
          <div className="fesit">
            Fesit.
            <br />
            간편 이용방법
          </div>
        </div>
      </div>
      <div className="div-use-icon">
        <div className="div-use-box">
          <img className="div-use-img" alt="Div use img" src="/images/div-use-img.svg" />
          <div className="div-use-txt">
            <div className="heading">원하는 정보 검색</div>
            <div className="element">지역, 숙소, 축제 등</div>
            <div className="text-wrapper">찾고싶은 정보를 입력해주세요!</div>
          </div>
        </div>
        <div className="div-right-arr">
          <img className="right-arr-png" alt="Right arr png" src="/images/right-arr-png.png" />
        </div>
        <div className="div">
          <div className="div-use-img-2">
            <img className="mingcute-check-fill" alt="Mingcute check fill" src="/images/mingcute-check-fill.svg" />
            <div className="ri-check-line" />
            <div className="system-uicons" />
          </div>
          <div className="div-use-txt">
            <div className="heading-2">장소 선택</div>
            <div className="element-2">원하는 축제를</div>
            <div className="element-3">선택해주세요.</div>
          </div>
        </div>
        <div className="right-arr-png-wrapper">
          <img className="right-arr-png" alt="Right arr png" src="/images/image.png" />
        </div>
        <div className="div-use-box-2">
          <img className="div-use-img" alt="Div use img" src="/images/image.svg" />
          <div className="div-use-txt">
            <div className="heading-3">길찾기</div>
            <div className="element">숙소에서 축제까지</div>
            <div className="element-4">길을 대신 찾아드립니다.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

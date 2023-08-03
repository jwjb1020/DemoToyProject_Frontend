import React from "react";
import "./divreser.css";

export const DivReser = ({ className }) => {
  return (
    <div className={`div-reser ${className}`}>
      <div className="form">
        <div className="div-weight-wrap">
          <div className="input">
            <div className="div-placeholder">
              <div className="element">지역을 입력해주세요.</div>
            </div>
          </div>
        </div>
        <div className="div-start-wrap">
          <div className="input">
            <div className="element-wrapper">
              <div className="text-wrapper">숙소를 입력해주세요.</div>
            </div>
          </div>
        </div>
        <div className="div-end-wrap">
          <div className="div-input-box">
            <div className="div-placeholder-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper">축제를 입력해주세요.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-submit-btn-div">
          <div className="div">
            <div className="element-2">검색</div>
          </div>
        </div>
      </div>
    </div>
  );
};

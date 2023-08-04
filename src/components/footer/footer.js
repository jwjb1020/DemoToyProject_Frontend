import React from "react";
import facebooklogo from "../../images/facebook.svg"
import gitlogo from "../../images/git.svg"
import instalogo from "../../images/insta.svg"
import "./footer.css";

export const Footer = ({ className }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="div-footer-wap">
        <div className="frame" />
      </div>
      <div className="div-text-box">
        <div className="div-text-img">
          <div className="heading" />
          <div className="div-sns-img" >
            <img className="img" alt="Brands git" src={gitlogo} />
            <img className="img" alt="Basil instagram" src={instalogo} />
            <img className="img" alt="Ant design facebook" src={facebooklogo} />
          </div>
          
        </div>
        <div className="div-text-info">
          <div className="group">
            <p className="copyright-fesit">Copyright 2023. Fesit All rights reserved.</p>
            <div className="element">
              <span className="text-wrapper">주소: 부산광역시 </span>
              <span className="span">부산대학교</span>
            </div>
            <div className="festt">상호: Festt 대표자: 조원준</div>
          </div>
        </div>
      </div>
    </div>
  );
};

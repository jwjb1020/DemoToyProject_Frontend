import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
    <div className="div-footer-wrap">
      <div className="div-footer-use">
        <div className="list">
          <div className="item">
            <div className="text-wrapper">개인정보취급방침</div>
          </div>
          <div className="div-wrapper">
            <div className="div">이용약관</div>
          </div>
        </div>
      </div>
      <div className="div-txt-box">
        <div className="div-txt-img">
          <div className="heading" />
          <div className="div-sns-img">
            <div className="link">
              <img className="img" alt="Facebook png" src="/images/facebook.png" />
            </div>
            <div className="link">
              <img className="img" alt="Instra png" src="/images/instra-png.png" />
            </div>
            <img className="img" alt="Link blog png" src="/images/link-blog-1-png.png" />
          </div>
        </div>
        <div className="div-txt-info">
          <p className="p">상호 : 주식회사 Fesit 대표자 : 조원준</p>
          <div className="text-wrapper-2">주소 : 부산광역시 부산대학교</div>
          <p className="text-wrapper-2">Copyright 2023. Fesit All rights reserved.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

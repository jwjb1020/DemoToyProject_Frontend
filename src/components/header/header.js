import PropTypes from "prop-types";
import React from "react";
import "./header.css";

export const Nav = ({ property1, className }) => {
  return (
    <div className={`nav ${className}`}>
      <img className="group" alt="Group" src="group.svg" />
      <div className="list">
        <div className="item">
          <div className="link">알아보기</div>
        </div>
        <div className="item">
          <div className="link">혜택받기</div>
        </div>
        <div className="item">
          <div className="link">물어보기</div>
        </div>
      </div>
      <div className="list-item">
        <div className="element-wrapper">
          <div className="element">로그인</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper">회원가입</div>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};

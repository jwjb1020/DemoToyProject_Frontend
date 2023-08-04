import React from "react";

import "./header.css";
import logo from "../../images/group.svg"
import button23 from "../../images/button-23.png"
export const Header = ({ className }) => {
  return (
    <div className={`header ${className}`}>
      <img className="logo" alt="Div sns img" src={logo} />
      <img className="button23" alt="Div sns img" src={button23} />
    </div>
  );
};
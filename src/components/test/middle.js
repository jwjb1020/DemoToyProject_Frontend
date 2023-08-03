import React from "react";
import { Div } from "./div";
import { DivReser } from "./divreser";
import { StrongStrong } from "./strongstrong";
import "./middle.css";

export const DivContents = () => {
  return (
    <div className="div-contents">
      <Div className="div-section" />
      <DivReser className="div-reser-instance" />
      <StrongStrong className="strong-strong-instance" />
    </div>
  );
};

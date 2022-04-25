import React from "react";

const MiddleLine = ({ style, orientation }) => {
  return (
    <div
      className="middle-line"
      style={
        orientation === "horizontal"
          ? { ...style, gridTemplateColumns: "auto 1fr" }
          : { ...style, gridTemplateRows: "auto 1fr" }
      }
    >
      <div className="round">
        <span></span>
      </div>
      <div
        className="middle-border"
        style={
          orientation === "horizontal"
            ? { gridTemplateRows: "1fr 1fr" }
            : { gridTemplateColumns: "1fr 1fr" }
        }
      >
        <span
          style={
            orientation === "horizontal"
              ? { borderBottom: "1px solid white" }
              : { borderRight: "1px solid white" }
          }
        ></span>
        <span></span>
      </div>
    </div>
  );
};

export default MiddleLine;

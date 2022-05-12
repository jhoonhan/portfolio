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
      <div className="middle-border">
        <span
          style={
            orientation === "horizontal"
              ? { width: "100%", height: "1px" }
              : { gridTemplateColumns: "1fr 1fr" }
          }
        ></span>
      </div>
    </div>
  );
};

export default MiddleLine;

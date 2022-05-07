import React from "react";

const DesktopSVG = ({ img }) => {
  const st0 = {
    fill: "#1a1a1a",
  };

  return (
    <div className="slide-img--mobile">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 480 1000"
        style={{ enableBackground: "new 0 0 480 1000" }}
      >
        <path
          style={st0}
          d="M424.55,0h-48.94h-5.44H109.83H94.97H55.45C24.88,0,0,24.89,0,55.47v889.05C0,975.11,24.88,1000,55.45,1000
	h168.58h15.39h1.15h15.39h168.58c30.58,0,55.45-24.89,55.45-55.47V55.47C480,24.89,455.12,0,424.55,0z M424.55,16.55
	c21.49,0,38.91,17.43,38.91,38.92v889.05c0,21.5-17.42,38.92-38.91,38.92h-99.19h-69.39h-31.94h-57.67H55.45
	c-21.49,0-38.91-17.43-38.91-38.92V55.47c0-21.5,17.42-38.92,38.91-38.92H424.55z"
        />
      </svg>
      <div className="masking">
        <img src={img} alt="aaang" />
      </div>
    </div>
  );
};

export default DesktopSVG;

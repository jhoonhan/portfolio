import React from "react";

const MobileSVG = ({ type, data, customClass }) => {
  const st0 = {
    fill: "#1a1a1a",
  };

  const renderVisual = () => {
    if (type === "image") {
      return <img src={data} alt="mobile" />;
    }
    if (type === "video") {
      return <video src={data} autoPlay={true} muted loop />;
    }
  };

  const render = () => {
    return (
      <div className={`slide-img--mobile ${customClass}`}>
        {/* <svg
          id="phone"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 1200"
        >
          <path
            d="M530.68,0H69.32C31.09,0,0,29.86,0,66.57V1133.43C0,1170.14,31.09,1200,69.32,1200H530.68c38.23,0,69.32-29.86,69.32-66.57V66.57C600,29.86,568.91,0,530.68,0ZM469.51,19.86h61.17c26.87,0,48.64,20.91,48.64,46.71V1133.43c0,25.8-21.77,46.71-48.64,46.71H69.32c-26.87,0-48.64-20.91-48.64-46.71V66.57c0-25.8,21.77-46.71,48.64-46.71H469.51Z"
            style={{ fill: "#1a1a1a" }}
          />
        </svg> */}
        {/* <div className="masking"></div> */}
        {renderVisual()}
      </div>
    );
  };

  return render();
};

export default MobileSVG;

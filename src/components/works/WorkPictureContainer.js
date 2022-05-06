import React, { useState, useEffect, useRef } from "react";

import usePictureContainerStyle from "./usePictureContainerStyle";
import usePictureContainerPosition from "./usePictureContainerPosition";

const WorkPictureContainer = ({ images }) => {
  const [actImg, setActImg] = useState("img1");
  const { conditionalStyle } = usePictureContainerStyle(actImg);
  const { actImgPosition, onMouseMoveImg } =
    usePictureContainerPosition(actImg);

  const render = () => {
    return (
      <div
        onMouseLeave={() => setActImg("img1")}
        className="works__picture-container"
      >
        <div
          onMouseOver={() => setActImg("img3")}
          onMouseMove={(e) => onMouseMoveImg.current(e)}
          className={`works_picture ${actImg === "img3" ? "active" : ""}`}
          style={conditionalStyle.img3}
        >
          <img
            src={images?.overviewImages[0]}
            alt="img3"
            style={{
              transform: `translateX(${actImgPosition.img3.x}%) translateY(${actImgPosition.img3.y}%)`,
            }}
          />
        </div>

        <div
          onMouseOver={() => setActImg("img2")}
          onMouseMove={(e) => onMouseMoveImg.current(e)}
          className={`works_picture ${actImg === "img2" ? "active" : ""}`}
          style={conditionalStyle.img2}
        >
          <img
            src={images?.overviewImages[1]}
            alt="img2"
            style={{
              transform: `translateX(${actImgPosition.img2.x}%) translateY(${actImgPosition.img2.y}%)`,
            }}
          />
        </div>

        <div
          onMouseOver={() => setActImg("img1")}
          // onMouseMove={onMouseMoveImg}
          onMouseMove={(e) => onMouseMoveImg.current(e)}
          className={`works_picture ${actImg === "img1" ? "active" : ""}`}
          style={conditionalStyle.img1}
        >
          <img
            src={images?.overviewImages[2]}
            alt="img1"
            style={{
              transform: `translateX(${actImgPosition.img1.x}%) translateY(${actImgPosition.img1.y}%)`,
            }}
          />
        </div>
      </div>
    );
  };
  return render();
};

export default WorkPictureContainer;

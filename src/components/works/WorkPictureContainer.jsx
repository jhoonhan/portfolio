import React, { useState, useContext, useRef } from "react";
import { motion } from "framer-motion";
import { PageContext } from "../../App";

import usePictureContainerStyle from "./hooks/usePictureContainerStyle";
import usePictureContainerPosition from "./hooks/usePictureContainerPosition";

const WorkPictureContainer = ({ images }) => {
  const { style } = useContext(PageContext);

  const [actImg, setActImg] = useState("img1");
  const { conditionalStyle } = usePictureContainerStyle(actImg);
  const { actImgPosition, onMouseMoveImg } =
    usePictureContainerPosition(actImg);

  const refImg1 = useRef(null);
  const refImg2 = useRef(null);
  const refImg3 = useRef(null);

  const animate = {
    container: {
      hidden: { y: -window.innerHeight },
      show: {
        y: 0,
        transition: {
          type: "spring",
          staggerChildren: 0.2,
        },
      },
    },
    item: {
      hidden: { y: -window.innerHeight },
      show: { y: 0 },
    },
  };

  const render = () => {
    return (
      <motion.div
        onMouseEnter={() => style.setCursor({ show: true, type: "move" })}
        onMouseLeave={() => {
          setActImg("img1");
          style.setCursor({ show: true, type: "scroll" });
        }}
        className="works__picture-container"
        variants={animate.container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          ref={refImg1}
          onMouseOver={() => setActImg("img3")}
          onMouseMove={(e) => onMouseMoveImg.current(e)}
          className={`works_picture ${actImg === "img3" ? "active" : ""}`}
          style={conditionalStyle.img3}
          variants={animate.item}
        >
          <img
            src={images[2]}
            alt="img3"
            style={{
              transform: `translateX(${actImgPosition.img3.x}%) translateY(${actImgPosition.img3.y}%)`,
            }}
          />
        </motion.div>

        <motion.div
          ref={refImg2}
          onMouseOver={() => setActImg("img2")}
          onMouseMove={(e) => onMouseMoveImg.current(e)}
          className={`works_picture ${actImg === "img2" ? "active" : ""}`}
          style={conditionalStyle.img2}
          variants={animate.item}
        >
          <img
            src={images[1]}
            alt="img2"
            style={{
              transform: `translateX(${actImgPosition.img2.x}%) translateY(${actImgPosition.img2.y}%)`,
            }}
          />
        </motion.div>

        <motion.div
          ref={refImg3}
          onMouseOver={() => setActImg("img1")}
          onMouseMove={(e) => onMouseMoveImg.current(e)}
          className={`works_picture ${actImg === "img1" ? "active" : ""}`}
          style={conditionalStyle.img1}
          variants={animate.item}
        >
          <img
            src={images[0]}
            alt="img1"
            style={{
              transform: `translateX(${actImgPosition.img1.x}%) translateY(${actImgPosition.img1.y}%)`,
            }}
          />
        </motion.div>
      </motion.div>
    );
  };
  return render();
};

export default WorkPictureContainer;

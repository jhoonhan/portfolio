import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import useListenSwipe from "../../helpers/useListenSwipe";
import useVerticalNavigation from "./useVerticalNavigation";
import { transition } from "../../helpers/config";

const Landing = ({ slideInfo, pageControl, content }) => {
  const { setWorkSubPage } = pageControl;

  useVerticalNavigation(pageControl);

  useEffect(() => {
    setWorkSubPage("landing");
  }, [setWorkSubPage]);

  const refHasRenderd = useRef(false);

  useEffect(() => {
    refHasRenderd.current = true;
  }, [refHasRenderd]);

  //////
  const { onTouchStart, onTouchMove, onTouchEnd, sticky } = useListenSwipe();

  /////////

  const refInterval = useRef(null);
  const [result, setResult] = useState("0123456789abc");

  useEffect(() => {
    makeid();
  }, []);

  const makeid = (unmount) => {
    const chars = content?.name.join("").split("");
    let res = result.split("");

    chars.forEach((char, i) => {
      let tmout = null;
      clearInterval(tmout);
      // const res = chars.map((char) => {
      //   let result = "";
      const characters = "abcdefghijklmnopqrstuvwxyz";
      tmout = setInterval(() => {
        const generated = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        if (generated !== char) {
          // console.log(`keep going // ${generated}/${char}`);
          res[i] = generated;
          setResult(res.join(""));
        } else {
          // console.log(`clearing interval // ${generated}/${char}`);
          clearInterval(tmout);
          res[i] = char;
          // console.log(res);
          setResult(res.join(""));
          // return char;
        }
      }, 100);
    });
  };

  const randomChar = (str) => {
    console.log(`random`);
    return content?.name;
  };

  //////////

  const render = () => {
    // console.log(`landing rendered`);
    return (
      <div
        className="work__content"
        style={
          isMobile
            ? {
                transform: `translateX(${-sticky.x}px) translateY(${-sticky.y}px)`,
              }
            : slideInfo.slideImgStyle
        }
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="work__landing">
          <div
            className="work__landing__img"
            style={{ backgroundImage: `url(${content?.images.landing})` }}
          ></div>
          <div className="work__landing__overlay"></div>
          <motion.h1
            initial={{ color: "#000", opacity: 0 }}
            animate={{ color: "#fff", opacity: 1 }}
            exit={{ color: "#000", opacity: 0 }}
            transition={
              refHasRenderd.current
                ? { duration: transition.default, delay: 0 }
                : { duration: transition.default, delay: 0.5 }
            }
          >
            {/* {content?.name} */}
            {/* {makeid(content?.name.length)} */}
            {result}
          </motion.h1>
        </div>
      </div>
    );
  };

  return render();
};

export default Landing;

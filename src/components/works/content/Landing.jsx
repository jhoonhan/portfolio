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

  useEffect(() => {
    const characters = "abcdefghijklmnopqrstuvwxyz";

    refInterval.current = setInterval(makeid, 1000);
  }, []);

  const makeid = (length) => {
    // const chars = content?.name.join("").split("");
    // const res = chars.map((char) => {
    //   let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz";

    const generate = () => {
      return characters.charAt(Math.floor(Math.random() * characters.length));
      // return "s";
    };
    const generated = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );

    // console.log(generate());

    if (generated !== "s") {
      console.log(`keep going // ${generated}`);
    } else {
      // console.log(`yay // ${generate()}`);
      console.log(`clearing interval // ${generated}`);
      clearInterval(refInterval.current);
      return "s";
    }

    var result = "";
    // var characters = "abcdefghijklmnopqrstuvwxyz";
    // var charactersLength = characters.length;

    // for (var i = 0; i < length; i++) {
    //   result += characters.charAt(Math.floor(Math.random() * charactersLength));
    // }
    return result;
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
          </motion.h1>
        </div>
      </div>
    );
  };

  return render();
};

export default Landing;

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import useListenSwipe from "../../helpers/useListenSwipe";
import useVerticalNavigation from "./useVerticalNavigation";
import { transition } from "../../helpers/config";

const Landing = ({ slideInfo, pageControl, content, props }) => {
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
          {content?.name}
        </motion.h1>
      </div>
    </div>
  );
};

export default Landing;

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import useListenSwipe from "../../helpers/useListenSwipe";
import useVerticalNavigation from "./useVerticalNavigation";
import { transition } from "../../helpers/config";
import useRandomTextAnimation from "../../helpers/useRandomTextAnimation";

const Landing = ({ slideInfo, pageControl, content }) => {
  const { setWorkSubPage } = pageControl;
  const { hasFinished, title } = useRandomTextAnimation(content?.name, 500);
  const hasRendered = useRef(false);

  const fontSize = () => {
    let height;
    if (content?.name.join("").split("").length > 14) {
      height = 90 / content?.name.join("").split("").length;
    } else {
      height = 6.4;
    }
    return height;
  };

  useVerticalNavigation(pageControl);

  useEffect(() => {
    hasRendered.current = true;
  }, []);

  useEffect(() => {
    setWorkSubPage("landing");
  }, [setWorkSubPage]);

  const refHasRenderd = useRef(false);

  useEffect(() => {
    console.log(refHasRenderd.current);
    refHasRenderd.current = true;
  }, [refHasRenderd]);

  //////
  const { onTouchStart, onTouchMove, onTouchEnd, sticky } = useListenSwipe();

  /////////

  useEffect(() => {
    hasFinished && document.documentElement.style.setProperty("--aang", "0px");
  }, [hasFinished]);

  const renderTitle = () => {
    const text = title.split("").map((char, i) => {
      return (
        <h1
          key={i}
          style={{
            fontSize: `${fontSize()}vw`,
            height: `${fontSize()}vw`,
            color: hasFinished ? "white" : "#999",
          }}
        >
          {char}
        </h1>
      );
    });

    return text;
  };
  //////////

  const render = () => {
    // console.log(`landing rendered`);
    return (
      <>
        <motion.div
          className="work__transition-overlay"
          style={{ backgroundColor: "#666" }}
          initial={!refHasRenderd.current ? { y: "0vh" } : {}}
          animate={refHasRenderd.current ? { y: "-100vh" } : {}}
          exit={!refHasRenderd.current ? { y: "0vh" } : {}}
          transition={{ duration: 0.7 }}
        />
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
              style={{
                backgroundImage: `url(${content?.images.landing})`,
                filter: hasFinished && "blur(2rem)",
              }}
            />
            <div className="work__landing__overlay" />
            <motion.div
              className="work__landing__title-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // exit={{ filter: "blur(2rem)" }}
              // transition={
              //   refHasRenderd.current
              //     ? { duration: transition.default, delay: 0 }
              //     : { duration: transition.default, delay: 0.5 }
              // }
              transition={{ delay: 0.6 }}
            >
              {/* <useRandomTextAnimation text={content?.name} />
               */}
              {renderTitle()}
            </motion.div>
          </div>
        </div>{" "}
      </>
    );
  };

  return render();
};

export default Landing;

import React, { useEffect, useContext, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import { PageContext } from "../../../App";
import useListenSwipe from "../../helpers/useListenSwipe";
import useVerticalNavigation from "./useVerticalNavigation";
import { transition } from "../../helpers/config";
import useRandomTextAnimation from "../../helpers/useRandomTextAnimation";
import usePreloader from "../../helpers/usePreloader";

const Landing = ({ slideInfo, data }) => {
  const { page, theme } = useContext(PageContext);
  const { pageData, theme: dataTheme } = data;

  const { loading, Loading } = usePreloader([pageData.landing]);
  const { hasFinished, title } = useRandomTextAnimation(
    data?.name,
    500,
    loading
  );
  useVerticalNavigation();

  const fontSize = () => {
    let height;
    if (data?.name.join("").split("").length > 14) {
      height = 90 / data?.name.join("").split("").length;
    } else {
      height = 6.4;
    }
    return height;
  };

  useEffect(() => {
    theme.setTheme({
      color: dataTheme.color,
      subColor: dataTheme.subColor,
    });
  }, []);

  useEffect(() => {
    page.setWorkSubPage("landing");
  }, [page.setWorkSubPage]);

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
    const Content = (
      <motion.div
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
        key="workLandingContent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="work__landing">
          <div
            className="work__landing__img"
            style={{
              backgroundImage: `url(${pageData?.landing})`,
              filter: hasFinished && "blur(2rem)",
            }}
          />
          <div className="work__landing__overlay" />
          <motion.div
            className="work__landing__title-box"
            key="workLandingTitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {renderTitle()}
          </motion.div>
        </div>
      </motion.div>
    );
    return <AnimatePresence>{loading ? Loading : Content}</AnimatePresence>;
  };

  return render();
};

export default Landing;

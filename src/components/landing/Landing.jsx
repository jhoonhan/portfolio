import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { transition } from "../helpers/config";

import LandingArt from "./LandingArt";
import name2 from "../../assests/image/name2.svg";
import MiddleLine from "../helpers/MiddleLine";
import useTextAnimation from "./useTextAnimation";

const textShadow = "0 0 calc(min(10vh, 10vw)) rgba(255,255,255,0.7)";

const Landing = ({ pageControl, refHome, props }) => {
  const { title, titleStyle } = useTextAnimation("joehan", 1000);
  const [artOverlay, setArtOverlay] = useState(0);
  const [allMatch, setAllMatch] = useState(false);

  useEffect(() => {
    pageControl.setCurPage("home");
    pageControl.setTheme({ color: "dark" });
    pageControl.setCursor({ show: true, type: "move" });

    return () => {
      pageControl.setCursor({ show: false });
    };
  }, []);

  useEffect(() => {
    if (titleStyle.every((el) => el === true)) {
      setArtOverlay(0.7);
      setAllMatch(true);
    } else {
      setArtOverlay(0);
      setAllMatch(false);
    }
  }, [titleStyle]);

  const renderFooter = () => {
    return (
      <div
        className="landing__footer"
        style={
          pageControl.curPage !== "home"
            ? { transform: "translateX(100vw)" }
            : {}
        }
      >
        <MiddleLine orientation="horizontal" />

        <h3 style={{ fontWeight: 300 }}>visual artist & web developer</h3>
      </div>
    );
  };

  const renderCenterInfo = () => {
    const hardTitleFormat = title.slice(0, 3);
    const hardTitleFormat2 = title.slice(3, 6);
    const titleStylized = hardTitleFormat.split("").map((char, i) => {
      return (
        <h1
          key={`titleStylized${i}`}
          style={{
            color: titleStyle[i] ? "white" : "#666",
            opacity: titleStyle[i] ? 1 : 0.5,
            textShadow: allMatch ? textShadow : "none",
          }}
          // className={titleStyle[i] ? "fadetext" : ""}
        >
          {char}
        </h1>
      );
    });

    const titleStylized2 = hardTitleFormat2.split("").map((char, i) => {
      return (
        <h1
          key={`titleStylized2${i}`}
          style={{
            color: titleStyle[i + 3] ? "white" : "#666",
            opacity: titleStyle[i + 3] ? 1 : 0.5,
            textShadow: allMatch ? textShadow : "none",
          }}
          // className={titleStyle[i] ? "fadetext" : ""}
        >
          {char}
        </h1>
      );
    });

    const render = () => {
      return (
        <motion.div
          className="landing__center-info"
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="landing__center-name">
            <div className="name">{titleStylized}</div>
            <div className="name">{titleStylized2}</div>
          </div>
          {/* <div className="landing__center-subtitle">
            <h2>I make beautiful things</h2>
          </div> */}
        </motion.div>
      );
    };

    return render();
  };

  const render = () => {
    return (
      <motion.section
        className="landing__container"
        key="landing__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LandingArt
          curPage={pageControl.curPage}
          artOverlay={artOverlay}
          allMatch={allMatch}
        />
        <div ref={refHome} className="landing__info container">
          {renderCenterInfo()}

          {renderFooter()}
        </div>
      </motion.section>
    );
  };

  return render();
};

export default Landing;

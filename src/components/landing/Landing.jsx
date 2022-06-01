import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LandingArt from "./LandingArt";
import name2 from "../../assests/image/name2.svg";
import MiddleLine from "../helpers/MiddleLine";
import useTextAnimation from "./useTextAnimation";

const Landing = ({ pageControl, refHome, props }) => {
  const { title, titleStyle } = useTextAnimation("joehan", 0);
  const [artOverlay, setArtOverlay] = useState(0);

  useEffect(() => {
    pageControl.setCurPage("home");
  }, [props.match.path]);

  useEffect(() => {
    if (titleStyle.every((el) => el === true)) {
      console.log(`omg`);
      setArtOverlay(0.7);
    } else {
      setArtOverlay(0);
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
          key={i}
          style={{
            color: titleStyle[i] ? "white" : "#666",
            opacity: titleStyle[i] ? 1 : 0.5,
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
          key={i}
          style={{
            color: titleStyle[i + 3] ? "white" : "#666",
            opacity: titleStyle[i + 3] ? 1 : 0.5,
          }}
          // className={titleStyle[i] ? "fadetext" : ""}
        >
          {char}
        </h1>
      );
    });

    return (
      <div className="landing__center-info">
        <div className="landing__center-name">{titleStylized}</div>
        <div className="landing__center-name">{titleStylized2}</div>
      </div>
    );
  };
  const render = () => {
    return (
      <motion.section
        className="landing__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <LandingArt curPage={pageControl.curPage} artOverlay={artOverlay} />
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

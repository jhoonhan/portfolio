import React, { useEffect } from "react";
import { motion } from "framer-motion";
import LandingArt from "./LandingArt";
import name2 from "../../assests/image/name2.svg";
import MiddleLine from "../helpers/MiddleLine";
import useTextAnimation from "./useTextAnimation";

const Landing = ({ pageControl, refHome, props }) => {
  const { hasFinished, title } = useTextAnimation("joehan", 500);

  useEffect(() => {
    pageControl.setCurPage("home");
  }, [props.match.path]);

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
    return (
      <div className="landing__center-info">
        {/* <svg viewBox="0 0 500 500" className="lname lname--center">
          <use href={`${name2}#center`}></use>
        </svg> */}
        {title}
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
        <LandingArt curPage={pageControl.curPage} />
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

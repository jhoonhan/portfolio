import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LandingArt from "./LandingArt";
import name2 from "../../assests/image/name2.svg";
import MiddleLine from "../helpers/MiddleLine";
import useTextAnimation from "./useTextAnimation";

const Landing = ({ pageControl, refHome, props }) => {
  const { title, titleStyle } = useTextAnimation("joehan", 0);
  const [artBlur, setArtBlur] = useState(0);

  useEffect(() => {
    pageControl.setCurPage("home");
  }, [props.match.path]);

  useEffect(() => {
    if (titleStyle.every((el) => el === true)) {
      console.log(`omg`);
      setArtBlur(50);
    } else {
      setArtBlur(0);
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
    const titleStylized = title.split("").map((char, i) => {
      return (
        <h1
          key={i}
          style={{ color: titleStyle[i] ? "white" : "#666" }}
          // className={titleStyle[i] ? "fadetext" : ""}
        >
          {char}
        </h1>
      );
    });

    return <div className="landing__center-info">{titleStylized}</div>;
  };
  const render = () => {
    return (
      <motion.section
        className="landing__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <LandingArt curPage={pageControl.curPage} blur={artBlur} />
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

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Landing = ({ slideImgStyle, pageControl, content, props }) => {
  // useEffect(() => {
  //   console.log(`Landing mounted`);
  //   return () => {
  //     console.log(`Landing unmounted`);
  //   };
  // }, []);

  useEffect(() => {
    pageControl.setWorkSubPage("workLanding");
  }, [props.match.path]);

  return (
    <motion.div
      key="landing"
      initial={{ x: window.innerWidth }}
      animate={{ x: 0 }}
      exit={{ x: -window.innerWidth }}
      transition={{ duration: 1 }}
    >
      <div className="work__content" style={slideImgStyle}>
        <div className="gallery-landing">
          <div
            className="gallery-landing__img"
            style={{ backgroundImage: `url(${content?.images.landing})` }}
          ></div>
          <div className="gallery-landing__overlay"></div>
          <h1>{content?.name}</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;

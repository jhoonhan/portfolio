import React from "react";
import { motion } from "framer-motion";
import AboutImg from "./AboutImg";
import { transition } from "../helpers/config";

const AboutSlide = ({ imgs, style, setActiveSlide, slideNumber }) => {
  const slide = imgs.map((img, i) => {
    return <AboutImg img={img} key={i} />;
  });

  // const animate = {
  //   hidden: { y: -window.innerHeight },
  //   show: {
  //     y: 0,
  //     transition: { duration: transition.default, type: "spring" },
  //   },
  // };
  const animate = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: transition.default, type: "spring" },
    },
  };

  return (
    <motion.div
      className="about__slide-column"
      onMouseOver={setActiveSlide}
      style={style}
      variants={animate}
    >
      <>{slide}</>
    </motion.div>
  );
};

export default AboutSlide;

import React from "react";
import Cursor from "../Cursor";
import AboutImg from "./AboutImg";

const AboutSlide = ({ imgs, style, setActiveSlide, slideNumber }) => {
  const slide = imgs.map((img, i) => {
    return <AboutImg img={img} key={i} />;
  });

  return (
    <div
      className="about__slide-column"
      onMouseOver={setActiveSlide}
      style={style}
    >
      {slide}
    </div>
  );
};

export default AboutSlide;

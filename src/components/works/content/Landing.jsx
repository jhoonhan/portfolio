import React, { useEffect, useState } from "react";

const Landing = ({ slideInfo, pageControl, content, props }) => {
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
    <div className="work__content" style={slideInfo.slideImgStyle}>
      <div className="gallery-landing">
        <div
          className="gallery-landing__img"
          style={{ backgroundImage: `url(${content?.images.landing})` }}
        ></div>
        <div className="gallery-landing__overlay"></div>
        <h1>{content?.name}</h1>
      </div>
    </div>
  );
};

export default Landing;

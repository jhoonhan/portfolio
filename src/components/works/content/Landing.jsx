import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import useListenSwipe from "../../helpers/useListenSwipe";

const Landing = ({ slideInfo, pageControl, content, props }) => {
  const { onTouchStart, onTouchMove, onTouchEnd, stickySlide } =
    useListenSwipe();

  useEffect(() => {
    pageControl.setWorkSubPage("workLanding");
  }, [props.match.path]);

  return (
    <div
      className="work__content"
      style={
        isMobile
          ? { transform: `translateX(${-stickySlide}px)` }
          : slideInfo.slideImgStyle
      }
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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

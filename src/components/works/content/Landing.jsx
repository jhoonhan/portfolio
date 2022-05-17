import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import useListenSwipe from "../../helpers/useListenSwipe";
import useVerticalNavigation from "./useVerticalNavigation";

const Landing = ({ slideInfo, pageControl, content, props }) => {
  const { setWorkSubPage } = pageControl;
  useVerticalNavigation(pageControl);

  useEffect(() => {
    setWorkSubPage("landing");
  }, [setWorkSubPage]);

  //////
  const { onTouchStart, onTouchMove, onTouchEnd, sticky } = useListenSwipe();

  /////////
  return (
    <div
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

import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import useListenSwipe from "../../helpers/useListenSwipe";
import history from "../../../history";

const Landing = ({ slideInfo, pageControl, content, props }) => {
  useEffect(() => {
    pageControl.setWorkSubPage("landing");
  }, [props.match.path]);

  //////
  const { onTouchStart, onTouchMove, onTouchEnd, sticky } = useListenSwipe();

  // useEffect(() => {
  //   if (pageControl.touch.action.top) {
  //     console.log(`aaang top`);
  //     const i = pageControl.urls.workPage.indexOf(pageControl.workPage);
  //     console.log(i);
  //     if (pageControl.urls.workPage[i + 1]) {
  //       history.push(
  //         `/works/${pageControl.urls.workPage[i + 1]}/${
  //           pageControl.urls.workSubPage[0]
  //         }`
  //       );
  //     }
  //   }
  //   if (pageControl.touch.action.bottom) {
  //     console.log(`aaang bottom`);
  //   }
  // }, [pageControl.touch.action]);

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

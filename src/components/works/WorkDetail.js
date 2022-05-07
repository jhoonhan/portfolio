import React, { useRef, useEffect, useState } from "react";

import Slide from "./Slide";
import useGalleryHoriScroll from "./useGalleryHoriScroll";
import DesktopSVG from "../../assests/image/projects/DesktopSVG";
import MobileSVG from "../../assests/image/projects/MobileSVG";

const WorkDetail = ({ slideImgStyle, pageControl, images }) => {
  const refCont = useRef(null);
  const refSlides = useGalleryHoriScroll(pageControl);

  const render = () => {
    return (
      <div ref={refCont} className="work__content" style={slideImgStyle}>
        <div
          ref={refSlides}
          className="work__detail-container"
          // style={{ paddingLeft: "calc((100vw - 127.5vh)/2)" }}
        >
          <div
            className="detail__img-container"
            // style={{ transform: `translateX(-${slide}px)` }}
            style={{ paddingRight: "10vw" }}
          >
            <DesktopSVG img={images?.slideImages[2]} />
            <DesktopSVG img={images?.slideImages[1]} />
            {/* <Slide img={images?.slideImages[0]} /> */}
            <Slide img={images?.slideImages[1]} />
            <Slide img={images?.slideImages[2]} />
          </div>
        </div>
      </div>
    );
  };

  return render();
};

export default WorkDetail;

import React, { useRef, useEffect, useState } from "react";

import Slide from "./Slide";
import useGalleryHoriScroll from "./useGalleryHoriScroll";

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
            style={{ paddingLeft: "calc(5vw + 10rem" }}
          >
            <Slide img={images?.slideImages[0]} />
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

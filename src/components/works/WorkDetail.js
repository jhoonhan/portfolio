import React, { useRef, useEffect, useState } from "react";
import img1 from "../../assests/image/projects/sushiRepublic/img1.jpg";
import img2 from "../../assests/image/projects/sushiRepublic/img2.jpg";
import desktops from "../../assests/image/projects/sushiRepublic/desktops.jpg";
import Slide from "./Slide";
import useGalleryHoriScroll from "./useGalleryHoriScroll";

const WorkDetail = ({ slideImgStyle, pageControl }) => {
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
            <Slide img={img1} />
            <Slide img={img2} />
            <Slide img={desktops} />
          </div>
        </div>
      </div>
    );
  };

  return render();
};

export default WorkDetail;

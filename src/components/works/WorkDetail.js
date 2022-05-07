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
            style={{ padding: " 0 10vw 0 calc(5vw + 10rem)" }}
          >
            {/* <DesktopSVG img={images?.slideImages[2]} />
            <DesktopSVG img={images?.slideImages[1]} />
            <MobileSVG img={images?.slideImages[1]} />
            <MobileSVG img={images?.slideImages[0]} />
            <MobileSVG img={images?.slideImages[2]} /> */}
            <Slide
              type="component"
              data={<DesktopSVG img={images?.slideImages[0]} />}
              img={images?.slideImages[1]}
            />
            <Slide
              type="component"
              data={<DesktopSVG img={images?.slideImages[1]} />}
              img={images?.slideImages[1]}
            />
            <Slide
              type="component"
              data={<MobileSVG img={images?.slideImages[2]} />}
              img={images?.slideImages[1]}
            />
            <Slide
              type="component"
              data={<MobileSVG img={images?.slideImages[3]} />}
              img={images?.slideImages[1]}
            />
            <Slide
              type="component"
              data={<MobileSVG img={images?.slideImages[4]} />}
              img={images?.slideImages[1]}
            />

            <Slide type="image" img={images?.slideImages[5]} />
            <Slide type="image" img={images?.slideImages[6]} />
          </div>
        </div>
      </div>
    );
  };

  return render();
};

export default WorkDetail;

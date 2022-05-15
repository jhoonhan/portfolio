import React, { useRef, useEffect, useState } from "react";

import Slide from "../Slide";
import useGalleryHoriScroll from "../useGalleryHoriScroll";
import DesktopSVG from "../../../assests/image/projects/DesktopSVG";
import MobileSVG from "../../../assests/image/projects/MobileSVG";

const Gallery = ({ slideInfo, pageControl, images, props }) => {
  // useEffect(() => {
  //   console.log(`workDetail mounted`);
  //   return () => {
  //     console.log(`workDetail unmounted`);
  //   };
  // }, []);

  useEffect(() => {
    pageControl.setWorkSubPage("gallery");
  }, [props.match.path]);

  const refCont = useRef(null);
  const refSlides = useGalleryHoriScroll(pageControl);

  const renderComponentSlidesDesktop = images?.slideImages.desktop.map(
    (img, i) => (
      <React.Fragment key={i}>
        <Slide
          type="component"
          data={<DesktopSVG img={images?.slideImages.desktop[i]} />}
        />
      </React.Fragment>
    )
  );

  const renderComponentSlidesMobile = images?.slideImages.mobile.map(
    (img, i) => (
      <React.Fragment key={i}>
        <Slide
          type="component"
          data={<MobileSVG img={images?.slideImages.mobile[i]} />}
        />
      </React.Fragment>
    )
  );

  const render = () => {
    return (
      <div
        ref={refCont}
        className="work__content"
        style={slideInfo.slideImgStyle}
      >
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
            {renderComponentSlidesDesktop}
            {renderComponentSlidesMobile}

            {/* <Slide type="image" img={images?.slideImages[5]} />
            <Slide type="image" img={images?.slideImages[6]} /> */}
          </div>
        </div>
      </div>
    );
  };

  return render();
};

export default Gallery;
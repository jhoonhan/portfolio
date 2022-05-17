import React, { useRef, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import useListenSwipe from "../../helpers/useListenSwipe";

import Slide from "../Slide";
import useGalleryHoriScroll from "../useGalleryHoriScroll";
import DesktopSVG from "../../../assests/image/projects/DesktopSVG";
import MobileSVG from "../../../assests/image/projects/MobileSVG";

const Gallery = ({ slideInfo, pageControl, images, props }) => {
  const { onTouchStart, onTouchMove, onTouchEnd, sticky } = useListenSwipe();

  useEffect(() => {
    pageControl.setWorkSubPage("gallery");
  }, []);

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
        style={
          isMobile
            ? {
                transform: `translateX(${-sticky.x}px)`,
              }
            : slideInfo.slideImgStyle
        }
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={refSlides}
          className="work__detail-container"
          // style={{ paddingLeft: "calc((100vw - 127.5vh)/2)" }}
        >
          <div className="detail__img-container">
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

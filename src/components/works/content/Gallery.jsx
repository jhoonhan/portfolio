import React, { useRef, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import useListenSwipe from "../../helpers/useListenSwipe";

import Slide from "../Slide";
import useGalleryHoriScroll from "../useGalleryHoriScroll";
import DesktopSVG from "../../../assests/image/projects/DesktopSVG";
import MobileSVG from "../../../assests/image/projects/MobileSVG";

const Gallery = ({ slideInfo, pageControl, content }) => {
  const { onTouchStart, onTouchMove, onTouchEnd, sticky } = useListenSwipe();
  const { images, videos, overviewVisual } = content;

  useEffect(() => {
    pageControl.setWorkSubPage("gallery");
  }, []);

  const refCont = useRef(null);
  const refSlides = useGalleryHoriScroll(pageControl);

  const renderSlidesDesktop = images?.slideImages.desktop.map((img, i) => (
    <React.Fragment key={i}>
      <Slide
        type="component"
        data={<DesktopSVG data={images?.slideImages.desktop[i]} type="image" />}
      />
    </React.Fragment>
  ));

  const renderSlidesMobile = images?.slideImages.mobile.map((img, i) => (
    <React.Fragment key={i}>
      <Slide
        type="component"
        data={<MobileSVG data={images?.slideImages.mobile[i]} type="image" />}
      />
    </React.Fragment>
  ));

  const renderSlidesDesktopVideo = videos?.slideVideos.desktop.map(
    (video, i) => (
      <React.Fragment key={i}>
        <Slide
          type="component"
          data={<DesktopSVG type="video" data={video} />}
        />
      </React.Fragment>
    )
  );
  const renderSlidesMobileVideo = videos?.slideVideos.mobile.map((video, i) => (
    <React.Fragment key={i}>
      <Slide type="component" data={<MobileSVG type="video" data={video} />} />
    </React.Fragment>
  ));

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
            {/* {renderSlides()} */}
            {renderSlidesDesktopVideo}
            {renderSlidesMobileVideo}
            {renderSlidesDesktop}
            {renderSlidesMobile}
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

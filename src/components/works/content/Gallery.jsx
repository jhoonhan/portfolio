import React, { useRef, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import useListenSwipe from "../../helpers/useListenSwipe";

import Slide from "../Slide";
import useGalleryHoriScroll from "../useGalleryHoriScroll";
import DesktopSVG from "../../../assests/image/projects/DesktopSVG";
import MobileSVG from "../../../assests/image/projects/MobileSVG";

const Gallery = ({
  slideInfo,
  pageControl,
  images,
  videos,
  isVideo,
  props,
}) => {
  const { onTouchStart, onTouchMove, onTouchEnd, sticky } = useListenSwipe();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    return () => {
      document.documentElement.setAttribute("data-theme", "dark");
    };
  }, []);

  useEffect(() => {
    pageControl.setWorkSubPage("gallery");
    console.log(videos);
  }, []);

  const refCont = useRef(null);
  const refSlides = useGalleryHoriScroll(pageControl);

  const renderSlidesDesktop = images?.slideImages.desktop.map((img, i) => (
    <React.Fragment key={i}>
      <Slide
        type="component"
        data={
          <DesktopSVG isVideo={isVideo} img={images?.slideImages.desktop[i]} />
        }
      />
    </React.Fragment>
  ));

  const renderSlidesMobile = images?.slideImages.mobile.map((img, i) => (
    <React.Fragment key={i}>
      <Slide
        type="component"
        data={<MobileSVG img={images?.slideImages.mobile[i]} />}
      />
    </React.Fragment>
  ));

  const renderSlidesDesktopVideo = videos?.slideVideos.map((video, i) => (
    <React.Fragment key={i}>
      <Slide
        type="component"
        data={<DesktopSVG isVideo={isVideo} video={video} />}
      />
    </React.Fragment>
  ));

  const renderSlides = () => {
    if (isVideo) {
      return renderSlidesDesktopVideo;
    }
    if (!isVideo) {
      return (
        <>
          {renderSlidesDesktop}
          {renderSlidesMobile}
        </>
      );
    }
  };

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
            {renderSlides()}

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

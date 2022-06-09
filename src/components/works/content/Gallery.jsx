import React, { useRef, useEffect, useContext } from "react";
import { isMobile } from "react-device-detect";
import { AnimatePresence } from "framer-motion";
import { PageContext } from "../../../App";

import useListenSwipe from "../../helpers/useListenSwipe";
import usePreloader from "../../helpers/usePreloader";

import Slide from "../Slide";
import useGalleryHoriScroll from "../hooks/useGalleryHoriScroll";
import DesktopSVG from "../../helpers/DesktopSVG";
import MobileSVG from "../../helpers/MobileSVG";

const Gallery = ({ slideInfo, data }) => {
  const { page } = useContext(PageContext);
  const { onTouchStart, onTouchMove, onTouchEnd, sticky } = useListenSwipe();
  const { pageData } = data;
  const { loading, Loading } = usePreloader(pageData.gallery.loadData);

  useEffect(() => {
    page.setWorkSubPage("gallery");
  }, []);

  const refCont = useRef(null);
  const { elRef: refSlides } = useGalleryHoriScroll(loading);

  const renderSlidesDesktop = pageData?.gallery.images.desktop.map((img, i) => (
    <React.Fragment key={i}>
      <Slide type="component" data={<DesktopSVG data={img} type="image" />} />
    </React.Fragment>
  ));

  const renderSlidesMobile = pageData?.gallery.images.mobile.map((img, i) => (
    <React.Fragment key={i}>
      <Slide type="component" data={<MobileSVG data={img} type="image" />} />
    </React.Fragment>
  ));

  const renderSlidesDesktopVideo = pageData?.gallery.videos.desktop.map(
    (video, i) => (
      <React.Fragment key={i}>
        <Slide
          type="component"
          data={<DesktopSVG data={video} type="video" />}
        />
      </React.Fragment>
    )
  );
  const renderSlidesMobileVideo = pageData?.gallery.videos.mobile.map(
    (video, i) => (
      <React.Fragment key={i}>
        <Slide
          type="component"
          data={<MobileSVG data={video} type="video" />}
        />
      </React.Fragment>
    )
  );

  const render = () => {
    const Content = (
      <AnimatePresence>
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
            style={{ opacity: loading && 0 }}
          >
            <div className="detail__img-container">
              {renderSlidesDesktopVideo}
              {renderSlidesMobileVideo}
              {renderSlidesDesktop}
              {renderSlidesMobile}
            </div>
          </div>
        </div>
      </AnimatePresence>
    );

    return <AnimatePresence>{loading ? Loading : Content}</AnimatePresence>;
    // return <AnimatePresence>{Content}</AnimatePresence>;
  };

  return render();
};

export default Gallery;

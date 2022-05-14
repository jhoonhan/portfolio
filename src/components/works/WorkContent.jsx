import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import WorkPictureContainer from "./WorkPictureContainer";
import Gallery from "./content/Gallery";
import useSlideStyle from "./useSlideStyle";
import DesktopSVG from "../../assests/image/projects/DesktopSVG";
import useIntersectionObserve from "../helpers/useIntersectionObserve";
import Landing from "./content/Landing";
import Overview from "./content/Overview";

const WorkContent = ({
  refEl,
  pageControl,
  content,
  backgroundStyle,
  noOverview,
}) => {
  const { slideImgStyle } = useSlideStyle(pageControl, refEl);

  const refIntersect = useRef(null);

  const isIntersecting = useIntersectionObserve(refIntersect, 0.8);

  const render = () => {
    return (
      <div ref={refEl} className="work__container" style={backgroundStyle}>
        <AnimatePresence>
          {pageControl.workSubPage === "workLanding" && (
            <Landing slideImgStyle={slideImgStyle} content={content} />
          )}
          {/* {pageControl.workSubPage === "overview" && (
            <Overview
              slideImgStyle={slideImgStyle}
              content={content}
              noOverview={noOverview}
            />
          )}
          {pageControl.workSubPage === "gallery" && (
            <Gallery
              slideImgStyle={slideImgStyle}
              pageControl={pageControl}
              images={content?.images}
            />
          )} */}
        </AnimatePresence>
      </div>
    );
  };
  return render();
};

export default WorkContent;

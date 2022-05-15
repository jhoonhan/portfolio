import React, { useRef, useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

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
  props,
}) => {
  const { slideImgStyle } = useSlideStyle(pageControl, refEl);

  const refIntersect = useRef(null);

  const location = useLocation();

  const isIntersecting = useIntersectionObserve(refIntersect, 0.8);

  useEffect(() => {
    pageControl.setWorkPage(props.match.path.split("/")[2]);
  }, [props.match.path]);

  const render = () => {
    return (
      <div ref={refEl} className="work__container" style={backgroundStyle}>
        <AnimatePresence exitBeforeEnter>
          {/* {pageControl.workSubPage === "workLanding" && (
            <Landing slideImgStyle={slideImgStyle} content={content} />
          )}
          {pageControl.workSubPage === "overview" && (
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
          <Switch location={location} key={location.pathname}>
            <Route
              path={`/works/${content.path}/landing`}
              exact
              render={(props) => (
                <Landing
                  slideImgStyle={slideImgStyle}
                  pageControl={pageControl}
                  content={content}
                  props={props}
                />
              )}
            />

            <Route
              path={`/works/${content.path}/overview`}
              exact
              render={(props) => (
                <Overview
                  slideImgStyle={slideImgStyle}
                  pageControl={pageControl}
                  content={content}
                  noOverview={noOverview}
                  props={props}
                />
              )}
            />

            <Route
              path={`/works/${content.path}/gallery`}
              exact
              render={(props) => (
                <Gallery
                  slideImgStyle={slideImgStyle}
                  pageControl={pageControl}
                  images={content?.images}
                  props={props}
                />
              )}
            />
          </Switch>
        </AnimatePresence>
      </div>
    );
  };
  return render();
};

export default WorkContent;

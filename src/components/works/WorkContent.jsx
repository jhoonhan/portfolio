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
  useEffect(() => {
    pageControl.setWorkPage(props.match.path.split("/")[2]);
  }, [props.match.path]);
  const slideInfo = useSlideStyle(pageControl, refEl);
  const [slideAnimationStyle, setSlideAnimationStyle] = useState("up");
  const [direction, setDirection] = useState("up");

  const refIntersect = useRef(null);

  const location = useLocation();

  const isIntersecting = useIntersectionObserve(refIntersect, 0.8);

  useEffect(() => {
    if (slideInfo.slide < 0)
      setSlideAnimationStyle({
        initial: { x: -window.innerWidth },
        animate: { x: 0 },
        exit: { x: window.innerWidth },
      });
    if (slideInfo.slide > 0)
      setSlideAnimationStyle({
        initial: { x: window.innerWidth },
        animate: { x: 0 },
        exit: { x: -window.innerWidth },
      });
  }, [slideInfo.slide]);

  // const variants = {
  //   enter: (direction) => {
  //     return {
  //       x: direction > 0 ? -1000 : 1000,
  //       opacity: 0,
  //     };
  //   },
  //   center: {
  //     zIndex: 1,
  //     x: 0,
  //     opacity: 1,
  //   },
  //   exit: (direction) => {
  //     return {
  //       x: direction > 0 ? 1000 : -1000,
  //       opacity: 0,
  //     };
  //   },
  // };

  const render = () => {
    return (
      <div ref={refEl} className="work__container" style={backgroundStyle}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route
              path={`/works/${content.path}/landing`}
              exact
              render={(props) => (
                <motion.div
                  key="landing"
                  // variants={variants}
                  initial={slideAnimationStyle.initial}
                  animate={slideAnimationStyle.animate}
                  exit={slideAnimationStyle.exit}
                  transition={{ duration: 1 }}
                >
                  <Landing
                    slideInfo={slideInfo}
                    pageControl={pageControl}
                    content={content}
                    props={props}
                  />
                </motion.div>
              )}
            />

            <Route
              path={`/works/${content.path}/overview`}
              exact
              render={(props) => (
                <motion.div
                  key="overview"
                  // variants={variants}
                  initial={slideAnimationStyle.initial}
                  animate={slideAnimationStyle.animate}
                  exit={slideAnimationStyle.exit}
                  transition={{ duration: 1 }}
                >
                  <Overview
                    slideInfo={slideInfo}
                    pageControl={pageControl}
                    content={content}
                    noOverview={noOverview}
                    props={props}
                  />
                </motion.div>
              )}
            />

            <Route
              path={`/works/${content.path}/gallery`}
              exact
              render={(props) => (
                <motion.div
                  key="gallery"
                  // variants={variants}
                  initial={slideAnimationStyle.initial}
                  animate={slideAnimationStyle.animate}
                  exit={slideAnimationStyle.exit}
                  transition={{ duration: 1 }}
                >
                  <Gallery
                    slideInfo={slideInfo}
                    pageControl={pageControl}
                    images={content?.images}
                    props={props}
                  />
                </motion.div>
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

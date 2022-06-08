import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { transition } from "../helpers/config";
import { PageContext } from "../../App";

import Gallery from "./content/Gallery";
import useSlideStyle from "./useSlideStyle";
import DesktopSVG from "../helpers/DesktopSVG";
import useIntersectionObserve from "../helpers/useIntersectionObserve";
import Landing from "./content/Landing";
import Overview from "./content/Overview";

const WorkContent = ({
  refEl,
  data,
  backgroundStyle,
  noOverview,
  props,
  isVideo,
}) => {
  const { page } = useContext(PageContext);

  useEffect(() => {
    page.setWorkPage(props.match.path.split("/")[2]);
  }, [props.match.path]);

  const slideInfo = useSlideStyle(refEl);
  const [slideAnimationStyle, setSlideAnimationStyle] = useState({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: transition.default },
  });

  useEffect(() => {
    if (slideInfo.slide < 0)
      setSlideAnimationStyle({
        initial: { x: -window.innerWidth, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: window.innerWidth, opacity: 0 },
        transition: { duration: transition.default },
      });
    if (slideInfo.slide > 0)
      setSlideAnimationStyle({
        initial: { x: window.innerWidth, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: -window.innerWidth, opacity: 0 },
        transition: { duration: transition.default },
      });
  }, [slideInfo.slide]);

  useEffect(() => {
    if (slideInfo.slide === 0) {
      setSlideAnimationStyle({
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: transition.default },
      });
    }
  }, [page.workSubPage]);

  const render = () => {
    // console.log(`workContent rendered`);
    return (
      <div
        ref={refEl}
        className="work__container"
        style={{
          ...backgroundStyle,
        }}
      >
        {/* <div ref={refEl} className="work__container"> */}
        {/* {renderContent()} */}
        <Route
          path={`/${page.curPage}/${data.path}/landing`}
          exact
          render={(props) => (
            <motion.div
              key="landing"
              initial={slideAnimationStyle.initial}
              animate={slideAnimationStyle.animate}
              exit={slideAnimationStyle.exit}
              transition={slideAnimationStyle.transition}
              className="container"
            >
              <Landing slideInfo={slideInfo} data={data} props={props} />
            </motion.div>
          )}
        />

        <Route
          path={`/works/${data.path}/overview`}
          exact
          render={(props) => (
            <motion.div
              key="overview"
              // variants={variants}
              initial={slideAnimationStyle.initial}
              animate={slideAnimationStyle.animate}
              exit={slideAnimationStyle.exit}
              transition={slideAnimationStyle.transition}
              className="container"
            >
              <Overview
                props={props}
                slideInfo={slideInfo}
                data={data}
                noOverview={noOverview}
                isVideo={isVideo}
              />
            </motion.div>
          )}
        />

        <Route
          path={`/works/${data.path}/gallery`}
          exact
          render={(props) => (
            <motion.div
              key="gallery"
              // variants={variants}
              initial={slideAnimationStyle.initial}
              animate={slideAnimationStyle.animate}
              exit={slideAnimationStyle.exit}
              transition={slideAnimationStyle.transition}
              className="container"
            >
              <Gallery slideInfo={slideInfo} data={data} />
            </motion.div>
          )}
        />

        {/* </AnimatePresence> */}
      </div>
    );
  };
  return render();
};

export default WorkContent;

import React, { useRef, useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

import WorkContent from "./WorkContent";
import WorkNav from "./WorkNav";
import useListenSwipe from "../helpers/useListenSwipe";

import SushiRepublic from "./projects/SushiRepublic";
import Danji from "./projects/Danji";
import SalvationArmy from "./projects/SalvationArmy";

const Works = ({ refs, pageControl, props }) => {
  // const { activeSubPageStyle } = useSubPageStyle(pageControl);

  const refEl1 = useRef(null);
  const refEl2 = useRef(null);
  const refEl3 = useRef(null);
  const refEl4 = useRef(null);
  const refEl5 = useRef(null);
  const workRefs = { refEl1, refEl2, refEl3, refEl4, refEl5 };
  const { swipe, onTouchStart, onTouchMove, onTouchEnd, distance } =
    useListenSwipe();

  useEffect(() => {
    pageControl.setCurPage(props.match.path.slice(1));
  }, [props.match.path]);

  useEffect(() => {
    console.log(pageControl.workPage);
  }, [pageControl.workPage]);

  const render = () => {
    return (
      <div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ type: "spring", duration: 0.5 }}
      >
        <section
          ref={refs.refWorks}
          className="works__container container"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          // style={activeSubPageStyle}
        >
          {/* <AnimatePresence exitBeforeEnter> */}
          {/* <Switch location={location} key={location.pathname}> */}
          <Route
            path="/works/sushi-republic"
            render={(props) => (
              <SushiRepublic
                refEl={refEl1}
                pageControl={pageControl}
                props={props}
              />
            )}
          />

          <Route
            path="/works/danji"
            render={(props) => (
              <Danji refEl={refEl2} pageControl={pageControl} props={props} />
            )}
          />

          <Route
            path="/works/salvation-army"
            render={(props) => (
              <SalvationArmy
                refEl={refEl3}
                pageControl={pageControl}
                props={props}
              />
            )}
          />

          <Route
            path="/works/haans-cleaner"
            render={(props) => (
              <WorkContent
                refEl={refEl4}
                pageControl={pageControl}
                props={props}
              />
            )}
          />

          <Route
            path="/works/this-is-bullshit"
            render={(props) => (
              <WorkContent
                refEl={refEl5}
                pageControl={pageControl}
                props={props}
              />
            )}
          />
          {/* </AnimatePresence> */}
        </section>
        <WorkNav pageControl={pageControl} />
      </div>
    );
  };

  return render();
};

export default Works;

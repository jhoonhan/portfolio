import React, { useRef, useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import history from "../../history";

import WorkContent from "./WorkContent";
import WorkNav from "./WorkNav";
import useListenSwipe from "../helpers/useListenSwipe";

import SushiRepublic from "./projects/SushiRepublic";
import Danji from "./projects/Danji";
import SalvationArmy from "./projects/SalvationArmy";

const Works = ({ refs, pageControl, props }) => {
  const swipeFn = {
    fnRight: () => {
      if (pageControl.workSubPage === "workLanding") return;
      if (pageControl.workSubPage === "overview")
        history.push(`/works/${pageControl.workPage}/landing`);
      if (pageControl.workSubPage === "gallery")
        history.push(`/works/${pageControl.workPage}/overview`);
    },
    fnLeft: () => {
      if (pageControl.workSubPage === "workLanding")
        history.push(`/works/${pageControl.workPage}/overview`);
      if (pageControl.workSubPage === "overview")
        history.push(`/works/${pageControl.workPage}/gallery`);
      if (pageControl.workSubPage === "gallery") return;
    },
  };

  const refEl1 = useRef(null);
  const refEl2 = useRef(null);
  const refEl3 = useRef(null);
  const refEl4 = useRef(null);
  const refEl5 = useRef(null);
  const { onTouchStart, onTouchMove, onTouchEnd, swipeAction } =
    useListenSwipe(swipeFn);

  useEffect(() => {
    pageControl.setCurPage(props.match.path.slice(1));
  }, [props.match.path]);

  const render = () => {
    return (
      <>
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
      </>
    );
  };

  return render();
};

export default Works;

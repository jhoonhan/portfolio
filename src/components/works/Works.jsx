import React, { useRef, useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import WorkNav from "./WorkNav";
import Cursor from "../Cursor";

import SushiRepublic from "./projects/SushiRepublic";
import Danji from "./projects/Danji";
import SalvationArmy from "./projects/SalvationArmy";
import HaansCleaner from "./projects/HaansCleaner";
import ThisIsBullshit from "./projects/ThisIsBullshit";

const Works = ({ refs, pageControl, props, match }) => {
  const location = useLocation();
  const { setCurPage } = pageControl;

  const refEl1 = useRef(null);
  const refEl2 = useRef(null);
  const refEl3 = useRef(null);
  const refEl4 = useRef(null);
  const refEl5 = useRef(null);

  useEffect(() => {
    setCurPage(props.match.path.slice(1));
  }, []);

  const render = () => {
    return (
      <>
        <section
          ref={refs.refWorks}
          className="works__container container"
          // onMouseEnter={() => pageControl.setShowCursor(true)}
          // onMouseLeave={() => pageControl.setShowCursor(false)}
        >
          <motion.div
            className="work__transition-overlay"
            style={{
              backgroundColor: "#666",
              // display: refHasRenderd && "none",
            }}
            initial={{ y: "0vh" }}
            animate={{ y: "-100vh" }}
            exit={{ y: "0vh" }}
            transition={{ duration: 0.7 }}
          />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname.split("/")[3]}>
              <Route
                path={`${props.match.path}/sushi-republic`}
                render={(props) => (
                  <SushiRepublic
                    refEl={refEl1}
                    pageControl={pageControl}
                    props={props}
                  />
                )}
              />

              <Route
                path={`${props.match.path}/danji`}
                render={(props) => (
                  <Danji
                    refEl={refEl2}
                    pageControl={pageControl}
                    props={props}
                  />
                )}
              />

              <Route
                path={`${props.match.path}/salvation-army`}
                render={(props) => (
                  <SalvationArmy
                    refEl={refEl3}
                    pageControl={pageControl}
                    props={props}
                  />
                )}
              />

              <Route
                path={`${props.match.path}/haans-cleaner`}
                render={(props) => (
                  <HaansCleaner
                    refEl={refEl4}
                    pageControl={pageControl}
                    props={props}
                  />
                )}
              />

              <Route
                path={`${props.match.path}/this-is-bullshit`}
                render={(props) => (
                  <ThisIsBullshit
                    refEl={refEl5}
                    pageControl={pageControl}
                    props={props}
                  />
                )}
              />
            </Switch>
          </AnimatePresence>
        </section>
        <WorkNav pageControl={pageControl} />
      </>
    );
  };

  return render();
};

export default Works;

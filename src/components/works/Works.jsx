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
import KoreanLife from "./projects/KoreanLife";
import LittleTokyo from "./projects/LittleTokyo";
import JkAerostart from "./projects/JkAerostart";

const Works = ({ refs, pageControl, props, match }) => {
  const location = useLocation();
  const [persistedImgs, setPersistedImgs] = useState(null);
  const { setCurPage } = pageControl;

  useEffect(() => {
    setCurPage(props.match.path.slice(1));
  }, []);

  useEffect(() => {
    // console.log(persistedImgs);
  }, [persistedImgs]);

  const render = () => {
    return (
      <>
        <motion.section
          ref={refs.refWorks}
          className="works__container container"
          // onMouseEnter={() => pageControl.setShowCursor(true)}
          // onMouseLeave={() => pageControl.setShowCursor(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname.split("/")[3]}>
              <Route
                path={`${props.match.path}/sushi-republic`}
                render={(props) => (
                  <SushiRepublic
                    pageControl={pageControl}
                    props={props}
                    preload={{ persistedImgs, setPersistedImgs }}
                  />
                )}
              />
              <Route
                path={`${props.match.path}/danji`}
                render={(props) => (
                  <Danji pageControl={pageControl} props={props} />
                )}
              />
              <Route
                path={`${props.match.path}/salvation-army`}
                render={(props) => (
                  <SalvationArmy pageControl={pageControl} props={props} />
                )}
              />
              <Route
                path={`${props.match.path}/haans-cleaner`}
                render={(props) => (
                  <HaansCleaner pageControl={pageControl} props={props} />
                )}
              />
              <Route
                path={`${props.match.path}/this-is-bullshit`}
                render={(props) => (
                  <ThisIsBullshit pageControl={pageControl} props={props} />
                )}
              />
              <Route
                path={`${props.match.path}/korean-life`}
                render={(props) => (
                  <KoreanLife pageControl={pageControl} props={props} />
                )}
              />
              <Route
                path={`${props.match.path}/little-tokyo`}
                render={(props) => (
                  <LittleTokyo pageControl={pageControl} props={props} />
                )}
              />
              <Route
                path={`${props.match.path}/jk-aerostart`}
                render={(props) => (
                  <JkAerostart pageControl={pageControl} props={props} />
                )}
              />
            </Switch>
          </AnimatePresence>
        </motion.section>
        <WorkNav pageControl={pageControl} />
      </>
    );
  };

  return render();
};

export default Works;

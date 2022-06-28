import React, { useEffect, useContext } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import WorkNav from "./WorkNav";
import { PageContext } from "../../App";

import WorksLanding from "./WorksLanding";
import SushiRepublic from "./projects/SushiRepublic";
import Danji from "./projects/Danji";
import SalvationArmy from "./projects/SalvationArmy";
import HaansCleaner from "./projects/HaansCleaner";
import ThisIsBullshit from "./projects/ThisIsBullshit";
import KoreanLife from "./projects/KoreanLife";
import LittleTokyo from "./projects/LittleTokyo";
import JkAerostart from "./projects/JkAerostart";
import NotFound from "../NotFound";

const Works = ({ refs, props }) => {
  const location = useLocation();

  const { page, style } = useContext(PageContext);

  useEffect(() => {
    page.setCurPage(props.match.path.slice(1));
    style.setCursor({ show: true, type: "scroll" });
    return () => {
      style.setCursor({ show: false });
    };
  }, []);

  const render = () => {
    return (
      <>
        <motion.section
          ref={refs.refWorks}
          className="works__container container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname.split("/")[3]}>
              <Route
                path={`${props.match.path}/landing`}
                render={(props) => <WorksLanding props={props} />}
              />
              <Route
                path={`${props.match.path}/sushi-republic`}
                render={(props) => <SushiRepublic props={props} />}
              />
              <Route
                path={`${props.match.path}/danji`}
                render={(props) => <Danji props={props} />}
              />
              <Route
                path={`${props.match.path}/salvation-army`}
                render={(props) => <SalvationArmy props={props} />}
              />
              <Route
                path={`${props.match.path}/haans-cleaner`}
                render={(props) => <HaansCleaner props={props} />}
              />
              <Route
                path={`${props.match.path}/this-is-bullshit`}
                render={(props) => <ThisIsBullshit props={props} />}
              />
              <Route
                path={`${props.match.path}/korean-life`}
                render={(props) => <KoreanLife props={props} />}
              />
              <Route
                path={`${props.match.path}/little-tokyo`}
                render={(props) => <LittleTokyo props={props} />}
              />
              <Route
                path={`${props.match.path}/jk-aerostart`}
                render={(props) => <JkAerostart props={props} />}
              />
              <Route render={() => <NotFound />} />
            </Switch>
          </AnimatePresence>
        </motion.section>
        <WorkNav />
      </>
    );
  };

  return render();
};

export default Works;

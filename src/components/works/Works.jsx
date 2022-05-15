import React, { useRef, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { motion } from "framer-motion";

import WorkContent from "./WorkContent";
import useSubPageStyle from "./useSubPageStyle";
import WorkNav from "./WorkNav";

import { sushiRepublic } from "../../assests/data/sushiRepublic";
import { danji } from "../../assests/data/danji";
import { salvationArmy } from "../../assests/data/salvationArmy";

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
          // style={activeSubPageStyle}
        >
          <Switch>
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
          </Switch>
        </section>
        <WorkNav pageControl={pageControl} workRefs={workRefs} />
      </div>
    );
  };

  return render();
};

export default Works;

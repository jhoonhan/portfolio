import React, { useRef, useEffect } from "react";
import { Route } from "react-router-dom";

import WorkContent from "./WorkContent";
import WorkNav from "./WorkNav";
import Cursor from "../Cursor";

import SushiRepublic from "./projects/SushiRepublic";
import Danji from "./projects/Danji";
import SalvationArmy from "./projects/SalvationArmy";

const Works = ({ refs, pageControl, props }) => {
  const { setCurPage } = pageControl;

  const refEl1 = useRef(null);
  const refEl2 = useRef(null);
  const refEl3 = useRef(null);
  const refEl4 = useRef(null);
  const refEl5 = useRef(null);

  useEffect(() => {
    setCurPage(props.match.path.slice(1));
  }, [setCurPage, pageControl, props.match.path]);

  const render = () => {
    // console.log(`works rendered`);
    return (
      <>
        <section
          ref={refs.refWorks}
          className="works__container container"
          // onMouseEnter={() => pageControl.setShowCursor(true)}
          // onMouseLeave={() => pageControl.setShowCursor(false)}
        >
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

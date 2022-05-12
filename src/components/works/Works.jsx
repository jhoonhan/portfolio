import React, { useRef, useEffect, useState } from "react";

import WorkContent from "./WorkContent";
import useSubPageStyle from "./useSubPageStyle";
import WorkNav from "./WorkNav";

import { sushiRepublic } from "../../assests/data/sushiRepublic";
import { danji } from "../../assests/data/danji";
import { salvationArmy } from "../../assests/data/salvationArmy";

const Works = ({ refs, pageControl }) => {
  const { activeSubPageStyle } = useSubPageStyle(pageControl);

  const refEl1 = useRef(null);
  const refEl2 = useRef(null);
  const refEl3 = useRef(null);
  const refEl4 = useRef(null);
  const refEl5 = useRef(null);
  const workRefs = { refEl1, refEl2, refEl3, refEl4, refEl5 };

  const backgroundStyleEl1 = {
    background:
      "linear-gradient(60deg, rgba(25,25,25, 1) 0%, rgba(25,35,35, 1) 33%, rgba(50, 50, 50, 1) 45%, rgba(150, 37, 37, 1) 100%  )",
  };
  const backgroundStyleEl2 = {
    background:
      "linear-gradient(60deg, rgba(118,19,19,1) 0%,rgba(118,19,19,1) 33%,rgba(150, 50, 50, 1) 45%, rgba(220,115,45,1) 100%)",
  };

  const backgroundStyleEl3 = {
    background:
      "linear-gradient(60deg, rgba(2,0,36,1) 0%,rgba(2,0,36,1) 23%, rgba(118,19,19,1) 100%)",
  };

  const render = () => {
    return (
      <>
        <section
          ref={refs.refWorks}
          className="works__container container"
          style={activeSubPageStyle}
        >
          <WorkContent
            refEl={refEl1}
            pageControl={pageControl}
            content={sushiRepublic}
            backgroundStyle={backgroundStyleEl1}
          />
          <WorkContent
            refEl={refEl2}
            pageControl={pageControl}
            content={danji}
            backgroundStyle={backgroundStyleEl2}
          />
          <WorkContent
            refEl={refEl3}
            pageControl={pageControl}
            content={salvationArmy}
            backgroundStyle={backgroundStyleEl3}
            noOverview={true}
          />
          <WorkContent refEl={refEl4} pageControl={pageControl} />
          <WorkContent refEl={refEl5} pageControl={pageControl} />
        </section>
        <WorkNav pageControl={pageControl} workRefs={workRefs} />
      </>
    );
  };

  return render();
};

export default Works;

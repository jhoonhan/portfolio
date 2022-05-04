import React, { useRef, useEffect, useState } from "react";

import WorkContent from "./WorkContent";
import useSubPageStyle from "./useSubPageStyle";
import WorkNav from "./WorkNav";

const Works = ({ refs, pageControl }) => {
  const { activeSubPageStyle } = useSubPageStyle(pageControl);

  const refEl1 = useRef(null);
  const refEl2 = useRef(null);
  const refEl3 = useRef(null);
  const refEl4 = useRef(null);
  const refEl5 = useRef(null);
  const workRefs = { refEl1, refEl2, refEl3, refEl4, refEl5 };

  const render = () => {
    console.log(`Work`);

    return (
      <>
        <section
          ref={refs.refWorks}
          className="works__container container"
          style={activeSubPageStyle}
        >
<<<<<<< HEAD
          <WorkContent />
=======
          <WorkContent refEl={refEl1} pageControl={pageControl} />
          <WorkContent refEl={refEl2} pageControl={pageControl} />
          <WorkContent refEl={refEl3} pageControl={pageControl} />
          <WorkContent refEl={refEl4} pageControl={pageControl} />
          <WorkContent refEl={refEl5} pageControl={pageControl} />
>>>>>>> school
        </section>
        <WorkNav pageControl={pageControl} workRefs={workRefs} />
      </>
    );
  };

  return render();
};

export default Works;

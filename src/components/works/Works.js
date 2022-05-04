import React, { useRef, useEffect, useState } from "react";

import WorkContent from "./WorkContent";
import useSubPageStyle from "./useSubPageStyle";
import WorkNav from "./WorkNav";

const Works = ({ refs, pageControl }) => {
  const [workInfoSubPage, setWorkInfoSubPage] = useState("info");
  const { activeSubPageStyle } = useSubPageStyle(workInfoSubPage, pageControl);

  const refEl1 = useRef(null);
  const refEl2 = useRef(null);
  const refEl3 = useRef(null);
  const refEl4 = useRef(null);
  const refEl5 = useRef(null);
  const workRefs = { refEl1, refEl2, refEl3, refEl4, refEl5 };

  const render = () => {
    return (
      <>
        <section
          ref={refs.refWorks}
          className="works__container container"
          style={activeSubPageStyle}
        >
          <WorkContent refEl={refEl1} />
          <WorkContent refEl={refEl2} />
          <WorkContent refEl={refEl3} />
          <WorkContent refEl={refEl4} />
          <WorkContent refEl={refEl5} />
        </section>
        <WorkNav
          pageControl={pageControl}
          workRefs={workRefs}
          workInfoSubPage={workInfoSubPage}
          setWorkInfoSubPage={setWorkInfoSubPage}
        />
      </>
    );
  };

  return render();
};

export default Works;

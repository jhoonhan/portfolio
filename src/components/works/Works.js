import React, { useRef, useEffect } from "react";
import sushi1 from "../../assests/image/3.jpg";
import sushi2 from "../../assests/image/4.jpg";
import sushi3 from "../../assests/image/5.jpg";

import WorkContent from "./WorkContent";

const Works = ({ refWorks, pageControl }) => {
  const ref2 = useRef(null);
  const refA = useRef(null);
  const refB = useRef(null);

  useEffect(() => {
    if (pageControl.subWorkPage === "el1") {
      refA.current.scrollIntoView({ behavior: "smooth" });
    }
    if (pageControl.subWorkPage === "el2") {
      refB.current.scrollIntoView({ behavior: "smooth" });
    }
    if (pageControl.subWorkPage === "el3") {
      console.log(`el 3`);
    }
    if (pageControl.subWorkPage === "el4") {
      console.log(`el 4`);
    }
    if (pageControl.subWorkPage === "el5") {
      console.log(`el 5`);
    }
  }, [pageControl.subWorkPage]);

  return (
    <section ref={refWorks} className="works__container container">
      <WorkContent refaa={refA} ref2={ref2} pageControl={pageControl} />
      <WorkContent refaa={refB} ref2={ref2} pageControl={pageControl} />
    </section>
  );
};

export default Works;

import React, { useRef } from "react";
import sushi1 from "../../assests/image/3.jpg";
import sushi2 from "../../assests/image/4.jpg";
import sushi3 from "../../assests/image/5.jpg";

import WorkContent from "./WorkContent";

const Works = ({ refWorks }) => {
  const ref2 = useRef(null);
  const refA = useRef(null);

  return (
    <section ref={refWorks} className="works__container container">
      <WorkContent ref2={ref2} />
      <WorkContent refA={refA} ref2={ref2} />
    </section>
  );
};

export default Works;

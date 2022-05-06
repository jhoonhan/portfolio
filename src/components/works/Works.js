import React, { useRef, useEffect, useState } from "react";

import WorkContent from "./WorkContent";
import useSubPageStyle from "./useSubPageStyle";
import WorkNav from "./WorkNav";
import landing1 from "../../assests/image/projects/sushiRepublic/landing.jpg";
import work1img1 from "../../assests/image/3.jpg";
import work1img2 from "../../assests/image/4.jpg";
import work1img3 from "../../assests/image/5.jpg";
import work1slideImg1 from "../../assests/image/projects/sushiRepublic/img1.jpg";
import work1slideImg2 from "../../assests/image/projects/sushiRepublic/img2.jpg";
import work1slideImg3 from "../../assests/image/projects/sushiRepublic/desktops.jpg";

const Works = ({ refs, pageControl }) => {
  const { activeSubPageStyle } = useSubPageStyle(pageControl);

  const refEl1 = useRef(null);
  const refEl2 = useRef(null);
  const refEl3 = useRef(null);
  const refEl4 = useRef(null);
  const refEl5 = useRef(null);
  const workRefs = { refEl1, refEl2, refEl3, refEl4, refEl5 };

  const content1 = {
    name: "sushi republic",
    description:
      "A microsite showcasing stories of customers of a concept pension provider.",
    role: "senior developer",
    technology: "HTML5, CSS3, SASS, JQUERY",
    liveDemoURL: "https://google.com",
    githubURL: "https://github.com/",
    images: {
      landing: landing1,
      overviewImages: [work1img1, work1img2, work1img3],
      slideImages: [work1slideImg1, work1slideImg2, work1slideImg3],
    },
  };

  const content2 = {
    name: "Danji",
    description:
      "A microsite showcasing stories of customers of a concept pension provider.",
    role: "senior developer",
    technology: "HTML5, CSS3, SASS, JQUERY",
    liveDemoURL: "https://google.com",
    githubURL: "https://github.com/",
    images: {
      landing: landing1,
      overviewImages: [work1img1, work1img2, work1img3],
      slideImages: [work1slideImg1, work1slideImg2, work1slideImg3],
    },
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
            content={content1}
          />
          <WorkContent
            refEl={refEl2}
            pageControl={pageControl}
            content={content2}
          />
          <WorkContent refEl={refEl3} pageControl={pageControl} />
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

import landing from "../../../assests/image/projects/danji/landing.jpg";

import overviewImg0 from "../../../assests/image/projects/danji/overview0.jpg";
import overviewImg1 from "../../../assests/image/projects/danji/overview1.jpg";
import slideImg0 from "../../../assests/image/projects/danji/desktop0.jpg";
import slideImg1 from "../../../assests/image/projects/danji/desktop1.jpg";
import slideImg2 from "../../../assests/image/projects/danji/mobile1.jpg";
import slideImg3 from "../../../assests/image/projects/danji/mobile0.jpg";
import slideImg4 from "../../../assests/image/projects/danji/mobile2.jpg";
import slideImg5 from "../../../assests/image/projects/danji/img0.jpg";
import slideImg6 from "../../../assests/image/projects/danji/img2.jpg";

import React from "react";
import { motion } from "framer-motion";
import WorkContent from "../WorkContent";

const Danji = ({ refEl, pageControl, props }) => {
  const data = {
    name: ["danji"],
    description:
      "A staple Korean restaurant serving the Triad area since 2015.",
    role: "Developer, Designer, Photographer",
    technology: "HTML5, CSS3, SASS, JQUERY",
    liveDemoURL: "https://google.com",
    githubURL: "https://github.com/",
    path: "danji",
    overviewVisual: {
      type: "image",
      orientation: "trifold",
      data: [landing, overviewImg0, overviewImg1],
    },
    images: {
      landing,
      slideImages: {
        desktop: [slideImg0, slideImg1],
        mobile: [slideImg2, slideImg3, slideImg4],
        photo: [slideImg5, slideImg6],
      },
    },
    videos: {
      desktop: { landing: null, slideVideos: [] },
      mobile: {
        landing: null,
        slideVideos: [],
      },
    },
  };
  const backgroundStyle = {
    background:
      "linear-gradient(60deg, rgba(118,19,19,0.7) 0%,rgba(118,19,19,0.7) 33%,rgba(150, 50, 50, 0.7) 45%, rgba(220,115,45,0.7) 100%)",
  };
  return (
    <WorkContent
      refEl={refEl}
      pageControl={pageControl}
      content={data}
      backgroundStyle={backgroundStyle}
      props={props}
      noOverview={false}
      isVideo={false}
    />
  );
};

export default Danji;

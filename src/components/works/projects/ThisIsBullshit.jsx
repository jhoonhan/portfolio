import landing from "../../../assests/image/projects/thisIsBullshit/landing.jpg";

import slideImg0 from "../../../assests/image/projects/thisIsBullshit/desktop0.jpg";
import slideImg1 from "../../../assests/image/projects/thisIsBullshit/desktop1.jpg";
import slideImg2 from "../../../assests/image/projects/thisIsBullshit/desktop2.jpg";

import video0 from "../../../assests/image/projects/thisIsBullshit/video0.mp4";
import video1 from "../../../assests/image/projects/thisIsBullshit/video1.mp4";
import video2 from "../../../assests/image/projects/thisIsBullshit/video2.mp4";
import video3 from "../../../assests/image/projects/thisIsBullshit/video3.mp4";

import React from "react";
import { motion } from "framer-motion";
import WorkContent from "../WorkContent";

const SalvationArmy = ({ refEl, pageControl, props }) => {
  const data = {
    name: ["This Is", " Bullshit"],
    description:
      "A fast and easy bookeeping web application for a charitable organization.",
    role: "Developer, Designer",
    technology: "JavaScript, NodeJS, Express, MongoDB, HTML, CSS",
    liveDemoURL: "https://google.com",
    githubURL: "https://github.com/",
    path: "this-is-bullshit",
    images: {
      landing,
      overviewImages: [slideImg0, slideImg1, slideImg2],
      slideImages: {
        desktop: [slideImg0, slideImg1, slideImg2],
        mobile: [],
        photo: [],
      },
    },
    videos: { landing: video0, slideVideos: [video1, video2, video3] },
  };
  const backgroundStyle = {
    background:
      "linear-gradient(60deg, rgba(2,0,36,0.7) 0%,rgba(2,0,36,0.7) 23%, rgba(118,19,19,0.7) 100%)",
  };
  return (
    <WorkContent
      refEl={refEl}
      pageControl={pageControl}
      content={data}
      backgroundStyle={backgroundStyle}
      props={props}
      noOverview={false}
      isVideo={true}
    />
  );
};

export default SalvationArmy;

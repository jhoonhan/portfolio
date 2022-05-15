import landing from "../../../assests/image/projects/salvationArmy/landing.jpg";

import slideImg0 from "../../../assests/image/projects/salvationArmy/desktop0.jpg";
import slideImg1 from "../../../assests/image/projects/salvationArmy/desktop1.jpg";
import slideImg2 from "../../../assests/image/projects/salvationArmy/desktop2.jpg";

import React from "react";
import { motion } from "framer-motion";
import WorkContent from "../WorkContent";

const SalvationArmy = ({ refEl, pageControl, props }) => {
  const data = {
    name: ["salvation", " army"],
    description:
      "A fast and easy bookeeping web application for a charitable organization.",
    role: "Developer, Designer",
    technology: "ReactJS, JavaScript, NodeJS, Express, MongoDB, HTML, CSS",
    liveDemoURL: "https://google.com",
    githubURL: "https://github.com/",
    path: "salvation-army",
    images: {
      landing,
      overviewImages: [slideImg0, slideImg1, slideImg2],
      slideImages: {
        desktop: [slideImg0, slideImg1, slideImg2],
        mobile: [],
        photo: [],
      },
    },
  };
  const backgroundStyle = {
    background:
      "linear-gradient(60deg, rgba(2,0,36,1) 0%,rgba(2,0,36,1) 23%, rgba(118,19,19,1) 100%)",
  };
  return (
    <WorkContent
      refEl={refEl}
      pageControl={pageControl}
      content={data}
      backgroundStyle={backgroundStyle}
      props={props}
    />
  );
};

export default SalvationArmy;

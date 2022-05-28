import React from "react";
import WorkContent from "../WorkContent";

import landing from "../../../assests/image/projects/salvationArmy/landing.jpg";
import slideImg0 from "../../../assests/image/projects/salvationArmy/desktop0.jpg";
import slideImg1 from "../../../assests/image/projects/salvationArmy/desktop1.jpg";
import slideImg2 from "../../../assests/image/projects/salvationArmy/desktop2.jpg";

const SalvationArmy = ({ refEl, pageControl, props }) => {
  const data = {
    name: ["salvation", " army"],
    description:
      "A fast and easy bookeeping web application for a charitable organization.",
    role: "Full-stack Developer, Web Designer",
    technology: "React, JavaScript, NodeJS, Express, MongoDB, HTML5, CSS3",
    liveDemoURL: "https://salvationarmy-kernersville.netlify.app/",
    githubURL: "https://github.com/jhoonhan/salvationarmy-accounting",
    path: "salvation-army",
    overviewVisual: {
      type: "image",
      orientation: "desktop",
      data: [slideImg0],
    },
    images: {
      landing,
      slideImages: {
        desktop: [slideImg0, slideImg1, slideImg2],
        mobile: [],
        photo: [],
      },
    },
    videos: {
      landing: null,
      slideVideos: {
        desktop: [],
        mobile: [],
      },
    },
    theme: "dark",
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
      noOverview={true}
      isVideo={false}
    />
  );
};

export default SalvationArmy;

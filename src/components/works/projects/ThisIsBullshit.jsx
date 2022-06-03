import React, { useEffect, useRef } from "react";
import WorkContent from "../WorkContent";

import landing from "../../../assests/image/projects/thisIsBullshit/landing.jpg";
import imgM0 from "../../../assests/image/projects/thisIsBullshit/mobile0.jpg";
import imgM1 from "../../../assests/image/projects/thisIsBullshit/mobile1.jpg";
import vidD0 from "../../../assests/image/projects/thisIsBullshit/vidD0.mp4";
import vidD1 from "../../../assests/image/projects/thisIsBullshit/vidD1.mp4";
import vidD4 from "../../../assests/image/projects/thisIsBullshit/vidD4.mp4";

const ThisIsBullshit = ({ pageControl, props }) => {
  const refEl = useRef(null);
  const backgroundStyle = {
    background: "rgba(240, 240, 240, 1)",
  };

  const data = {
    name: ["This Is", " Bullshit"],
    description:
      "An interactive & interdisciplinary artwork using web technology",
    role: "Artist, Full-stack Developer",
    technology: "JavaScript, NodeJS, Express, MongoDB, HTML5, CSS3",
    liveDemoURL: "https://this-is-bullshit.netlify.app/",
    githubURL: "https://github.com/jhoonhan/this-is-bullshit",
    path: "this-is-bullshit",

    pageData: {
      landing,
      overview: {
        loadData: [vidD0],
        type: "video",
        orientation: "desktop",
        data: [vidD0],
      },
      gallery: {
        loadData: [imgM0, imgM1, vidD0, vidD1, vidD4],
        images: {
          desktop: [],
          mobile: [imgM0, imgM1],
          photo: [],
        },
        videos: {
          desktop: [vidD4, vidD1],
          mobile: [],
        },
      },
    },
    theme: { color: "white", subColor: "red", background: backgroundStyle },
  };

  return (
    <WorkContent
      refEl={refEl}
      pageControl={pageControl}
      data={data}
      backgroundStyle={backgroundStyle}
      props={props}
      noOverview={false}
      isVideo={true}
    />
  );
};

export default ThisIsBullshit;

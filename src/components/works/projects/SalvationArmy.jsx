import React, { useEffect, useRef } from "react";
import WorkContent from "../WorkContent";

import landing from "../../../assests/image/projects/salvationArmy/landing.jpg";
import imgD0 from "../../../assests/image/projects/salvationArmy/desktop0.jpg";
import imgD1 from "../../../assests/image/projects/salvationArmy/desktop1.jpg";
import imgD2 from "../../../assests/image/projects/salvationArmy/desktop2.jpg";

const SalvationArmy = ({ pageControl, props }) => {
  const refEl = useRef(null);
  const backgroundStyle = {
    background:
      "linear-gradient(60deg, rgba(2,0,36,0.7) 0%,rgba(2,0,36,0.7) 23%, rgba(118,19,19,0.7) 100%)",
  };

  const data = {
    name: ["salvation", " army"],
    description:
      "A fast and easy bookeeping web application for a charitable organization.",
    role: "Full-stack Developer, Web Designer",
    technology: "React, JavaScript, NodeJS, Express, MongoDB, HTML5, CSS3",
    liveDemoURL: "https://salvationarmy-kernersville.netlify.app/",
    githubURL: "https://github.com/jhoonhan/salvationarmy-accounting",
    path: "salvation-army",

    pageData: {
      landing,
      overview: {
        loadData: [imgD0],
        type: "image",
        orientation: "desktop",
        data: [imgD0],
      },
      gallery: {
        loadData: [imgD0, imgD1, imgD2],
        images: {
          desktop: [imgD0, imgD1, imgD2],
          mobile: [],
          photo: [],
        },
        videos: {
          desktop: [],
          mobile: [],
        },
      },
    },
    theme: { color: "dark", background: backgroundStyle },
  };

  return (
    <WorkContent
      refEl={refEl}
      pageControl={pageControl}
      data={data}
      backgroundStyle={backgroundStyle}
      props={props}
      noOverview={true}
      isVideo={false}
    />
  );
};

export default SalvationArmy;

import React, { useEffect, useRef } from "react";
import WorkContent from "../WorkContent";

import landing from "../../../assests/image/projects/jkAerostart/landing.jpg";
import vidD0 from "../../../assests/image/projects/jkAerostart/videoD0.mp4";
import vidM0 from "../../../assests/image/projects/jkAerostart/videoM0.mp4";
import vidM1 from "../../../assests/image/projects/jkAerostart/videoM1.mp4";

const JkAerostart = ({ pageControl, props }) => {
  const refEl = useRef(null);
  const backgroundStyle = {
    background: "rgba(40, 30, 80, 1)",
  };

  const data = {
    name: ["JK", " Aerostart"],
    description: "A simple static website for an aircraft part export company",
    role: "Web Designer, Graphic Designer",
    technology: "HTML, CSS",
    liveDemoURL: "http://littletokyonc.com/",
    githubURL: "https://github.com/jhoonhan/jk-aerostart",
    path: "jk-aerostart",

    pageData: {
      landing,
      overview: {
        loadData: [vidD0],
        type: "video",
        orientation: "desktop",
        data: [vidD0],
      },
      gallery: {
        loadData: [vidD0, vidM0, vidM1],
        images: {
          desktop: [],
          mobile: [],
          photo: [],
        },
        videos: {
          desktop: [vidD0],
          mobile: [vidM0, vidM1],
        },
      },
    },
    theme: { color: "black", background: backgroundStyle },
  };

  useEffect(() => {
    pageControl.setTheme({ color: "black", subColor: "white" });
  }, []);
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

export default JkAerostart;

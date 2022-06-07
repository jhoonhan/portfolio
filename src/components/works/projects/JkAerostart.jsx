import React, { useEffect, useRef } from "react";
import WorkContent from "../WorkContent";

import landing from "../../../assests/image/projects/jkAerostart/landing.jpg";
import vidD0 from "../../../assests/image/projects/jkAerostart/videoD0.mp4";
import vidM0 from "../../../assests/image/projects/jkAerostart/videoM0.mp4";
import vidM1 from "../../../assests/image/projects/jkAerostart/videoM1.mp4";

const JkAerostart = ({ pageControl, props }) => {
  const refEl = useRef(null);
  const backgroundStyle2 = {
    background: "rgba(40, 30, 80, 1)",
  };
  const backgroundStyle = {
    background:
      "linear-gradient(60deg, rgba(10, 5, 40, 1) 0%, rgba(60, 45, 110, 1) 100%)",
  };

  const data = {
    name: ["JK", " Aerostart"],
    description:
      "A responsive static website for an aircraft parts export company.",
    role: "Web Designer, Graphic Designer",
    technology: "JavaScript, HTML5, CSS3, SASS",
    liveDemoURL: "https://jkaerostart.netlify.app/",
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

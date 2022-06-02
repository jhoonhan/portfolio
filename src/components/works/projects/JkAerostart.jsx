import React, { useEffect, useRef } from "react";
import WorkContent from "../WorkContent";

import landing from "../../../assests/image/projects/jkAerostart/landing.jpg";
import videoD0 from "../../../assests/image/projects/jkAerostart/videoD0.mp4";
import videoM0 from "../../../assests/image/projects/jkAerostart/videoM0.mp4";
import videoM1 from "../../../assests/image/projects/jkAerostart/videoM1.mp4";

const JkAerostart = ({ pageControl, props }) => {
  const refEl = useRef(null);

  const data = {
    name: ["JK", " Aerostart"],
    description: "A simple static website for an aerospace parts company",
    role: "Web Designer, Graphic Designer",
    technology: "HTML, CSS",
    liveDemoURL: "http://littletokyonc.com/",
    githubURL: "https://github.com/jhoonhan/jk-aerostart",
    path: "jk-aerostart",
    overviewVisual: {
      type: "video",
      orientation: "desktop",
      data: [videoD0],
    },
    images: {
      landing,
      slideImages: {
        desktop: [],
        mobile: [],
        photo: [],
      },
    },
    videos: {
      landing: null,
      slideVideos: {
        desktop: [videoD0],
        mobile: [videoM0, videoM1],
      },
    },
    theme: "light",
  };
  const backgroundStyle = {
    background: "rgba(40, 30, 80, 1)",
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    // document.documentElement.setAttribute("data-subtheme", "green");
    return () => {
      // document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.setAttribute("data-subtheme", "dark");
      // pageControl.setShowCursor(false);
    };
  }, []);

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

export default JkAerostart;

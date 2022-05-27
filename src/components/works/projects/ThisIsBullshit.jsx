import landing from "../../../assests/image/projects/thisIsBullshit/landing.jpg";

import slideImg0 from "../../../assests/image/projects/thisIsBullshit/mobile0.jpg";
import slideImg1 from "../../../assests/image/projects/thisIsBullshit/mobile1.jpg";

import video0 from "../../../assests/image/projects/thisIsBullshit/video0.mp4";
import video1 from "../../../assests/image/projects/thisIsBullshit/video1.mp4";
import video2 from "../../../assests/image/projects/thisIsBullshit/video2.mp4";
import video4 from "../../../assests/image/projects/thisIsBullshit/video4.mp4";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import WorkContent from "../WorkContent";

const ThisIsBullshit = ({ refEl, pageControl, props }) => {
  const data = {
    name: ["This Is", " Bullshit"],
    description:
      "A fast and easy bookeeping web application for a charitable organization.",
    role: "Developer, Designer",
    technology: "JavaScript, NodeJS, Express, MongoDB, HTML, CSS",
    liveDemoURL: "https://google.com",
    githubURL: "https://github.com/",
    path: "this-is-bullshit",
    overviewVisual: {
      type: "video",
      orientation: "desktop",
      data: [video0],
    },
    images: {
      landing,
      overviewImages: [slideImg0, slideImg1],
      slideImages: {
        desktop: [],
        mobile: [slideImg0, slideImg1],
        photo: [],
      },
    },
    videos: {
      landing: null,
      slideVideos: {
        desktop: [video4, video1],
        mobile: [],
      },
    },
    theme: "light",
  };
  const backgroundStyle = {
    // background:
    //   "linear-gradient(60deg, rgba(204,204,204,1) 0%,rgba(250,242,242,1) 23%, rgba(255,255,255,1) 100%)",
    background: "rgba(240, 240, 240, 1)",
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    return () => {
      document.documentElement.setAttribute("data-theme", "dark");
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

export default ThisIsBullshit;

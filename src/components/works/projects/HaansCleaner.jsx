import landing from "../../../assests/image/projects/haansCleaner/landing.jpg";
import video0 from "../../../assests/image/projects/haansCleaner/video0-1.mp4";
import video1 from "../../../assests/image/projects/haansCleaner/video1.mp4";
import video2 from "../../../assests/image/projects/haansCleaner/video2.mp4";
import video3 from "../../../assests/image/projects/haansCleaner/video3.mp4";
import video4 from "../../../assests/image/projects/haansCleaner/video4.mp4";

import React, { useEffect } from "react";
import WorkContent from "../WorkContent";

const HaansCleaner = ({ refEl, pageControl, props }) => {
  const data = {
    name: ["Haans", " Cleaner"],
    description:
      "A fast and easy bookeeping web application for a charitable organization.",
    role: "Developer, Designer",
    technology: "JavaScript, NodeJS, Express, MongoDB, HTML, CSS",
    liveDemoURL: "https://google.com",
    githubURL: "https://github.com/",
    path: "haans-cleaner",
    overviewVisual: {
      type: "video",
      orientation: "mobile",
      data: [video0],
    },
    images: {
      landing,
      overviewImages: [],
      slideImages: {
        desktop: [],
        mobile: [],
        photo: [],
      },
    },
    videos: {
      landing: null,
      slideVideos: {
        desktop: [],
        mobile: [video1, video2, video3, video4],
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

export default HaansCleaner;

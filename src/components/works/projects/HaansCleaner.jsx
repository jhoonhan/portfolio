import React, { useEffect, useRef } from "react";
import WorkContent from "../WorkContent";

import landing from "../../../assests/image/projects/haansCleaner/landing.jpg";
import video0 from "../../../assests/image/projects/haansCleaner/video0.mp4";
import video01 from "../../../assests/image/projects/haansCleaner/video0-1.mp4";
import video1 from "../../../assests/image/projects/haansCleaner/video1.mp4";
import video2 from "../../../assests/image/projects/haansCleaner/video2.mp4";
import video3 from "../../../assests/image/projects/haansCleaner/video3.mp4";

const HaansCleaner = ({ pageControl, props }) => {
  const refEl = useRef(null);

  const data = {
    name: ["Haans", " Cleaner"],
    description: "A mobile web application for the new way of dry cleaning.",
    role: "Full-stack Developer, UI/UX Designer",
    technology: "React, Google Maps API, NodeJS, Express, MongoDB, HTML5, CSS3",
    liveDemoURL: "https://google.com",
    githubURL: "https://github.com/",
    path: "haans-cleaner",
    overviewVisual: {
      type: "video",
      orientation: "mobile",
      data: [video01],
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
        mobile: [video0, video1, video2, video3],
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
    document.documentElement.setAttribute("data-subtheme", "light-blue");
    return () => {
      document.documentElement.setAttribute("data-theme", "dark");
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

export default HaansCleaner;

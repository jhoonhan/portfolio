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
  const backgroundStyle = {
    background: "rgba(240, 240, 240, 1)",
  };

  const data = {
    name: ["Haans", " Cleaner"],
    description: "A mobile web application for the new way of dry cleaning.",
    role: "Full-stack Developer, UI/UX Designer",
    technology: "React, Google Maps API, NodeJS, Express, MongoDB, HTML5, CSS3",
    liveDemoURL: "https://google.com",
    githubURL: "https://github.com/",
    path: "haans-cleaner",

    pageData: {
      landing,
      overview: {
        loadData: [video01],
        type: "video",
        orientation: "mobile",
        data: [video01],
      },
      gallery: {
        loadData: [video0, video1, video2, video3],
        images: {
          desktop: [],
          mobile: [],
          photo: [],
        },
        videos: {
          desktop: [],
          mobile: [video0, video1, video2, video3],
        },
      },
    },
    theme: {
      color: "light",
      subColor: "light-blue",
      background: backgroundStyle,
    },
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

export default HaansCleaner;

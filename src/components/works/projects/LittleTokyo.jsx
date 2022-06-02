import React, { useEffect, useRef } from "react";
import WorkContent from "../WorkContent";

import landing from "../../../assests/image/projects/littleTokyo/desktop0.jpg";
import slideImg0 from "../../../assests/image/projects/koreanLife/desktop0.png";
import slideImg1 from "../../../assests/image/projects/koreanLife/desktop1.jpg";
import slideImg2 from "../../../assests/image/projects/koreanLife/desktop2.jpg";
import slideImg3 from "../../../assests/image/projects/koreanLife/mobile0.png";
import slideImg4 from "../../../assests/image/projects/koreanLife/mobile1.jpg";
import slideImg5 from "../../../assests/image/projects/koreanLife/mobile2.jpg";

const LittleTokyo = ({ pageControl, props }) => {
  const refEl = useRef(null);

  const data = {
    name: ["Little", " Tokyo"],
    description: "A local news media focusing on Koreans in the Triangle Area.",
    role: "Web Designer, Graphic Designer, Art Director",
    technology: "Wordpress, PHP, HTML5, CSS3",
    liveDemoURL: "https://this-is-bullshit.netlify.app/",
    githubURL: "https://github.com/jhoonhan/this-is-bullshit",
    path: "little-tokyo",
    overviewVisual: {
      type: "image",
      orientation: "desktop",
      data: [slideImg2],
    },
    images: {
      landing,
      slideImages: {
        desktop: [slideImg0, slideImg1, slideImg2],
        mobile: [slideImg3, slideImg4, slideImg5],
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
    theme: "light",
  };
  const backgroundStyle = {
    background: "rgba(30, 30, 30, 1)",
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

export default LittleTokyo;

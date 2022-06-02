import React, { useEffect, useRef } from "react";
import WorkContent from "../WorkContent";

import landing from "../../../assests/image/projects/littleTokyo/desktop0.jpg";
import desktop0 from "../../../assests/image/projects/littleTokyo/desktop0.jpg";
import desktop1 from "../../../assests/image/projects/littleTokyo/desktop1.jpg";
import desktop2 from "../../../assests/image/projects/littleTokyo/desktop2.jpg";
import photo0 from "../../../assests/image/projects/littleTokyo/photo0.jpg";
import photo1 from "../../../assests/image/projects/littleTokyo/photo1.jpg";
import photo2 from "../../../assests/image/projects/littleTokyo/photo2.jpg";

const LittleTokyo = ({ pageControl, props }) => {
  const refEl = useRef(null);

  const data = {
    name: ["Little", " Tokyo"],
    description:
      "A static website for a local Japanese restaurant built in 2012",
    role: "Web Designer, Graphic Designer, Photographer",
    technology: "HTML, CSS",
    liveDemoURL: "http://littletokyonc.com/",
    githubURL: "https://github.com/jhoonhan/this-is-bullshit",
    path: "little-tokyo",
    overviewVisual: {
      // type: "image",
      // orientation: "trifold",
      // data: [photo0, photo1, photo2],
      type: "image",
      orientation: "desktop",
      data: [desktop1],
    },
    images: {
      landing,
      slideImages: {
        desktop: [desktop0, desktop1, desktop2, photo2, photo1, photo0],
        mobile: [],
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

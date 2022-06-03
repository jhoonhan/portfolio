import React, { useEffect, useRef } from "react";
import WorkContent from "../WorkContent";

import landing from "../../../assests/image/projects/littleTokyo/desktop0.jpg";
import imgD0 from "../../../assests/image/projects/littleTokyo/desktop0.jpg";
import imgD1 from "../../../assests/image/projects/littleTokyo/desktop1.jpg";
import imgD2 from "../../../assests/image/projects/littleTokyo/desktop2.jpg";
import imgP0 from "../../../assests/image/projects/littleTokyo/photo0.jpg";
import imgP1 from "../../../assests/image/projects/littleTokyo/photo1.jpg";
import imgP2 from "../../../assests/image/projects/littleTokyo/photo2.jpg";

const LittleTokyo = ({ pageControl, props }) => {
  const refEl = useRef(null);
  const backgroundStyle = {
    background: "rgba(30, 30, 30, 1)",
  };

  const data = {
    name: ["Little", " Tokyo"],
    description:
      "A static website for a local Japanese restaurant built in 2012",
    role: "Web Designer, Graphic Designer, Photographer",
    technology: "HTML, CSS",
    liveDemoURL: "http://littletokyonc.com/",
    githubURL: "https://github.com/jhoonhan/this-is-bullshit",
    path: "little-tokyo",

    pageData: {
      landing,
      overview: {
        loadData: [imgD1],
        type: "image",
        orientation: "desktop",
        data: [imgD1],
      },
      gallery: {
        loadData: [imgD0, imgD1, imgD2, imgP0, imgP1, imgP2],
        images: {
          desktop: [imgD0, imgD1, imgD2, imgP0, imgP1, imgP2],
          mobile: [],
          photo: [],
        },
        videos: {
          desktop: [],
          mobile: [],
        },
      },
    },
    theme: { color: "black", background: backgroundStyle },
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

export default LittleTokyo;

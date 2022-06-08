import React, { useEffect, useRef, useContext } from "react";
import WorkContent from "../WorkContent";
import { PageContext } from "../../../App";

import landing from "../../../assests/image/projects/littleTokyo/desktop0.jpg";
import imgD0 from "../../../assests/image/projects/littleTokyo/desktop0.jpg";
import imgD1 from "../../../assests/image/projects/littleTokyo/desktop1.jpg";
import imgD2 from "../../../assests/image/projects/littleTokyo/desktop2.jpg";
import imgP0 from "../../../assests/image/projects/littleTokyo/photo0.jpg";
import imgP1 from "../../../assests/image/projects/littleTokyo/photo1.jpg";
import imgP2 from "../../../assests/image/projects/littleTokyo/photo2.jpg";

const LittleTokyo = ({ props }) => {
  const { theme } = useContext(PageContext);

  const refEl = useRef(null);
  const backgroundStyle2 = {
    background: "rgba(30, 30, 30, 1)",
  };
  const backgroundStyle = {
    background:
      "linear-gradient(60deg, rgba(20,20,20, 1) 0%, rgba(50, 50, 50, 0.7) 50%, rgba(150, 0, 0, 0.7) 100%  )",
  };

  const data = {
    name: ["Little", " Tokyo"],
    description:
      "A static website for a local Japanese restaurant built in 2012",
    role: "Web Designer, Graphic Designer, Photographer",
    technology: "HTML, CSS",
    liveDemoURL: "http://littletokyonc.com/",
    githubURL: null,
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

  useEffect(() => {
    theme.setTheme({ color: "black", subColor: "white" });
  }, []);

  return (
    <WorkContent
      refEl={refEl}
      data={data}
      backgroundStyle={backgroundStyle}
      props={props}
      noOverview={false}
      isVideo={true}
    />
  );
};

export default LittleTokyo;

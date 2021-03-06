import React, { useRef, useEffect, useContext } from "react";
import WorkContent from "../WorkContent";
import { PageContext } from "../../../App";

import landing from "../../../assests/image/projects/danji/landing.jpg";
import overviewImg0 from "../../../assests/image/projects/danji/overview0.jpg";
import overviewImg1 from "../../../assests/image/projects/danji/overview1.jpg";
import slideImg0 from "../../../assests/image/projects/danji/desktop0.jpg";
import slideImg1 from "../../../assests/image/projects/danji/desktop1.jpg";
import slideImg2 from "../../../assests/image/projects/danji/mobile1.jpg";
import slideImg3 from "../../../assests/image/projects/danji/mobile0.jpg";
import slideImg4 from "../../../assests/image/projects/danji/mobile2.jpg";

const Danji = ({ props }) => {
  const { theme } = useContext(PageContext);

  const refEl = useRef(null);
  const backgroundStyle = {
    background:
      "linear-gradient(60deg, rgba(118,19,19,0.7) 0%,rgba(118,19,19,0.7) 33%,rgba(150, 50, 50, 0.7) 45%, rgba(220,115,45,0.7) 100%)",
  };

  const data = {
    name: ["danji"],
    description:
      "A resposive website for a local Korean restaurant in the Triad area, NC.",
    role: "Web Developer, Graphic Designer, Photographer",
    technology: "JQUERY, HTML5, CSS3, SASS",
    liveDemoURL: "http://hahnsfinegoods.com/danji/index.html",
    githubURL: "https://github.com/jhoonhan/Danji",
    path: "danji",

    pageData: {
      landing,
      overview: {
        loadData: [landing, overviewImg0, overviewImg1],
        type: "image",
        orientation: "trifold",
        data: [landing, overviewImg0, overviewImg1],
      },
      gallery: {
        loadData: [slideImg0, slideImg1, slideImg2, slideImg3, slideImg4],
        images: {
          desktop: [slideImg0, slideImg1],
          mobile: [slideImg2, slideImg3, slideImg4],
          photo: [],
        },
        videos: {
          desktop: [],
          mobile: [],
        },
      },
    },
    theme: {
      color: "black",
      background: backgroundStyle,
    },
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
      isVideo={false}
    />
  );
};

export default Danji;

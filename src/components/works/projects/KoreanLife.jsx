import React, { useEffect, useRef, useContext } from "react";
import WorkContent from "../WorkContent";
import { PageContext } from "../../../App";

import landing from "../../../assests/image/projects/koreanLife/landing.jpg";
import imgD0 from "../../../assests/image/projects/koreanLife/desktop0.png";
import imgD1 from "../../../assests/image/projects/koreanLife/desktop1.jpg";
import imgD2 from "../../../assests/image/projects/koreanLife/desktop2.jpg";
import imgM0 from "../../../assests/image/projects/koreanLife/mobile0.png";
import imgM1 from "../../../assests/image/projects/koreanLife/mobile1.jpg";
import imgM2 from "../../../assests/image/projects/koreanLife/mobile2.jpg";

const KoreanLife = ({ props }) => {
  const { theme } = useContext(PageContext);

  const refEl = useRef(null);
  const backgroundStyle2 = {
    background: "rgba(240, 240, 240, 1)",
  };
  const backgroundStyle = {
    background:
      "linear-gradient(60deg, rgba(221, 239, 216, 1) 0%, rgba(240, 240, 240, 1) 100%)",
  };

  const data = {
    name: ["Korean", " Life"],
    description:
      "A local news media focusing on Koreans in the Triangle Area, NC.",
    role: "Web Designer, Graphic Designer, Art Director",
    technology: "Wordpress, PHP, HTML5, CSS3, SASS",
    liveDemoURL: "http://koreanlifenews.com/",
    githubURL: null,
    path: "korean-life",

    pageData: {
      landing,
      overview: {
        loadData: [imgD2],
        type: "image",
        orientation: "desktop",
        data: [imgD2],
      },
      gallery: {
        loadData: [imgD0, imgD1, imgD2, imgM0, imgM1, imgM2],
        images: {
          desktop: [imgD0, imgD1, imgD2],
          mobile: [imgM0, imgM1, imgM2],
          photo: [],
        },
        videos: {
          desktop: [],
          mobile: [],
        },
      },
    },
    theme: { color: "white", subColor: "green", background: backgroundStyle },
  };

  useEffect(() => {
    theme.setTheme({ color: "white", subColor: "green" });
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

export default KoreanLife;

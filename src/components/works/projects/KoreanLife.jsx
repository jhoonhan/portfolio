import React, { useEffect, useRef } from "react";
import WorkContent from "../WorkContent";

import landing from "../../../assests/image/projects/koreanLife/landing.jpg";
import imgD0 from "../../../assests/image/projects/koreanLife/desktop0.png";
import imgD1 from "../../../assests/image/projects/koreanLife/desktop1.jpg";
import imgD2 from "../../../assests/image/projects/koreanLife/desktop2.jpg";
import imgM0 from "../../../assests/image/projects/koreanLife/mobile0.png";
import imgM1 from "../../../assests/image/projects/koreanLife/mobile1.jpg";
import imgM2 from "../../../assests/image/projects/koreanLife/mobile2.jpg";

const KoreanLife = ({ pageControl, props }) => {
  const refEl = useRef(null);

  const data = {
    name: ["Korean", " Life"],
    description: "A local news media focusing on Koreans in the Triangle Area.",
    role: "Web Designer, Graphic Designer, Art Director",
    technology: "Wordpress, PHP, HTML5, CSS3",
    liveDemoURL: "https://this-is-bullshit.netlify.app/",
    githubURL: "https://github.com/jhoonhan/this-is-bullshit",
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
    theme: "light",
  };
  const backgroundStyle = {
    // background:
    //   "linear-gradient(60deg, rgba(204,204,204,1) 0%,rgba(250,242,242,1) 23%, rgba(255,255,255,1) 100%)",
    background: "rgba(240, 240, 240, 1)",
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.setAttribute("data-subtheme", "green");
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
      data={data}
      backgroundStyle={backgroundStyle}
      props={props}
      noOverview={false}
      isVideo={true}
    />
  );
};

export default KoreanLife;

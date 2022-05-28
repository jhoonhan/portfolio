import React, { useEffect } from "react";

import landing from "../../../assests/image/projects/sushiRepublic/landing.jpg";
import overviewImg0 from "../../../assests/image/projects/sushiRepublic/overview0.jpg";
import overviewImg1 from "../../../assests/image/projects/sushiRepublic/overview1.jpg";
import overviewImg2 from "../../../assests/image/projects/sushiRepublic/overview2.jpg";
import slideImg0 from "../../../assests/image/projects/sushiRepublic/desktop1.jpg";
import slideImg1 from "../../../assests/image/projects/sushiRepublic/desktop2.jpg";
import slideImg2 from "../../../assests/image/projects/sushiRepublic/mobile1.jpg";
import slideImg3 from "../../../assests/image/projects/sushiRepublic/mobile0.jpg";
import slideImg4 from "../../../assests/image/projects/sushiRepublic/mobile2.jpg";
import slideImg5 from "../../../assests/image/projects/sushiRepublic/img0.jpg";
import slideImg6 from "../../../assests/image/projects/sushiRepublic/img1.jpg";
import WorkContent from "../WorkContent";

const SushiRepublic = ({ refEl, pageControl, props }) => {
  const data = {
    name: ["sushi", " republic"],
    description: "A responsive website for a local fine Japanese restaurant.",
    role: "Web Developer, Graphic designer, photographer",
    technology: "JQUERY, HTML5, CSS3, SASS",
    liveDemoURL: "http://hahnsfinegoods.com/sushi-republic/index.html",
    githubURL: "https://github.com/jhoonhan/sushi-republic",
    path: "sushi-republic",
    overviewVisual: {
      type: "image",
      orientation: "trifold",
      data: [overviewImg0, overviewImg1, overviewImg2],
    },
    images: {
      landing,
      slideImages: {
        desktop: [slideImg0, slideImg1],
        mobile: [slideImg2, slideImg3, slideImg4],
        photo: [slideImg5, slideImg6],
      },
    },
    videos: {
      landing: null,
      slideVideos: {
        desktop: [],
        mobile: [],
      },
    },
    theme: "dark",
  };
  const backgroundStyle = {
    background:
      "linear-gradient(60deg, rgba(25,25,25, 0.7) 0%, rgba(25,35,35, 0.7) 33%, rgba(50, 50, 50, 0.7) 45%, rgba(150, 37, 37, 0.7) 100%  )",
  };
  // const backgroundStyle = {
  //   backgroundColor: "rgba(120, 20, 20, 1)",
  // };

  return (
    <WorkContent
      refEl={refEl}
      pageControl={pageControl}
      content={data}
      backgroundStyle={backgroundStyle}
      props={props}
      noOverview={false}
      isVideo={false}
    />
  );
};

export default SushiRepublic;

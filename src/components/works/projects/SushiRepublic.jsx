import React, { useEffect, useRef, useState, useMemo } from "react";
import { animate, motion } from "framer-motion";
import WorkContent from "../WorkContent";
import usePreloader from "../../helpers/usePreloader";

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
const imagesToPreload = [
  { src: landing, name: "landing" },
  { src: overviewImg0, name: "overviewImg0" },
  { src: overviewImg1, name: "overviewImg1" },
  { src: overviewImg2, name: "overviewImg2" },
  { src: slideImg0, name: "slideImg0" },
  { src: slideImg1, name: "slideImg1" },
  { src: slideImg2, name: "slideImg2" },
  { src: slideImg3, name: "slideImg3" },
  { src: slideImg4, name: "slideImg4" },
  { src: slideImg5, name: "slideImg5" },
  { src: slideImg6, name: "slideImg6" },
];

const SushiRepublic = ({ pageControl, props, preload }) => {
  const { persistedImgs, setPersistedImgs } = preload;
  const { fetched, progress } = usePreloader(
    persistedImgs ? null : imagesToPreload,
    persistedImgs,
    setPersistedImgs
  );

  // useEffect(() => {
  //   console.log(persistedImgs?.landing);
  // }, [persistedImgs]);

  // useEffect(() => {
  //   setPersistedImgs(preloadedImgs);
  // }, [preloadedImgs]);

  const refEl = useRef(null);

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
      data: [
        persistedImgs?.overviewImg0,
        persistedImgs?.overviewImg1,
        persistedImgs?.overviewImg2,
      ],
    },
    images: {
      landing: persistedImgs?.landing,
      slideImages: {
        desktop: [persistedImgs?.slideImg0, persistedImgs?.slideImg1],
        mobile: [
          persistedImgs?.slideImg2,
          persistedImgs?.slideImg3,
          persistedImgs?.slideImg4,
        ],
        photo: [persistedImgs?.slideImg5, persistedImgs?.slideImg6],
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

  const render = () => {
    if (!fetched)
      return (
        <div>
          <h1>{progress}%</h1>
        </div>
      );

    return (
      <WorkContent
        refEl={refEl}
        pageControl={pageControl}
        data={data}
        backgroundStyle={backgroundStyle}
        props={props}
        noOverview={false}
        isVideo={false}
      />
    );
  };

  return render();
};

export default SushiRepublic;

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import useListenSwipe from "../../helpers/useListenSwipe";

import DesktopSVG from "../../../assests/image/projects/DesktopSVG";
import WorkPictureContainer from "../WorkPictureContainer";

const Overview = ({
  slideInfo,
  pageControl,
  content,
  noOverview,
  props,
  video,
}) => {
  const { onTouchStart, onTouchMove, onTouchEnd, sticky } = useListenSwipe();

  const refIntersect = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    return () => {
      document.documentElement.setAttribute("data-theme", "dark");
    };
  }, []);

  useEffect(() => {
    pageControl.setWorkSubPage("overview");
  }, [props.match.path]);

  const animateBrowser = {
    container: {
      hidden: { x: window.innerWidth / 2 },
      show: {
        x: 0,
        transition: {
          type: "spring",
          staggerChildren: 0.2,
        },
      },
    },
    item: {
      hidden: { x: window.innerWidth / 2 },
      show: { x: 0 },
    },
  };
  const animateMobile = {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          type: "spring",
          staggerChildren: 0.3,
        },
      },
    },
    item: {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    },
  };

  const renderInfo = () => {
    return (
      <motion.div
        className="works__info-container"
        variants={isMobile ? animateMobile.container : animateBrowser.container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="works__title"
          variants={isMobile ? animateMobile.item : animateBrowser.item}
          style={
            content?.name.length > 1 ? { justifyContent: "flex-start" } : ""
          }
        >
          <span>{content?.name[0]}</span>
          <span>{content?.name[1]}</span>
        </motion.div>

        <motion.div
          className="works__subtitle"
          variants={isMobile ? animateMobile.item : animateBrowser.item}
        >
          <h2>{content?.description}</h2>
        </motion.div>

        <div className="works__info__detail">
          <motion.div
            className="grid--row--2 detail-item"
            variants={isMobile ? animateMobile.item : animateBrowser.item}
          >
            <div className="detail-item__title">
              <h3>Role</h3>
              <div></div>
            </div>

            <p>{content?.role}</p>
          </motion.div>

          <motion.div
            className="grid--row--2 detail-item"
            variants={isMobile ? animateMobile.item : animateBrowser.item}
          >
            <div className="detail-item__title">
              <h3>Technology</h3>
              <div></div>
            </div>

            <p>{content?.technology}</p>
          </motion.div>

          <motion.div
            className="grid--column--2 detail-item"
            style={{ marginTop: "1rem", gap: "2rem" }}
            variants={isMobile ? animateMobile.item : animateBrowser.item}
          >
            <a href={content?.liveDemoURL} className="button">
              Live Demo
            </a>
            <a href={content?.githubURL} className="button">
              Github
            </a>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const renderOverviewVisual = () => {
    if (noOverview && !video) {
      return (
        <DesktopSVG
          img={content.images.overviewImages[0]}
          customClass="overview"
          type={video ? "video" : "image"}
        />
      );
    }

    if (!noOverview && !video) {
      return <WorkPictureContainer images={content?.images} />;
    }

    if (!noOverview && video) {
      return (
        <DesktopSVG
          video={content.videos[0]}
          customClass="overview"
          type={video ? "video" : "image"}
        />
      );
    }
  };

  return (
    <div
      ref={refIntersect}
      className="work__content padded"
      style={
        isMobile
          ? {
              transform: `translateX(${-sticky.x}px) translateY(${-sticky.y}px)`,
            }
          : slideInfo.slideImgStyle
      }
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {renderOverviewVisual()}

      {renderInfo()}
    </div>
  );
};

export default Overview;

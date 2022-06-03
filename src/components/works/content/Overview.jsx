import React, { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import useListenSwipe from "../../helpers/useListenSwipe";
import usePreloader from "../../helpers/usePreloader";

import DesktopSVG from "../../helpers/DesktopSVG";
import MobileSVG from "../../helpers/MobileSVG";
import WorkPictureContainer from "../WorkPictureContainer";

const Overview = ({ slideInfo, pageControl, data }) => {
  const { onTouchStart, onTouchMove, onTouchEnd, sticky } = useListenSwipe();
  const { pageData } = data;
  const { loading, Loading } = usePreloader(pageData.overview.loadData);

  const refIntersect = useRef(null);

  useEffect(() => {
    pageControl.setWorkSubPage("overview");
  }, []);

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
          style={data?.name.length > 1 ? { justifyContent: "flex-start" } : ""}
        >
          <span>{data?.name[0]}</span>
          <span>{data?.name[1]}</span>
        </motion.div>

        <motion.div
          className="works__subtitle"
          variants={isMobile ? animateMobile.item : animateBrowser.item}
        >
          <h2>{data?.description}</h2>
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

            <p>{data?.role}</p>
          </motion.div>

          <motion.div
            className="grid--row--2 detail-item"
            variants={isMobile ? animateMobile.item : animateBrowser.item}
          >
            <div className="detail-item__title">
              <h3>Technology</h3>
              <div></div>
            </div>

            <p>{data?.technology}</p>
          </motion.div>

          <motion.div
            className="grid--column--2 detail-item"
            style={{ marginTop: "1rem", gap: "2rem" }}
            variants={isMobile ? animateMobile.item : animateBrowser.item}
          >
            {data?.liveDemoURL ? (
              <a
                href={data?.liveDemoURL}
                className="button"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo
              </a>
            ) : (
              {}
            )}
            {data?.liveDemoURL ? (
              <a
                href={data?.githubURL}
                className="button"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
            ) : (
              {}
            )}
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const renderOverviewVisual = () => {
    if (pageData?.overview.orientation === "trifold") {
      return <WorkPictureContainer images={pageData?.overview.data} />;
    }

    if (pageData?.overview.orientation === "desktop") {
      return (
        <DesktopSVG
          data={pageData?.overview.data[0]}
          type={pageData?.overview.type}
          customClass="overview"
        />
      );
    }
    if (pageData?.overview.orientation === "mobile") {
      return (
        <MobileSVG
          data={pageData?.overview.data[0]}
          type={pageData?.overview.type}
          customClass="overview"
        />
      );
    }
  };

  const render = () => {
    // return (
    //   <AnimatePresence>
    //     {loading && Loading}
    //     <div
    //       ref={refIntersect}
    //       className="work__content padded overview"
    //       style={
    //         isMobile
    //           ? {
    //               transform: `translateX(${-sticky.x}px) translateY(${-sticky.y}px)`,
    //             }
    //           : slideInfo.slideImgStyle
    //       }
    //       onTouchStart={onTouchStart}
    //       onTouchMove={onTouchMove}
    //       onTouchEnd={onTouchEnd}
    //     >
    //       <div className="work__content--overview">
    //         {renderOverviewVisual()}

    //         {renderInfo()}
    //       </div>
    //     </div>
    //   </AnimatePresence>
    // );
    const Content = (
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
        <div className="work__content--overview">
          {renderOverviewVisual()}
          {renderInfo()}
        </div>
      </div>
    );

    return <AnimatePresence>{loading ? Loading : Content}</AnimatePresence>;
  };

  return render();
};

export default Overview;

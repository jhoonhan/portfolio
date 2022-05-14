import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import WorkPictureContainer from "./WorkPictureContainer";
import WorkDetail from "./WorkDetail";
import useSlideStyle from "./useSlideStyle";
import DesktopSVG from "../../assests/image/projects/DesktopSVG";
import useIntersectionObserve from "../helpers/useIntersectionObserve";

const WorkContent = ({
  refEl,
  pageControl,
  content,
  backgroundStyle,
  noOverview,
}) => {
  const { slideImgStyle } = useSlideStyle(pageControl, refEl);

  const refIntersect = useRef(null);

  const isIntersecting = useIntersectionObserve(refIntersect, 0.8);

  useEffect(() => {
    console.log(`mounted`);
    return () => console.log(`unmounted`);
  }, []);

  const renderInfo = () => {
    return (
      <div className="works__info-container">
        <div className="works__title">
          <span>{content?.name[0]}</span>
          <span>{content?.name[1]}</span>
        </div>
        <div className="works__subtitle">
          <h2>{content?.description}</h2>
        </div>
        <div className="works__info__detail">
          <div className="grid--row--2 detail-item">
            <div className="detail-item__title">
              <h3>Role</h3>
              <div></div>
            </div>

            <p>{content?.role}</p>
          </div>

          <div className="grid--row--2 detail-item">
            <div className="detail-item__title">
              <h3>Technology</h3>
              <div></div>
            </div>

            <p>{content?.technology}</p>
          </div>

          <div
            className="grid--column--2 detail-item"
            style={{ marginTop: "1rem", gap: "2rem" }}
          >
            <a href={content?.liveDemoURL} className="button">
              Live Demo
            </a>
            <a href={content?.githubURL} className="button">
              Github
            </a>
          </div>
        </div>
      </div>
    );
  };

  const renderLanding = () => {
    return (
      <div className="work__content" style={slideImgStyle}>
        <div className="gallery-landing">
          <div
            className="gallery-landing__img"
            style={{ backgroundImage: `url(${content?.images.landing})` }}
          ></div>
          <div className="gallery-landing__overlay"></div>
          <h1>{content?.name}</h1>
        </div>
      </div>
    );
  };

  const renderOverview = () => {
    return (
      <div
        ref={refIntersect}
        className="work__content padded"
        style={{
          gridTemplateColumns: "3fr 2fr",
          ...slideImgStyle,
        }}
      >
        {noOverview ? (
          <DesktopSVG img={content.images.overviewImages[0]} />
        ) : (
          <WorkPictureContainer images={content?.images} />
        )}

        {renderInfo()}
      </div>
    );
  };

  const renderContent = () => {
    if (pageControl.workSubPage === "workLanding") return renderLanding();
    if (pageControl.workSubPage === "overview") return renderOverview();
    if (pageControl.workSubPage === "gallery")
      return (
        <WorkDetail
          slideImgStyle={slideImgStyle}
          pageControl={pageControl}
          images={content?.images}
        />
      );
  };

  const render = () => {
    return (
      <div
        ref={refEl}
        className="work__container"
        style={backgroundStyle}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ type: "spring", duration: 0.5 }}
      >
        {renderContent()}
      </div>
    );
  };
  return render();
};

export default WorkContent;

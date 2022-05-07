import React, { useRef, useEffect, useState } from "react";

import WorkPictureContainer from "./WorkPictureContainer";
import WorkDetail from "./WorkDetail";
import useSlideStyle from "./useSlideStyle";

const WorkContent = ({ refEl, pageControl, content, backgroundStyle }) => {
  const { slideImgStyle } = useSlideStyle(pageControl, refEl);

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
          <div className="column--grid--2" style={{ columnGap: "3rem" }}>
            <div className="row--grid--2 detail-item">
              <div className="detail-item__title">
                <h3>Role</h3>
                <div></div>
              </div>

              <p>{content?.role}</p>
            </div>

            <div className="row--grid--2 detail-item">
              <div className="detail-item__title">
                <h3>Role</h3>
                <div></div>
              </div>

              <p>{content?.role}</p>
            </div>
          </div>

          <div className="row--grid--2 detail-item">
            <div className="detail-item__title">
              <h3>Technology</h3>
              <div></div>
            </div>

            <p>{content?.technology}</p>
          </div>

          <div
            className="column--grid--2 detail-item"
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

  const render = () => {
    return (
      <div ref={refEl} className="work__container" style={backgroundStyle}>
        {renderLanding()}

        <div
          className="work__content padded"
          style={{
            gridTemplateColumns: "3fr 2fr",
            ...slideImgStyle,
          }}
        >
          <WorkPictureContainer images={content?.images} />
          {renderInfo()}
        </div>
        <WorkDetail
          slideImgStyle={slideImgStyle}
          pageControl={pageControl}
          images={content?.images}
        />
      </div>
    );
  };
  return render();
};

export default WorkContent;

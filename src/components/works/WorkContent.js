import React, { useRef, useEffect, useState } from "react";

import WorkPictureContainer from "./WorkPictureContainer";
import WorkDetail from "./WorkDetail";
import useSlideStyle from "./useSlideStyle";
import landing from "../../assests/image/projects/sushiRepublic/landing.jpg";

const WorkContent = ({ refEl, pageControl }) => {
  const { slideImgStyle } = useSlideStyle(pageControl, refEl);

  const renderInfo = () => {
    return (
      <div className="works__info-container">
        <div className="works__title">
          <span>Sushi</span>
          <span>Republic</span>
        </div>
        <div className="works__subtitle">
          <h2>
            A microsite showcasing stories of customers of a concept pension
            provider.
          </h2>
        </div>
        <div className="works__info__detail">
          <div className="column--grid--2" style={{ columnGap: "3rem" }}>
            <div className="row--grid--2 detail-item">
              <div className="detail-item__title">
                <h3>Role</h3>
                <div></div>
              </div>

              <p>Senior developer</p>
            </div>

            <div className="row--grid--2 detail-item">
              <div className="detail-item__title">
                <h3>Role</h3>
                <div></div>
              </div>

              <p>Senior developer</p>
            </div>
          </div>

          <div className="row--grid--2 detail-item">
            <div className="detail-item__title">
              <h3>Technology</h3>
              <div></div>
            </div>

            <p>HTML5, CSS3, Sass, jQuery</p>
          </div>

          <div
            className="column--grid--2 detail-item"
            style={{ marginTop: "1rem", gap: "2rem" }}
          >
            <div className="button">Live Demo</div>
            <div className="button">Github</div>
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
            style={{ backgroundImage: `url(${landing})` }}
          ></div>
          <div className="gallery-landing__overlay"></div>
          <h1>Sushi Republic</h1>
        </div>
      </div>
    );
  };

  const render = () => {
    return (
      <div ref={refEl} className="work__container">
        {renderLanding()}
        <WorkDetail slideImgStyle={slideImgStyle} pageControl={pageControl} />
        <div
          className="work__content padded"
          style={{
            gridTemplateColumns: "3fr 2fr",
            ...slideImgStyle,
          }}
        >
          <WorkPictureContainer />
          {renderInfo()}
        </div>
        <div className="work__content padded" style={slideImgStyle}>
          <WorkDetail />
        </div>
      </div>
    );
  };
  return render();
};

export default WorkContent;

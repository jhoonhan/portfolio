import React, { useRef, useEffect } from "react";
import { isMobile } from "react-device-detect";
import useListenSwipe from "../../helpers/useListenSwipe";

import DesktopSVG from "../../../assests/image/projects/DesktopSVG";
import WorkPictureContainer from "../WorkPictureContainer";

const Overview = ({ slideInfo, pageControl, content, noOverview, props }) => {
  const { onTouchStart, onTouchMove, onTouchEnd, sticky } = useListenSwipe();

  const refIntersect = useRef(null);

  useEffect(() => {
    pageControl.setWorkSubPage("overview");
  }, [props.match.path]);

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
      {noOverview ? (
        <DesktopSVG
          img={content.images.overviewImages[0]}
          customClass="overview"
        />
      ) : (
        <WorkPictureContainer images={content?.images} />
      )}

      {renderInfo()}
    </div>
  );
};

export default Overview;

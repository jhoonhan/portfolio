import React, { useEffect } from "react";
import LandingArt from "./LandingArt";
import name2 from "../../assests/image/name2.svg";
import MiddleLine from "../helpers/MiddleLine";

const Landing = ({ pageControl, refHome, props }) => {
  useEffect(() => {
    pageControl.setCurPage("home");
  }, [props.match.path]);

  const renderFooter = () => {
    return (
      <div
        className="landing__footer"
        style={
          pageControl.curPage !== "home"
            ? { transform: "translateX(100vw)" }
            : {}
        }
      >
        <MiddleLine orientation="horizontal" />

        <h3 style={{ fontWeight: 300 }}>visual artist & web developer</h3>
      </div>
    );
  };
  const renderCenterInfo = () => {
    return (
      <div className="landing__center-info">
        <svg viewBox="0 0 500 500" className="lname lname--center">
          <use href={`${name2}#center`}></use>
        </svg>
      </div>
    );
  };
  const render = () => {
    return (
      <>
        {/* <LandingArt curPage={pageControl.curPage} /> */}
        <section ref={refHome} className="landing__container container">
          {renderCenterInfo()}

          {renderFooter()}
        </section>
      </>
    );
  };

  return render();
};

export default Landing;

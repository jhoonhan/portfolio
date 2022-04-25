import React, { useEffect } from "react";
import LandingArt from "./LandingArt";
import name2 from "../../assests/image/name2.svg";
import MiddleLine from "../../helpers/MiddleLine";

const Landing = ({ refHome }) => {
  const renderFooter = () => {
    return (
      <div className="landing__footer">
        <MiddleLine orientation="horizontal" style={{ width: "15vw" }} />

        <h3>visual artist & web developer</h3>
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
      <section ref={refHome} className="landing__container container">
        {renderCenterInfo()}

        {renderFooter()}
      </section>
    );
  };

  return render();
};

export default Landing;

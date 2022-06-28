import React, { useContext } from "react";

import { PageContext } from "../../App";

const WorksLanding = () => {
  const { urls } = useContext(PageContext);

  const renderWorkCards = () => {
    const cards = urls.workPage.map((work, i) => {
      return (
        <div className="works__landing__card" key={i}>
          work
        </div>
      );
    });
    return cards;
  };

  const render = () => {
    return (
      <div className="works__landing">
        <div className="works__landing__preview">aaang1</div>
        <div className="works__landing__selector">
          {/* {renderWorkCards()} */}
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(0, 0, 0px) rotate(0deg)",
              zIndex: 10,
            }}
          >
            work1
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(0, 0, 0) rotate(0deg)",
              zIndex: 20,
            }}
          >
            work2
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(0px, 0px, 0px) rotate(0deg)",
              zIndex: 30,
            }}
          >
            work3
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(0, 0, 0px) rotate(0deg)",
              zIndex: 40,
            }}
          >
            work4
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(0, 0, 0px) rotate(0deg)",
              zIndex: 50,
            }}
          >
            work5
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(0, 0, 0px) rotate(0deg)",
              zIndex: 40,
            }}
          >
            work6
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(0, 0, 0px) rotate(0deg)",
              zIndex: 30,
            }}
          >
            work7
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(0, 0, 0px) rotate(0deg)",
              zIndex: 20,
            }}
          >
            work8
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(0, 0, 0px) rotate(0deg)",
              zIndex: 10,
            }}
          >
            work9
          </div>
        </div>
      </div>
    );
  };

  return render();
};

export default WorksLanding;

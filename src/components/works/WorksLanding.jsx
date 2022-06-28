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
              transform: "translate3d(100px, 0, 0px) rotate(0deg)",
              zIndex: 10,
            }}
          >
            work2
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(200px, 0, 0px) rotate(0deg)",
              zIndex: 10,
            }}
          >
            work3
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(300px, 0px, 0px) rotate(0deg)",
              zIndex: 10,
            }}
          >
            work4
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(400px, 0, 0) rotate(0deg)",
              zIndex: 20,
            }}
          >
            work5
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(500px, -120px, 0px) rotate(0deg)",
              zIndex: 30,
            }}
          >
            work6
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(600px, -240px, 0px) rotate(0deg)",
              zIndex: 40,
            }}
          >
            work7
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(700px, -360px, 0px) rotate(0deg)",
              zIndex: 50,
            }}
          >
            work8
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(800px, -480px, 0px) rotate(0deg)",
              zIndex: 40,
            }}
          >
            work9
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(700px, -600px, 0px) rotate(0deg)",
              zIndex: 30,
            }}
          >
            work10
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(600px, -720px, 0px) rotate(0deg)",
              zIndex: 30,
            }}
          >
            work11
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(500px, -840px, 0px) rotate(0deg)",
              zIndex: 30,
            }}
          >
            work12
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(400px, -960px, 0px) rotate(0deg)",
              zIndex: 30,
            }}
          >
            work13
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(300px, -840px, 0px) rotate(0deg)",
              zIndex: 30,
            }}
          >
            work14
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(200px, -720px, 0px) rotate(0deg)",
              zIndex: 30,
            }}
          >
            work15
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: "translate3d(100px, -600px, 0px) rotate(0deg)",
              zIndex: 30,
            }}
          >
            work16
          </div>
        </div>
      </div>
    );
  };

  return render();
};

export default WorksLanding;

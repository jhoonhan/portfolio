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
  const tx = 100;
  const ty = 60;

  const render = () => {
    return (
      <div className="works__landing">
        <div className="works__landing__preview">aaang1</div>
        <div className="works__landing__selector">
          {/* {renderWorkCards()} */}
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * 0}px, ${
                ty * 0
              }px, 0px) rotate(0deg)`,
              zIndex: 10,
            }}
          >
            work1
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * 1}px, ${
                ty * 1
              }px, 0px) rotate(0deg)`,
              zIndex: 10,
            }}
          >
            work2
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * 2}px, ${
                ty * 2
              }px, 0px) rotate(0deg)`,
              zIndex: 10,
            }}
          >
            work3
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * 3}px, ${
                ty * 3
              }px, 0px) rotate(0deg)`,
              zIndex: 10,
            }}
          >
            work4
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * 4}px, ${
                ty * 4
              }px, 0) rotate(0deg)`,
              zIndex: 20,
            }}
          >
            work5
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * 5}px, ${
                ty * 5
              }px, 0px) rotate(0deg)`,
              zIndex: 30,
            }}
          >
            work6
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * 6}px, ${
                ty * 6
              }px, 0px) rotate(0deg)`,
              zIndex: 40,
            }}
          >
            work7
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * 7}px, ${
                ty * 1
              }px, 0px) rotate(0deg)`,
              zIndex: 50,
            }}
          >
            work8
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * 8}px, ${
                ty * 0
              }px, 0px) rotate(0deg)`,
              zIndex: 40,
            }}
          >
            work9
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * 7}px, ${
                ty * -1
              }px, 0px) rotate(0deg)`,
              zIndex: 30,
            }}
          >
            work10
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * 6}px, ${
                ty * -2
              }px, 0px) rotate(0deg)`,
              zIndex: 30,
            }}
          >
            work11
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * 5}px, ${
                ty * -3
              }px, 0px) rotate(0deg)`,
              zIndex: 30,
            }}
          >
            work12
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * 4}px, ${
                ty * -4
              }px, 0px) rotate(0deg)`,
              zIndex: 30,
            }}
          >
            work13
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * -3}px, ${
                ty * -3
              }px, 0px) rotate(0deg)`,
              zIndex: 30,
            }}
          >
            work14
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * -2}px, ${
                ty * -2
              }px, 0px) rotate(0deg)`,
              zIndex: 30,
            }}
          >
            work15
          </div>
          <div
            className="works__landing__card"
            style={{
              transform: `translate3d(${tx * -1}px, ${
                ty * -1
              }px, 0px) rotate(0deg)`,
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

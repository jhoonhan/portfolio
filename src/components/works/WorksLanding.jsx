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
  const ty = 100;
  const radius = 300;
  const degrees = [
    0, -22.5, -45, -67.5, -90, -112.5, -135, -157.5, -180, -202.5, -225, -247.5,
    -270, -292.5, -315, -337.5,
  ];
  const theta = [
    Math.PI, // 180  9
    7 * (Math.PI / 8), // 157.5 8
    3 * (Math.PI / 4), // 135 7
    5 * (Math.PI / 8), // 112.5 6
    Math.PI / 2, // 90 5
    3 * (Math.PI / 8), // 67.5 4
    Math.PI / 4, // 45 3
    1 * (Math.PI / 8), // 22.5 2
    0, // 0 1
    15 * (Math.PI / 8), // 337.5 16
    7 * (Math.PI / 4), // 315 15
    13 * (Math.PI / 8), // 292.5 14
    3 * (Math.PI / 2), // 270 13
    11 * (Math.PI / 8), // 247.5 12
    5 * (Math.PI / 4), // 225 11
    9 * (Math.PI / 8), // 202.5 10
  ];

  const pos = (theta) => {
    return {
      x: Math.round(radius * Math.cos(theta)),
      y: Math.round(radius * Math.sin(theta)),
    };
  };

  const render = () => {
    console.log(pos(theta[1]).x);
    return (
      <div className="works__landing">
        <div className="works__landing__preview">aaang1</div>
        <div className="works__landing__selector">
          {/* {renderWorkCards()} */}
          <div
            className="works__landing__card-container"
            style={{ width: `${700}px`, height: `${700}px` }}
          >
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[0]).x}px, ${
                  pos(theta[0]).y
                }px, 0px) rotate(${degrees[0]}deg)`,
                zIndex: 116,
              }}
            >
              work1
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[1]).x}px, ${
                  pos(theta[1]).y
                }px, 0px) rotate(${degrees[1]}deg)`,
                zIndex: 115,
              }}
            >
              work2
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[2]).x}px, ${
                  pos(theta[2]).y
                }px, 0px) rotate(${degrees[2]}deg)`,
                zIndex: 114,
              }}
            >
              work3
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[3]).x}px, ${
                  pos(theta[3]).y
                }px, 0px) rotate(${degrees[3]}deg)`,
                zIndex: 113,
              }}
            >
              work4
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[4]).x}px, ${
                  pos(theta[4]).y
                }px, 0px) rotate(${degrees[4]}deg)`,
                zIndex: 112,
              }}
            >
              work5
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[5]).x}px, ${
                  pos(theta[5]).y
                }px, 0px) rotate(${degrees[5]}deg)`,
                zIndex: 111,
              }}
            >
              work6
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[6]).x}px, ${
                  pos(theta[6]).y
                }px, 0px) rotate(${degrees[6]}deg)`,
                zIndex: 30,
              }}
            >
              work7
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[7]).x}px, ${
                  pos(theta[7]).y
                }px, 0px) rotate(${degrees[7]}deg)`,
                zIndex: 110,
              }}
            >
              work8
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[8]).x}px, ${
                  pos(theta[8]).y
                }px, 0px) rotate(${degrees[8]}deg)`,
                zIndex: 109,
              }}
            >
              work9
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[9]).x}px, ${
                  pos(theta[9]).y
                }px, 0px) rotate(${degrees[9]}deg)`,
                zIndex: 108,
              }}
            >
              work10
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[10]).x}px, ${
                  pos(theta[10]).y
                }px, 0px) rotate(${degrees[10]}deg)`,
                zIndex: 107,
              }}
            >
              work11
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[11]).x}px, ${
                  pos(theta[11]).y
                }px, 0px) rotate(${degrees[11]}deg)`,
                zIndex: 106,
              }}
            >
              work12
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[12]).x}px, ${
                  pos(theta[12]).y
                }px, 0px) rotate(${degrees[12]}deg)`,
                zIndex: 105,
              }}
            >
              work13
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[13]).x}px, ${
                  pos(theta[13]).y
                }px, 0px) rotate(${degrees[13]}deg)`,
                zIndex: 104,
              }}
            >
              work14
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[14]).x}px, ${
                  pos(theta[14]).y
                }px, 0px) rotate(${degrees[14]}deg)`,
                zIndex: 103,
              }}
            >
              work15
            </div>
            <div
              className="works__landing__card"
              style={{
                transform: `translate3d(${pos(theta[15]).x}px, ${
                  pos(theta[15]).y
                }px, 0px) rotate(${degrees[15]}deg)`,
                zIndex: 102,
              }}
            >
              work16
            </div>
          </div>
        </div>
      </div>
    );
  };

  return render();
};

export default WorksLanding;

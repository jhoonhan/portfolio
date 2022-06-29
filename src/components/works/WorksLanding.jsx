import React, { useContext, useState, useEffect, useRef } from "react";

import { PageContext } from "../../App";

const WorksLanding = () => {
  const { urls } = useContext(PageContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [rotation, setRotation] = useState(0);

  const refCardContainer = useRef(null);

  const resizeViewport = () => {
    console.log(`resizing`);
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };
  const changeRotation = (e) => {
    console.log(e);
    console.log(rotation);
    if (e.deltaY > 0) setRotation(rotation + 1);
    if (e.deltaY <= 0) setRotation(rotation - 1);
  };

  useEffect(() => {
    console.log(rotation);
  }, [rotation]);

  useEffect(() => {
    const cardContainer = refCardContainer.current;
    window.addEventListener("resize", resizeViewport);
    cardContainer.addEventListener("wheel", changeRotation);

    return () => {
      window.removeEventListener("resize", resizeViewport);
      cardContainer.removeEventListener("wheel", changeRotation);
    };
  }, []);

  const renderCards = () => {
    const works = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2];
    const radius = windowHeight / 1.5;
    const cardDimension = {
      width: windowHeight / 3.5,
      height: windowHeight / 3.5,
    };
    const containerDimension = {
      width: `${radius * 2 + cardDimension.width}px`,
      height: `${radius * 2 + cardDimension.height}px`,
    };
    const degrees = works.map((deg, i) => -22.5 * i);
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
    const cards = works.map((work, i) => {
      const { x, y } = pos(theta[i]);
      return (
        <div
          key={`card--${i}`}
          className="works__landing__card"
          style={{
            transform: `translate3d(${x}px, ${y}px, 0px) rotate(${degrees[i]}deg)`,
            zIndex: 116 - i,
            width: `${cardDimension.width}px`,
            height: `${cardDimension.height}px`,
          }}
        >
          {`work${i + 1}`}
        </div>
      );
    });
    return (
      <div
        ref={refCardContainer}
        className="works__landing__card-container"
        style={{ ...containerDimension, transform: `rotate(${rotation}deg)` }}
      >
        {cards}
      </div>
    );
  };

  const render = () => {
    return (
      <div className="works__landing">
        <div className="works__landing__preview">aaang1</div>
        <div className="works__landing__selector">
          {/* {renderWorkCards()} */}
          {renderCards()}
        </div>
      </div>
    );
  };

  return render();
};

export default WorksLanding;

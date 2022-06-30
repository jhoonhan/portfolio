import React, { useContext, useState, useEffect, useRef } from "react";

import { PageContext } from "../../App";

const WorksLanding = () => {
  const { urls } = useContext(PageContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [rotation, setRotation] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  const refCardContainer = useRef(null);

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
  const degrees = works.map((deg, i) => 22.5 * i);
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
  const rotationDegree = 11.25;

  const resizeViewport = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };
  const changeRotation = (e) => {
    if (e.deltaY > 0) setRotation(rotation + rotationDegree);
    if (e.deltaY <= 0) setRotation(rotation - rotationDegree);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeViewport);

    return () => {
      window.removeEventListener("resize", resizeViewport);
    };
  }, []);

  useEffect(() => {
    if (rotation % (rotationDegree * 2)) {
      setActiveCard(null);
    } else {
      degrees.forEach((deg, i) => {
        if (rotation < 0 && deg === 0) setActiveCard(i);
        if (rotation >= 0 && deg === rotation % 360) setActiveCard(i);
        if (rotation < 0 && deg === 360 + (rotation % 360)) setActiveCard(i);
      });
    }
  }, [rotation]);

  const renderCards = () => {
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
          className={`works__landing__card ${activeCard === i && "active"}`}
          style={{
            transform: `translate3d(${x}px, ${y}px, 0px) 
            rotate(-${degrees[i]}deg)
            ${activeCard === i ? "translateX(-50px)" : "translateX(0px)"}`,
            zIndex: activeCard === i ? 117 : 116 - i,
            width: `${cardDimension.width}px`,
            height: `${cardDimension.height}px`,
          }}
        >
          <h2>{`work${i + 1}`}</h2>
        </div>
      );
    });
    return (
      <div
        ref={refCardContainer}
        onWheel={changeRotation}
        className="works__landing__card-container"
        style={{ ...containerDimension, transform: `rotate(${rotation}deg)` }}
      >
        {cards}
      </div>
    );
  };

  const render = () => {
    console.log(urls.workPage);
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

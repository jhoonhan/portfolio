import React, { useContext, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { PageContext } from "../../App";

const WorksLanding = () => {
  const { urls, projects } = useContext(PageContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [rotation, setRotation] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [waitT, setWaitT] = useState(false);

  const refCardContainer = useRef(null);

  const worksArr = () => {
    const arr = [
      { ...projects[0], index: 0, theta: Math.PI },
      { ...projects[1], index: 1, theta: 7 * (Math.PI / 8) },
      { ...projects[2], index: 2, theta: 3 * (Math.PI / 4) },
      { ...projects[3], index: 3, theta: 5 * (Math.PI / 8) },
      { ...projects[4], index: 4, theta: Math.PI / 2 },
      { ...projects[5], index: 5, theta: 3 * (Math.PI / 8) },
      { ...projects[6], index: 6, theta: Math.PI / 4 },
      { ...projects[7], index: 7, theta: 1 * (Math.PI / 8) },
      { ...projects[8], index: 8, theta: 0 },
      { ...projects[7], index: 9, theta: 15 * (Math.PI / 8) },
      { ...projects[6], index: 10, theta: 7 * (Math.PI / 4) },
      { ...projects[5], index: 11, theta: 13 * (Math.PI / 8) },
      { ...projects[4], index: 12, theta: 3 * (Math.PI / 2) },
      { ...projects[3], index: 13, theta: 11 * (Math.PI / 8) },
      { ...projects[2], index: 14, theta: 5 * (Math.PI / 4) },
      { ...projects[1], index: 15, theta: 9 * (Math.PI / 8) },
    ];
    for (let i = 0; i < arr.length; i++) {
      arr[i].degree = 22.5 * i;
    }
    return arr;
  };
  const degrees = worksArr().map((deg, i) => 22.5 * i);

  const radius = windowHeight / 1.5;
  const cardDimension = {
    width: windowHeight / 3.5,
    height: windowHeight / 3.5,
  };
  const containerDimension = {
    width: `${radius * 2 + cardDimension.width}px`,
    height: `${radius * 2 + cardDimension.height}px`,
  };

  const rotationDegree = 11.25;

  const resizeViewport = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };
  const changeRotation = (e) => {
    const fn = () => {
      if (e.deltaY > 0) setRotation(rotation + rotationDegree);
      if (e.deltaY <= 0) setRotation(rotation - rotationDegree);
    };
    // Throttling the touchpad movement
    if (!waitT) {
      fn();
      setWaitT(true);
      setTimeout(() => {
        setWaitT(false);
      }, 200);
    }
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
      worksArr().forEach((work, i) => {
        console.log(rotation, degrees[i], work.degree);

        if (rotation < 0 && work.deg === 0) setActiveCard(i);
        if (rotation >= 0 && work.deg === rotation % 360) setActiveCard(i);
        if (rotation < 0 && work.deg === 360 + (rotation % 360))
          setActiveCard(i);
      });
    }
  }, [rotation]);

  useEffect(() => {
    console.log(activeCard);
  }, [activeCard]);

  const renderCards = () => {
    const pos = (theta) => {
      return {
        x: Math.round(radius * Math.cos(theta)),
        y: Math.round(radius * Math.sin(theta)),
      };
    };
    const cards = worksArr().map((work, i) => {
      const { x, y } = pos(work.theta);
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
          <h2>{work.name.split("-").join(" ")}</h2>
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
    return (
      <div className="works__landing">
        <div
          className="works__landing__preview"
          // style={{backgroundColor: conditionalColor()}}
        >
          aaang1
        </div>
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

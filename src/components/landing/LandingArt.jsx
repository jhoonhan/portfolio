import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import name2 from "../../assests/image/name2.svg";
import { isMobile } from "react-device-detect";

const LandingArt = ({ curPage, artOverlay }) => {
  const refSection = useRef(null);
  const refCursor = useRef(null);
  const refFirstName = useRef(null);
  const refLastName = useRef(null);

  const [waitMouseMove, setWaitMouseMove] = useState(false);
  const [waitCursorMove, setWaitCursorMove] = useState(false);
  const [waitNameMove, setWaitNameMove] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const centerX = Math.round(windowSize.width / 2);
  const centerY = Math.round(windowSize.height / 2);

  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(
        () =>
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          }),
        100
      );
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    const fn = (e) => {
      changeColor(e);
      moveName(e);
    };
    if (curPage !== "home") {
      window.removeEventListener("mousemove", fn);
    }
    if (curPage === "home") {
      window.addEventListener("mousemove", fn);
    }

    return () => {
      window.removeEventListener("mousemove", fn);
    };
  }, [curPage]);

  const changeColor = (e) => {
    if (isMobile) return;
    const tps = 60;
    const intensity = 1.2;
    if (!waitMouseMove) {
      // refSection.current.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
      const increaseR =
        Math.round((1 / (windowSize.width / 255) + Number.EPSILON) * 100) / 100;
      const increaseG =
        Math.round((1 / (windowSize.height / 255) + Number.EPSILON) * 100) /
        100;

      const r = Math.round(
        (Math.abs(centerX - e.clientX) * increaseR) / intensity
      );
      const g = Math.round(
        (Math.abs(centerY - e.clientY) * increaseG) / intensity
      );
      const b = Math.round((r + g) / 2);
      const rgb = `rgb(${r},${g},${b})`;

      document.body.style.backgroundColor = rgb;
      setWaitMouseMove(true);
      setTimeout(() => {
        setWaitMouseMove(false);
      }, 1000 / tps);
    }
  };

  // const followCursor = (e) => {
  //   const tps = 60;
  //   if (!waitCursorMove) {
  //     setTimeout(() => {
  //       refCursor.current.style.transform = `translateX(${e.clientX}px) translateY(${e.clientY}px)`;
  //     }, 100);

  //     setWaitCursorMove(true);
  //     setTimeout(() => {
  //       setWaitCursorMove(false);
  //     }, 1000 / tps);
  //   }
  // };

  const moveName = (e) => {
    const tps = 60;
    if (!waitNameMove) {
      const r = 1 / (windowSize.width / 100);
      const r2 = 1 / (windowSize.height / 100);
      const w =
        Math.round(Math.abs((centerX - e.clientX) * r + Number.EPSILON)) / 100;
      const h =
        Math.round(Math.abs((centerY - e.clientY) * r2 + Number.EPSILON)) / 100;

      refFirstName.current.style.transform = `scale(${1 + w / 0.3})`;
      refLastName.current.style.transform = `scale(${1 + h / 0.3})`;

      setWaitNameMove(true);
      setTimeout(() => {
        setWaitNameMove(false);
      }, 1000 / tps);
    }
  };

  const render = () => {
    return (
      <motion.div
        ref={refSection}
        // onMouseLeave={() => console.log(`left aaang`)}
        className="landing-art__container container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 2 }}
      >
        <div className="landing-art__overlay" style={{ opacity: artOverlay }} />
        {/* <div ref={refCursor} className="cursor"></div> */}
        <div className="lname-container">
          <svg
            ref={refFirstName}
            viewBox="0 0 500 200"
            className="lname lname--first"
          >
            <use href={`${name2}#joe`}></use>
          </svg>
          <svg
            ref={refLastName}
            viewBox="0 0 500 200"
            className="lname lname--last"
          >
            <use href={`${name2}#han`}></use>
          </svg>
        </div>
      </motion.div>
    );
  };

  return render();
};

export default LandingArt;

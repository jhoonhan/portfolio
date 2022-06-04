import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import throttle from "./helpers/throttle";
import { transition } from "./helpers/config";
// import icons from "../assests/image/icons.svg";

const Cursor = ({ cursor }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visibleStyle, setVisibleStyle] = useState({ opacity: 0 });
  const { show, type } = cursor;

  const refCursor = useRef(null);

  useEffect(() => {
    const fn = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const throttled = throttle(fn, 10);

    document.addEventListener("mousemove", throttled);

    return () => {
      document.removeEventListener("mousemove", throttled);
    };
  }, []);

  useEffect(() => {
    if (show) {
      setVisibleStyle({ opacity: 0.8 });
    } else {
      setVisibleStyle({ opacity: 0 });
    }
  }, [show]);

  const animation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    transition: { duration: transition.default },
  };

  const renderCursorScroll = () => {
    return (
      <motion.div
        className="cursor__container"
        key="scrollCursor"
        variants={animation}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition="transition"
      >
        <div className="cursor__icon scroll">
          <svg
            id="scrollBar"
            className="svg__scroll-bar"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 100"
          >
            <path
              d="M25,4A21,21,0,0,1,46,25V75A21,21,0,0,1,4,75V25A21,21,0,0,1,25,4m0-4h0A25,25,0,0,0,0,25V75a25,25,0,0,0,25,25h0A25,25,0,0,0,50,75V25A25,25,0,0,0,25,0Z"
              transform="translate(0)"
            />
          </svg>
          <svg
            id="scrollWheel"
            className="svg__scroll-wheel"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 45"
          >
            <rect width="30" height="45" rx="15" />
          </svg>
        </div>
        <div className="cursor__text">scroll</div>
      </motion.div>
    );
  };

  const renderCursorMove = () => {
    return (
      <motion.div
        className="cursor__container"
        key="moveCursor"
        variants={animation}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition="transition"
      >
        <div className="cursor__icon move">
          {/* <svg
          id="moveBorder"
          className="svg__move-border"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80"
        >
          <path d="M40,4A36,36,0,1,1,4,40,36,36,0,0,1,40,4m0-4A40,40,0,1,0,80,40,40,40,0,0,0,40,0Z" />
        </svg> */}
          <svg
            id="moveBall"
            className="svg__move-ball"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 37"
          >
            <polygon points="14.73 31.72 3.46 37 1.73 18.5 0 0 13 13.22 26 26.44 14.73 31.72" />
          </svg>
        </div>
        <div className="cursor__text" style={{ fontSize: "1.2rem" }}>
          move
        </div>
      </motion.div>
    );
  };
  // const renderCursor = () => {
  //   if (type === "scroll") return renderCursorScroll;
  //   if (type === "move") return renderCursorMove;
  //   // if (!type) return null;
  // };

  return (
    <div
      ref={refCursor}
      className="cursor--follow"
      style={{
        ...visibleStyle,
        transform: `translateX(${position.x}px) translateY(${position.y}px)`,
      }}
    >
      <AnimatePresence exitBeforeEnter>
        {type === "scroll" ? renderCursorScroll() : renderCursorMove()}
      </AnimatePresence>
    </div>
  );
};

export default Cursor;

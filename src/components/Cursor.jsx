import React, { useRef, useEffect, useState } from "react";
import throttle from "./helpers/throttle";
import icons from "../assests/image/icons.svg";

const Cursor = ({ curPage }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visibleStyle, setVisibleStyle] = useState({ opacity: 0 });

  const refCursor = useRef(null);

  useEffect(() => {
    const fn = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const throttled = throttle(fn, 60);

    document.addEventListener("mousemove", throttled);

    return () => {
      document.removeEventListener("mousemove", throttled);
    };
  }, []);

  useEffect(() => {
    if (curPage === "works" || curPage === "about") {
      setVisibleStyle({ opacity: 0.5 });
    } else {
      setVisibleStyle({ opacity: 0 });
    }
  }, [curPage]);

  return (
    <div
      ref={refCursor}
      className="cursor--follow"
      style={{
        ...visibleStyle,
        transform: `translateX(${position.x}px) translateY(${position.y}px)`,
      }}
    >
      <div className="cursor__icon">
        <svg viewBox="0 0 50 100" className="svg__scroll-bar">
          <use href={`${icons}#scrollBar`}></use>
        </svg>
        {/* <div className="svg__scroll-bar"></div> */}

        <svg viewBox="0 0 30 45" className="svg__scroll-wheel">
          <use href={`${icons}#scrollWheel`}></use>
        </svg>
      </div>
      <div className="cursor__text">scroll</div>
    </div>
  );
};

export default Cursor;

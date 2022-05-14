import React, { useRef, useEffect, useState } from "react";
import throttle from "./helpers/throttle";
import icons from "../assests/image/icons.svg";

const Cursor = ({ refEl, visible, page }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const refCursor = useRef(null);

  useEffect(() => {
    if (!refCursor) return;
    const ref = refEl.current;

    const fn = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const throttled = throttle(fn, 60);

    ref.addEventListener("mousemove", throttled);

    if (!visible) {
      ref.removeEventListener("mousemove", throttled);
    }

    return () => {
      ref.removeEventListener("mousemove", throttled);
    };
  }, [refEl, refCursor, visible]);

  return (
    <div
      ref={refCursor}
      className="cursor--follow"
      style={{
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

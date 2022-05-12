import React, { useRef, useEffect, useState } from "react";
import throttle from "./helpers/throttle";

const Cursor = ({ pageControl, page, refEl, content }) => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  const refCursor = useRef(null);

  useEffect(() => {
    if (!refCursor) return;
    if (pageControl.curPage !== page) return;
    const fn = (e) => {
      refCursor.current.style.transform = `translateX(${e.clientX}px) translateY(${e.clientY}px)`;
    };
    const throttled = throttle(fn, 60);

    const node = refEl.current;

    node.addEventListener("mousemove", throttled);

    return () => {
      node.removeEventListener("mousemove", throttled);
    };
  }, [refEl, refCursor, pageControl, page]);

  const render = () => {
    if (pageControl.curPage !== page) return null;

    return (
      <div ref={refCursor} className="cursor--follow">
        {content || "aaang"}
      </div>
    );
  };

  return render();
};

export default Cursor;

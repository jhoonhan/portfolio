import React, { useRef, useEffect, useState } from "react";
import throttle from "./helpers/throttle";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const refCursor = useRef(null);

  useEffect(() => {
    if (!refCursor) return;
    const fn = (e) => {
      refCursor.current.style.transform = `translateX(${e.clientX}px) translateY(${e.clientY}px)`;
    };
    const throttled = throttle(fn, 60);

    document.addEventListener("mousemove", throttled);

    return () => {
      document.removeEventListener("mousemove", throttled);
    };
  }, [refCursor]);

  return (
    <div ref={refCursor} className="cursor--follow">
      useCursor
    </div>
  );
};

export default Cursor;

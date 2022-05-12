import React, { useRef, useEffect, useState } from "react";

const useCursor = () => {
  const followCursor = (e) => {
    const tps = 60;
    if (!waitCursorMove) {
      setTimeout(() => {
        refCursor.current.style.transform = `translateX(${e.clientX}px) translateY(${e.clientY}px)`;
      }, 100);

      setWaitCursorMove(true);
      setTimeout(() => {
        setWaitCursorMove(false);
      }, 1000 / tps);
    }
  };
  return <div>useCursor</div>;
};

export default useCursor;

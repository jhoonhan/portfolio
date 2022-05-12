import { useEffect, useRef } from "react";
import throttle from "./throttle";

const useHorizontalScroll = () => {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;

    if (el) {
      const onWheel = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.deltaY === 0) return;
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 5,
          behavior: "smooth",
        });
      };
      const fn = (e) => {
        e.stopPropagation();
        onWheel(e);
      };
      el.addEventListener("mousewheel", fn);
      return () => el.removeEventListener("mousewheel", fn);
    }
  }, []);
  return elRef;
};

export default useHorizontalScroll;

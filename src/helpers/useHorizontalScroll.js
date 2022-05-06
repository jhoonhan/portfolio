import { useEffect, useRef } from "react";
import throttle from "./throttle";

const useHorizontalScroll = () => {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;

    if (el) {
      const onWheel = (e) => {
        e.stopPropagation();

        e.preventDefault();

        if (e.deltaY === 0) return;
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 5,
          behavior: "smooth",
        });
      };
      const throttled = throttle(onWheel, 1);
      el.addEventListener("mousewheel", throttled);
      return () => el.removeEventListener("mousewheel", throttled);
    }
  }, []);
  return elRef;
};

export default useHorizontalScroll;

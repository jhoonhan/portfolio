import { useEffect, useRef } from "react";
import throttle from "./throttle";

const useHorizontalScroll = () => {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;

    if (el) {
      const onWheel = (e) => {
        console.log(e.deltaY);
        e.preventDefault();
        e.stopPropagation();

        if (e.deltaY === 0) return;
        if (e.deltaY >= 0) {
          el.scrollTo({
            left: el.scrollLeft + e.deltaY * 5,
            behavior: "smooth",
          });
        }
      };
      const throttled = throttle(onWheel, 1);
      el.addEventListener("wheel", throttled);
      return () => el.removeEventListener("wheel", throttled);
    }
  }, []);
  return elRef;
};

export default useHorizontalScroll;

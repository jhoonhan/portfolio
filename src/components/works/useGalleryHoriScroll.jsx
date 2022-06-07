import { useEffect, useRef, useState } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import throttle from "../helpers/throttle";

const useGalleryHoriScroll = (pageControl, loading) => {
  const [trigger, setTrigger] = useState(null);
  const elRef = useRef();

  // trigger reattaches the ref to the condtionally rerendered comp in the parent comp
  useEffect(() => {
    if (!elRef.current) {
      setTrigger(loading);
    }
    if (elRef.current) {
      setTrigger(elRef);
    }
  }, [loading]);
  //

  useEffect(() => {
    // return;
    if (!trigger) return;
    if (pageControl.workSubPage !== "gallery" || isMobile) return;
    const el = elRef.current;
    if (!el) return;
    el.scrollTo({ left: 0 });

    const onWheel = (e) => {
      e.preventDefault();
      if (e.deltaY === 0) return;
      if (e.deltaY > 0) {
        el.scroll({
          left: el.scrollLeft + 10 * 7,
          behavior: "smooth",
        });
      }

      if (e.deltaY < 0) {
        el.scroll({
          left: el.scrollLeft + -10 * 7,
          behavior: "smooth",
        });
      }
    };

    const fn = (e) => {
      const child = el.children[0].getBoundingClientRect();
      // e.stopPropagation();

      // if (
      //   el.scrollLeft > 0 &&
      //   Math.floor(window.innerWidth) <= Math.round(child.right) - 10
      // ) {
      //   console.log(el.scrollLeft);
      //   e.stopPropagation();
      // }

      const s = el.scrollLeft + e.deltaY * 7;
      const w = child.width;
      const vw = window.innerWidth;
      const x = s / (w - vw + 700);

      const amount = 0.5 * x * 100;

      if (s <= 0) {
        pageControl.setWorkNavWidth(`${50}%`);
      }
      if (s > 0) {
        pageControl.setWorkNavWidth(`${50 + amount}%`);
      }

      onWheel(e);
    };

    const throttled = throttle(fn, 1);
    el.addEventListener("wheel", throttled);
    return () => {
      el.removeEventListener("wheel", throttled);
    };
  }, [pageControl.workSubPage, trigger]);

  return elRef;
};

export default useGalleryHoriScroll;

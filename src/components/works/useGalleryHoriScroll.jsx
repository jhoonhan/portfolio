import { useEffect, useRef } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import throttle from "../helpers/throttle";

const useGalleryHoriScroll = (pageControl) => {
  const elRef = useRef();
  useEffect(() => {
    if (pageControl.workSubPage !== "gallery" || isMobile) return;
    const el = elRef.current;
    if (!el) return;
    el.scrollTo({ left: 0 });

    const onWheel = (e) => {
      e.preventDefault();

      if (e.deltaY === 0) return;
      el.scroll({
        left: el.scrollLeft + e.deltaY * 7,
        behavior: "smooth",
      });
    };

    const fn = (e) => {
      console.log(`firied`);

      const child = el.children[0].getBoundingClientRect();

      if (
        el.scrollLeft > 0 &&
        Math.floor(window.innerWidth) <= Math.round(child.right) - 10
      ) {
        e.stopPropagation();
      }

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

    el.addEventListener("wheel", fn);
    return () => {
      el.removeEventListener("wheel", fn);
    };
  }, [pageControl.workSubPage]);
  return elRef;
};

export default useGalleryHoriScroll;

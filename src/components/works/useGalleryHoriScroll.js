import { useEffect, useRef } from "react";
import throttle from "../../helpers/throttle";

const useGalleryHoriScroll = (pageControl) => {
  const elRef = useRef();
  useEffect(() => {
    if (pageControl.workSubPage !== "detail") return;
    const el = elRef.current;
    if (!el) return;
    el.scrollTo({ left: 0 });

    const onWheel = (e) => {
      // console.log(e.deltaY);
      e.preventDefault();

      if (e.deltaY === 0) return;
      el.scroll({
        left: el.scrollLeft + e.deltaY * 7,
        behavior: "smooth",
      });
    };

    const fn = (e) => {
      console.log(e);
      const child = el.children[0].getBoundingClientRect();
      if (
        el.scrollLeft > 0 &&
        Math.floor(window.innerWidth) < Math.round(child.right) - 0
      ) {
        e.stopPropagation();
      }

      const s = el.scrollLeft + e.deltaY * 7;
      const w = child.width;
      const vw = window.innerWidth;
      const x = s / (w - vw + 700);

      const amount = 0.6 * x * 100;
      if (s <= 0) {
        pageControl.setWorkNavWidth(`${25}%`);
      }
      if (s > 0) {
        pageControl.setWorkNavWidth(`${25 + amount}%`);
      }

      onWheel(e);
    };

    el.addEventListener("mousewheel", fn);
    return () => {
      el.removeEventListener("mousewheel", fn);
    };
  }, [pageControl.workSubPage]);
  return elRef;
};

export default useGalleryHoriScroll;

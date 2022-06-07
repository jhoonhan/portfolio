import { useEffect, useRef, useState } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import throttle from "../helpers/throttle";

const useGalleryHoriScroll = (pageControl, loading) => {
  const [trigger, setTrigger] = useState(null);
  const [test, setTest] = useState(0);
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
      if (e.deltaY > 0) {
        el.scroll({
          left: el.scrollLeft + 100 * 7,
          behavior: "smooth",
        });
      }

      if (e.deltaY < 0) {
        el.scroll({
          left: el.scrollLeft + -100 * 7,
          behavior: "smooth",
        });
      }
    };

    const checkMovePage = (e) => {
      const position =
        e.currentTarget.children[0].getBoundingClientRect().right;
      const element = e.currentTarget.scrollLeft;
      // console.log(child.x);
      // console.log(position);
      // e.stopPropagation();
      console.log(e.currentTarget.scrollLeft, el.scrollLeft);

      // if (
      //   el.scrollLeft > 0 &&
      //   Math.floor(window.innerWidth) <= Math.round(child.right) - 10
      // ) {
      //   e.stopPropagation();
      // }
      // if (child.x > 0) {
      //   e.stopPropagation();
      // }
      // if (child.x <= 0) {
      // }
      if (e.currentTarget.scrollLeft > 0) {
        e.stopPropagation();
      }
    };
    const changeWorkNav = (e) => {
      const child = el.children[0].getBoundingClientRect();
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
    };

    const throttled = throttle(onWheel, 2);
    el.addEventListener("wheel", checkMovePage, false);
    el.addEventListener("wheel", changeWorkNav, false);
    el.addEventListener("wheel", throttled, false);
    return () => {
      el.removeEventListener("wheel", checkMovePage);
      el.removeEventListener("wheel", changeWorkNav);
      el.removeEventListener("wheel", throttled);
    };
  }, [pageControl.workSubPage, trigger]);

  return elRef;
};

export default useGalleryHoriScroll;

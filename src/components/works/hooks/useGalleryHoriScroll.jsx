import { useEffect, useRef, useState, useContext } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import { PageContext } from "../../../App";
import throttle from "../../helpers/throttle";

const useGalleryHoriScroll = (loading) => {
  const { page, style } = useContext(PageContext);

  const [trigger, setTrigger] = useState(null);
  const [wait, setWait] = useState(false);
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
  // useEffect(() => {
  //   console.log(wait);
  // }, [wait]);

  const timeRef = useRef();
  const scrollingRef = useRef(false);

  useEffect(() => {
    if (!trigger) return;
    if (!elRef.current) return;
    if (page.workSubPage !== "gallery" || isMobile) return;

    const padVelocity = 30;
    const mouseVelocity = 100 * 7;
    const el = elRef.current;
    el.scrollTo({ left: 0 });

    const onWheel = (e) => {
      e.preventDefault();

      if (!scrollingRef.current && e.deltaY % 10 === 0) {
        clearTimeout(timeRef.current);
        scrollingRef.current = true;
        el.scroll({
          left: el.scrollLeft + mouseVelocity * Math.sign(e.deltaY),
          behavior: "smooth",
        });
        timeRef.current = setTimeout(() => {
          scrollingRef.current = false;
        }, 500);
      }

      if (e.deltaY % 10 !== 0) {
        clearTimeout(timeRef.current);
        if (e.currentTarget.scrollLeft > 0) {
          scrollingRef.current = true;
        }
        el.scroll({
          left: el.scrollLeft + padVelocity * Math.sign(e.deltaY),
        });
        timeRef.current = setTimeout(() => {
          scrollingRef.current = false;
        }, 500);
      }

      changeWorkNav(e);
    };

    const checkMovePage = (e) => {
      if (e.currentTarget.scrollLeft > 0 && scrollingRef.current) {
        // stops page change
        e.stopPropagation();
      }
    };
    const changeWorkNav = (e) => {
      const child = el.children[0].getBoundingClientRect();
      const w = child.width;
      const vw = window.innerWidth;
      let s;
      let x;

      if (e.deltaY % 10 === 0) {
        s = el.scrollLeft + mouseVelocity * Math.sign(e.deltaY);
        x = s / (w - vw + mouseVelocity);
      }
      if (e.deltaY % 10 !== 0) {
        s = el.scrollLeft + padVelocity * Math.sign(e.deltaY);
        x = s / (w - vw + padVelocity);
      }

      const amount = 0.5 * x * 100;

      if (s <= 0) {
        style.setWorkNavWidth(`${50}%`);
      }
      if (s > 0) {
        style.setWorkNavWidth(`${50 + amount}%`);
      }
    };

    el.addEventListener("wheel", checkMovePage, false);
    el.addEventListener("wheel", onWheel, false);
    return () => {
      el.removeEventListener("wheel", checkMovePage);
      el.removeEventListener("wheel", onWheel);
    };
  }, [page.workSubPage, trigger]);

  return { elRef };
};

export default useGalleryHoriScroll;

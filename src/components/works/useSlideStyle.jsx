import { useEffect, useState } from "react";
import throttle from "../helpers/throttle";

const useSlideStyle = (pageControl, refEl) => {
  const { workPage, setWorkPage, workSubPage, setWorkSubPage } = pageControl;
  const [slide, setSlide] = useState(0);
  const [slideImgStyle, setSlideImgStyle] = useState({});

  useEffect(() => {
    // if (workSubPage === "slides") return;
    let timeoutId = null;
    const fn = (e) => {
      e.preventDefault();

      clearTimeout(timeoutId);
      if (e.deltaY >= 0) {
        if (slide >= 5) return;
        setSlide(slide + 1);
      } else {
        if (slide <= -5) return;
        setSlide(slide - 1);
      }
      timeoutId = setTimeout(() => {
        setSlide(0);
      }, 500);
    };
    const refWorkContainer = refEl.current;
    const throttled = throttle(fn, 1);
    refWorkContainer.addEventListener("wheel", throttled, false);

    return () => {
      refWorkContainer.removeEventListener("wheel", throttled);
    };
  }, [slide, workSubPage]);

  useEffect(() => {
    setSlideImgStyle({
      transform: `translateX(${0 - slide}vw)`,
    });
  }, [slide]);

  useEffect(() => {
    if (slide === -5) {
      if (workSubPage === "workLanding" && workPage > 1)
        setWorkPage(workPage - 1);
      if (workSubPage === "overview") setWorkSubPage("workLanding");
      if (workSubPage === "gallery") setWorkSubPage("overview");
    }
    if (slide === 5) {
      if (workSubPage === "workLanding") setWorkSubPage("overview");
      if (workSubPage === "overview") setWorkSubPage("gallery");
      if (workSubPage === "gallery" && workPage < 5) setWorkPage(workPage + 1);
    }
  }, [slide]);

  return { workSubPage, slide, slideImgStyle };
};

export default useSlideStyle;

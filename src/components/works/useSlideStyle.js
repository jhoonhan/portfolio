import { useEffect, useState } from "react";
import throttle from "../../helpers/throttle";

const useSlideStyle = (pageControl, refEl) => {
  const { workSubPage, setWorkSubPage } = pageControl;
  const [slide, setSlide] = useState(0);
  const [slideImgStyle, setSlideImgStyle] = useState({});

  useEffect(() => {
    let timeoutId = null;
    const fn = (e) => {
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
    refWorkContainer.addEventListener("mousewheel", throttled, false);

    return () => {
      refWorkContainer.removeEventListener("mousewheel", throttled);
    };
  }, [slide]);

  useEffect(() => {
    setSlideImgStyle({
      transform: `translateX(${0 - slide}vw)`,
    });
  }, [slide]);

  useEffect(() => {
    if (slide === -5) {
      if (workSubPage === "detail") setWorkSubPage("info");
      if (workSubPage === "more") setWorkSubPage("detail");
    }
    if (slide === 5) {
      if (workSubPage === "info") setWorkSubPage("detail");
      if (workSubPage === "detail") setWorkSubPage("more");
    }
  }, [slide]);

  return { workSubPage, slide, slideImgStyle };
};

export default useSlideStyle;

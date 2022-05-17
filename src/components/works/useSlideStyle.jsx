import { useEffect, useState } from "react";
import throttle from "../helpers/throttle";
import history from "../../history";

const useSlideStyle = (pageControl, refEl) => {
  const { workPage, setWorkPage, workSubPage, setWorkSubPage } = pageControl;
  const [slide, setSlide] = useState(0);
  const [slideImgStyle, setSlideImgStyle] = useState({});
  const [slideDirection, setSlideDirection] = useState("up");

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
    // if (0 - slide > 0) {
    //   setSlideImgStyle({ left: `${0 - slide}vw` });
    // }

    // if (0 - slide <= 0) {
    //   setSlideImgStyle({ right: `${0 - slide}vw` });
    // }
    setSlideImgStyle({
      transform: `translateX(${0 - slide}vw)`,
    });
    // console.log(slide);
  }, [slide]);

  useEffect(() => {
    if (slide === -5) {
      if (workSubPage === "overview")
        history.push(`/works/${pageControl.workPage}/landing`);
      if (workSubPage === "gallery")
        history.push(`/works/${pageControl.workPage}/overview`);
      setSlideDirection("up");
    }
    if (slide === 5) {
      if (workSubPage === "landing")
        history.push(`/works/${pageControl.workPage}/overview`);
      if (workSubPage === "overview")
        history.push(`/works/${pageControl.workPage}/gallery`);
      setSlideDirection("down");
      // if (workSubPage === "gallery" && workPage < 5) setWorkPage(workPage + 1);
    }
  }, [slide]);

  return { slide, slideDirection, slideImgStyle };
};

export default useSlideStyle;

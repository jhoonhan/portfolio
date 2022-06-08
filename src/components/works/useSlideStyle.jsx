import { useEffect, useState, useContext } from "react";
import history from "../../history";
import { PageContext } from "../../App";

const useSlideStyle = (refEl) => {
  const { page } = useContext(PageContext);

  const [slide, setSlide] = useState(0);
  const [slideImgStyle, setSlideImgStyle] = useState({});
  const [slideDirection, setSlideDirection] = useState("up");

  useEffect(() => {
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
    // const throttled = throttle(fn, 1);
    refWorkContainer.addEventListener("wheel", fn, false);

    return () => {
      refWorkContainer.removeEventListener("wheel", fn);
    };
  }, [slide, page.workSubPage]);

  useEffect(() => {
    setSlideImgStyle({
      transform: `translateX(${0 - slide}vw)`,
    });
    // console.log(slide);
  }, [slide]);

  useEffect(() => {
    // console.log(slide);

    if (slide === -5) {
      if (page.workSubPage === "overview")
        history.push(`/works/${page.workPage}/landing`);
      if (page.workSubPage === "gallery")
        history.push(`/works/${page.workPage}/overview`);
      setSlideDirection("up");
    }
    if (slide === 5) {
      if (page.workSubPage === "landing")
        history.push(`/works/${page.workPage}/overview`);
      if (page.workSubPage === "overview")
        history.push(`/works/${page.workPage}/gallery`);
      setSlideDirection("down");
      // if (workSubPage === "gallery" && workPage < 5) setWorkPage(workPage + 1);
    }
  }, [slide]);

  return { slide, slideDirection, slideImgStyle };
};

export default useSlideStyle;

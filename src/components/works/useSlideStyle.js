import { useEffect, useState } from "react";
import throttle from "../../helpers/throttle";

const useSlideStyle = (pageControl, refEl) => {
  const { workSubPage, setWorkSubPage, setWorkSliderPage } = pageControl;
  const [helperSliderPage, setHelperSliderPage] = useState(0);
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
    const workSubPage2 = refEl.current;
    const throttled = throttle(fn, 1);
    workSubPage2.addEventListener("mousewheel", throttled, false);

    return () => {
      workSubPage2.removeEventListener("mousewheel", throttled);
    };
  }, [slide]);

  useEffect(() => {
    setWorkSliderPage(helperSliderPage);
  }, [helperSliderPage]);

  useEffect(() => {
    if (helperSliderPage === 0) {
      setSlideImgStyle({
        slide0: {
          transform: `translateX(${-100 - slide}vw)`,
        },
        slide1: {
          transform: "translateX(0vw)",
        },
        slide2: {
          transform: "translateX(0vw)",
        },
        slide3: {
          transform: "translateX(0vw)",
        },
      });
    }
    if (helperSliderPage === 1) {
      setSlideImgStyle({
        slide0: {
          transform: "translateX(-200vw)",
        },
        slide1: {
          transform: `translateX(${-100 - slide}vw)`,
        },
        slide2: {
          transform: "translateX(0vw)",
        },
        slide3: {
          transform: "translateX(0vw)",
        },
      });
    }
    if (helperSliderPage === 2) {
      setSlideImgStyle({
        slide0: {
          transform: "translateX(-200vw)",
        },
        slide1: {
          transform: "translateX(-200vw)",
        },
        slide2: {
          transform: `translateX(${-100 - slide}vw)`,
        },
        slide3: {
          transform: "translateX(0vw)",
        },
      });
    }
    if (helperSliderPage === 3) {
      setSlideImgStyle({
        slide0: {
          transform: "translateX(-200vw)",
        },
        slide1: {
          transform: "translateX(-200vw)",
        },
        slide2: {
          transform: "translateX(-200vw)",
        },
        slide3: {
          transform: `translateX(${-100 - slide}vw)`,
        },
      });
    }
  }, [slide]);

  useEffect(() => {
    if (slide === -5) {
      if (helperSliderPage === 1) setHelperSliderPage(0);
      if (helperSliderPage === 2) setHelperSliderPage(1);
      if (helperSliderPage === 3) setHelperSliderPage(2);
    }
    if (slide === 5) {
      if (helperSliderPage === 0) setHelperSliderPage(1);
      if (helperSliderPage === 1) setHelperSliderPage(2);
      if (helperSliderPage === 2) setHelperSliderPage(3);
    }
  }, [slide]);

  return { helperSliderPage, slide, slideImgStyle };
};

export default useSlideStyle;

import React, { useRef, useEffect, useState } from "react";
import landing from "../../assests/image/projects/sushiRepublic/landing.jpg";
import img1 from "../../assests/image/projects/sushiRepublic/img1.jpg";
import img2 from "../../assests/image/projects/sushiRepublic/img2.jpg";
import desktops from "../../assests/image/projects/sushiRepublic/desktops.jpg";
import throttle from "../../helpers/throttle";
import Slide from "./Slide";
import useHorizontalScroll from "../../helpers/useHorizontalScroll";
import useGalleryHoriScroll from "./useGalleryHoriScroll";

const WorkDetail = ({ slideImgStyle, pageControl }) => {
  const [slide, setSlide] = useState(0);
  const [slidesWidth, setSlidesWith] = useState(1920);
  const refCont = useRef(null);
  const refSlides = useRef(null);
  const wtf = useGalleryHoriScroll();

  // useEffect(() => {
  //   const fn = (e) => {
  //     e.stopPropagation();
  //     if (e.deltaY >= 0) {
  //       setSlide(slide + 200);
  //     } else {
  //       if (slide === 0) return;
  //       setSlide(slide - 200);
  //     }
  //   };

  //   const reff = refCont.current;
  //   const throttled = throttle(fn, 1);
  //   reff.addEventListener("mousewheel", throttled, false);

  //   return () => {
  //     reff.removeEventListener("mousewheel", throttled);
  //   };
  // }, [slide]);

  // useEffect(() => {
  //   setSlidesWith(refSlides.current.getBoundingClientRect().width);
  //   if (slide + window.innerWidth / 1.3 > slidesWidth)
  //     pageControl.setWorkSubPage("more");
  // }, [slide, slidesWidth]);

  // useEffect(() => {
  //   setSlide(0);
  // }, [pageControl?.workSubPage]);

  const render = () => {
    return (
      <div ref={refCont} className="work__content" style={slideImgStyle}>
        <div
          ref={wtf}
          className="work__detail-container"
          // style={{ paddingLeft: "calc((100vw - 127.5vh)/2)" }}
        >
          <div
            ref={refSlides}
            className="detail__img-container"
            // style={{ transform: `translateX(-${slide}px)` }}
          >
            <Slide img={img1} />
            <Slide img={img2} />
            <Slide img={desktops} />
          </div>
        </div>
      </div>
    );
  };

  return render();
};

export default WorkDetail;

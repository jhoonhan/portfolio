import React, { useRef, useEffect, useState } from "react";
import landing from "../../assests/image/projects/sushiRepublic/landing.jpg";
import desktop1 from "../../assests/image/projects/sushiRepublic/desktop1.jpg";
import desktop2 from "../../assests/image/projects/sushiRepublic/desktop2.jpg";
import mobiles from "../../assests/image/projects/sushiRepublic/mobiles.jpg";
import throttle from "../../helpers/throttle";

const WorkDetail = () => {
  const [slide2, setSlide2] = useState(0);
  const refCont = useRef(null);

  useEffect(() => {
    console.log(slide2);
    const fn = (e) => {
      e.stopPropagation();
      if (e.deltaY >= 0) {
        setSlide2(slide2 + 10);
      } else {
        if (slide2 === 0) return;
        setSlide2(slide2 - 10);
      }
    };

    const reff = refCont.current;
    const throttled = throttle(fn, 1);
    reff.addEventListener("mousewheel", throttled, false);

    return () => {
      reff.removeEventListener("mousewheel", throttled);
    };
  }, [slide2]);

  const render = () => {
    return (
      <div className="work__detail-container">
        <div
          ref={refCont}
          className="detail__img-container"
          style={{ transform: `translateX(-${slide2}vw)` }}
          // style={{ transform: "translateX(-10vw)" }}
        >
          <div className="gallery-landing">
            <div
              className="gallery-landing__img"
              style={{ backgroundImage: `url(${landing})` }}
            ></div>
            <div className="gallery-landing__overlay"></div>
            <h1>Sushi Republic</h1>
          </div>
          <img src={desktop1} alt="img1" />
          <img src={desktop2} alt="img2" />
          <img src={mobiles} alt="img3" />
        </div>
      </div>
    );
  };

  return render();
};

export default WorkDetail;

import React, { useRef, useEffect, useState } from "react";
import landing from "../../assests/image/projects/sushiRepublic/landing.jpg";
import img1 from "../../assests/image/projects/sushiRepublic/img1.jpg";
import img2 from "../../assests/image/projects/sushiRepublic/img2.jpg";
import desktops from "../../assests/image/projects/sushiRepublic/desktops.jpg";
import throttle from "../../helpers/throttle";

const WorkDetail = ({ slideImgStyle }) => {
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
      <div ref={refCont} className="work__content" style={slideImgStyle}>
        <div
          className="work__detail-container"
          style={{ paddingLeft: "calc(5vw + 10rem)" }}
        >
          <div
            className="detail__img-container"
            style={{ transform: `translateX(-${slide2}vw)` }}
          >
            <img src={img1} alt="img0" />
            <img src={img2} alt="img0" />
            <img src={desktops} alt="img1" />
          </div>
        </div>
      </div>
    );
  };

  return render();
};

export default WorkDetail;

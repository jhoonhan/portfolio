import React, { useRef, useEffect } from "react";
import desktop1 from "../../assests/image/projects/sushiRepublic/desktop1.jpg";
import desktop2 from "../../assests/image/projects/sushiRepublic/desktop2.jpg";

const WorkDetail = () => {
  const refCont = useRef(null);

  useEffect(() => {
    const fn = (e) => {
      e.stopPropagation();
      console.log(`event fired`);
    };
    const reff = refCont.current;
    reff.addEventListener("mousewheel", fn);

    return () => {
      reff.removeEventListener("mousewheel", fn);
    };
  }, []);

  const render = () => {
    return (
      <div className="work__detail-container">
        <div ref={refCont} className="detail__img-container">
          <img
            src={desktop1}
            alt="img1"
            style={{ transform: "translateX(0vw)" }}
          />
          <img
            src={desktop2}
            alt="img2"
            style={{ transform: "translateX(10vw)" }}
          />
        </div>
      </div>
    );
  };

  return render();
};

export default WorkDetail;

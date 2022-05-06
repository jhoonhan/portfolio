import React, { useEffect, useRef, useState } from "react";

const Slide = ({ img }) => {
  const refImg = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const visible = (entries) => {
    // console.log(entries[0].isIntersecting);
    setIsVisible(entries[0].isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(visible, { threshold: 0.35 });
    const node = refImg.current;

    if (refImg.current) {
      observer.observe(node);
    }
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [refImg]);

  return (
    <div className="detail__slide">
      <img
        ref={refImg}
        src={img}
        alt="slide-img"
        style={isVisible ? { opacity: 1 } : { opacity: 0.5 }}
      />
    </div>
  );
};

export default Slide;

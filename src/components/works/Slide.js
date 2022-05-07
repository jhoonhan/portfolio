import React, { useEffect, useRef, useState } from "react";

const Slide = ({ type, img, data }) => {
  const refImg = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const visible = (entries) => {
    // console.log(entries[0].isIntersecting);
    setIsVisible(entries[0].isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(visible, { threshold: 0.3 });
    const node = refImg.current;

    if (refImg.current) {
      observer.observe(node);
    }
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [refImg]);

  const activeStyle = {
    opacity: 1,
    transform: "translateY(0vh)",
  };
  const disableStyle = {
    opacity: 0,
    transform: "translateY(-10vh)",
  };

  const condComponent = () => {
    if (type === "image") {
      return <img src={img} alt="slide-img" />;
    }

    if (type === "component") {
      return <>{data}</>;
    }
  };

  return (
    <div
      ref={refImg}
      className="detail__slide"
      // style={isVisible ? { opacity: 1 } : { opacity: 0.5 }}
      style={isVisible ? activeStyle : disableStyle}
    >
      {condComponent()}
    </div>
  );
};

export default Slide;

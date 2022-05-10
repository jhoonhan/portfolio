import React, { useRef, useEffect, useState } from "react";

const AboutImg = ({ img }) => {
  const [isVisible, setIsVisible] = useState(false);
  const refImg = useRef(null);

  const visible = (entries) => {
    // console.log(entries[0].isIntersecting);
    setIsVisible(entries[0].isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(visible, { threshold: 0.8 });
    const node = refImg.current;

    if (refImg.current) {
      observer.observe(node);
    }
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [refImg]);

  return (
    <img
      ref={refImg}
      src={img}
      alt="aboutImg"
      style={isVisible ? { opacity: 1 } : {}}
    />
  );
};

export default AboutImg;

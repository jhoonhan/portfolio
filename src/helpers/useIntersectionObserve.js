import { useRef, useEffect, useState } from "react";

const useIntersectionObserve = (refEl, threshold) => {
  const [isVisible, setIsVisible] = useState(false);
  const [style, setStyle] = useState({ opacity: 0.5 });

  const visible = (entries) => {
    setIsVisible(entries[0].isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(visible, {
      threshold: threshold,
    });
    const node = refEl.current;

    if (refEl.current) {
      observer.observe(node);
    }
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [refEl]);

  useEffect(() => {
    if (isVisible) setStyle({ opacity: 1 });
    if (!isVisible) setStyle({ opacity: 0.5 });
  }, [isVisible]);

  return style;
};

export default useIntersectionObserve;

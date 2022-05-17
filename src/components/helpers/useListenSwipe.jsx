import { useState, useEffect } from "react";

const useListenSwipe = (fnLeft, fnRight) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [stickySlide, setStickSlide] = useState(0);

  const distance = touchStart - touchEnd;

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 100;

  useEffect(() => {
    let timeoutId = null;

    clearTimeout(timeoutId);

    const stickyDistance = distance > 50 ? 50 : distance < 0 ? -50 : distance;

    setStickSlide(stickyDistance);
    timeoutId = setTimeout(() => {
      setStickSlide(0);
    }, 500);
  }, [distance]);

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (fnLeft && fnRight) {
      if (isLeftSwipe) fnLeft();
      if (isRightSwipe) fnRight();
    }
    // add your conditional logic here
  };

  return { onTouchStart, onTouchMove, onTouchEnd, distance, stickySlide };
};

export default useListenSwipe;

import { useState, useEffect } from "react";

const useListenSwipe = (fn) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);
  const [stickySlide, setStickSlide] = useState(0);

  const distance = touchStart - touchEnd;
  const distanceY = touchStartY - touchEndY;

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

    return () => {
      clearTimeout(timeoutId);
    };
  }, [distance]);

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchEndY(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const distanceY = touchStartY - touchEndY;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    const isTopSwipe = distanceY > minSwipeDistance;
    const isBottomSwipe = distanceY < -minSwipeDistance;

    // add your conditional logic here
    if (fn?.fnLeft && isLeftSwipe) fn.fnLeft();
    if (fn?.fnRight && isRightSwipe) fn.fnRight();
    if (fn?.fnTop && isTopSwipe) fn.fnTop();
    if (fn?.fnBottom && isBottomSwipe) fn.fnBottom();
  };

  return { onTouchStart, onTouchMove, onTouchEnd, distance, stickySlide };
};

export default useListenSwipe;

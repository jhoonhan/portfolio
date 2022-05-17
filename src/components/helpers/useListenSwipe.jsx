import { useState, useEffect } from "react";

const useListenSwipe = (fn) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);
  const [stickyX, setStickX] = useState(0);
  const [stickyY, setStickyY] = useState(0);
  const [touchAction, setTouchAction] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });

  const distance = touchStart - touchEnd;
  const distanceY = touchStartY - touchEndY;
  const isHorizontal = Math.abs(distanceY) < Math.abs(distance);
  const isVertical = Math.abs(distanceY) > Math.abs(distance);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 100;

  useEffect(() => {
    let timeoutId = null;

    clearTimeout(timeoutId);

    const stickyXDistance = distance > 50 ? 50 : distance < 0 ? -50 : distance;
    const stickyYDistance =
      distanceY > 50 ? 50 : distanceY < 0 ? -50 : distanceY;

    if (isHorizontal) {
      setStickX(stickyXDistance);
    }
    if (isVertical) {
      setStickyY(stickyYDistance);
    }
    timeoutId = setTimeout(() => {
      setStickX(0);
      setStickyY(0);
    }, 500);

    return () => {
      setStickX(0);
      setStickyY(0);
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

    // const isHorizontal = Math.abs(distanceY) < Math.abs(distance);
    // const isVertical = Math.abs(distanceY) > Math.abs(distance);

    const isLeftSwipe = isHorizontal && distance > minSwipeDistance;
    const isRightSwipe = isHorizontal && distance < -minSwipeDistance;

    const isTopSwipe = isVertical && distanceY > minSwipeDistance;
    const isBottomSwipe = isVertical && distanceY < -minSwipeDistance;

    // add your conditional logic here
    if (fn?.fnLeft && isLeftSwipe) fn.fnLeft();
    if (fn?.fnRight && isRightSwipe) fn.fnRight();
    if (fn?.fnTop && isTopSwipe) fn.fnTop();
    if (fn?.fnBottom && isBottomSwipe) fn.fnBottom();

    setTouchAction({
      left: isLeftSwipe,
      right: isRightSwipe,
      top: isTopSwipe,
      bottom: isBottomSwipe,
    });
  };

  return {
    touchAction,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    distance,
    sticky: {
      x: stickyX,
      y: stickyY,
    },
    setTouchAction,
  };
};

export default useListenSwipe;

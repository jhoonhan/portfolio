import { useState, useEffect, useRef } from "react";
import throttle from "../../helpers/throttle";

const usePictureContainerPosition = (actImg) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [actImgPosition, setActImgPosition] = useState({
    img1: { x: 0, y: 0 },
    img2: { x: 0, y: 0 },
    img3: { x: 0, y: 0 },
  });

  const onMouseMoveImg = useRef(throttle((e) => calculateAmount(e), 60));

  const calculateAmount = (e) => {
    const cursorX = e.clientX - e.target.parentNode.getBoundingClientRect().x;
    const cursorY = e.clientY - e.target.parentNode.getBoundingClientRect().y;
    const width = e.target.parentNode.getBoundingClientRect().width;
    const height = e.target.parentNode.getBoundingClientRect().height;

    const amountX = -1 * ((width / 2 - cursorX) / (width / 20));
    const amountY = -1 * ((height / 2 - cursorY) / (height / 20));
    setPosition({ x: amountX, y: amountY });
  };

  useEffect(() => {
    if (actImg === "img1")
      setActImgPosition({
        ...actImgPosition,
        img1: { x: position.x, y: position.y },
      });
    if (actImg === "img2")
      setActImgPosition({
        ...actImgPosition,
        img2: { x: position.x, y: position.y },
      });
    if (actImg === "img3")
      setActImgPosition({
        ...actImgPosition,
        img3: { x: position.x, y: position.y },
      });
  }, [position]);

  return { actImgPosition, onMouseMoveImg };
};

export default usePictureContainerPosition;

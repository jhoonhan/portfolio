import { useEffect, useState, useRef } from "react";

const useRandomTextAnimation = (text, delay) => {
  const textLength = text.length;
  const characters = "abcdefghijklmnopqrstuvwxyz";

  const initialRandomText = () => {
    let result = "";
    const length = textLength;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const [title, setTitle] = useState(initialRandomText);
  const [titleStyle, setTitleStyle] = useState(Array(textLength).fill(false));

  const refMasterTimer = useRef(null);
  const refInterval = useRef([]);
  const refTimeout = useRef([]);

  useEffect(() => {
    refInterval.current = [...Array(textLength)];
    refTimeout.current = [...Array(textLength)];
    refMasterTimer.current = setTimeout(makeid, delay);

    return () => {
      clearTimeout(refMasterTimer.current);
      refInterval.current.forEach((interval) => {
        clearInterval(interval);
      });
      refTimeout.current.forEach((timeout) => {
        clearTimeout(timeout);
      });
    };
  }, []);

  const makeid = () => {
    const chars = text.split("");
    let res = title.split("");
    const styles = [...titleStyle];

    chars.forEach((char, i) => {
      const fn = () => {
        const generated = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        res[i] = generated;

        if (res[i] === char) {
          styles[i] = true;

          setTitleStyle([...styles]);
          setTitle(res.join(""));
          clearInterval(refInterval.current[i]);

          refTimeout.current[i] = setTimeout(() => {
            styles[i] = false;
            setTitleStyle([...styles]);
            refInterval.current[i] = setInterval(fn, 50);
          }, 7000);
        }
        if (res[i] !== char) {
          setTitle(res.join(""));
        }
      };
      refInterval.current[i] = setInterval(fn, 50);
    });
  };

  return { title, titleStyle };
};

export default useRandomTextAnimation;

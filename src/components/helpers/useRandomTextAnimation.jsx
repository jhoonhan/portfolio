import React, { useEffect, useState, useRef } from "react";

const useRandomTextAnimation = (text, delay, loading) => {
  const textLength = text.join("").split("").length;
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
  const [hasFinished, setHasFinished] = useState(false);
  const threshold = () => {
    if (textLength >= 7) return 100;
    if (textLength < 7) return 400;
  };

  const refInterval = useRef(null);

  useEffect(() => {
    if (!loading) {
      setTimeout(makeid, delay);
    }

    return () => {
      clearInterval(refInterval.current);
    };
  }, [loading]);

  const makeid = () => {
    const chars = text.join("").split("");
    let res = title.split("");

    refInterval.current = setInterval(() => {
      chars.forEach((char, i) => {
        const characters = "abcdefghijklmnopqrstuvwxyz";
        const generated = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );

        if (i > 0 && res[i - 1] !== chars[i - 1]) {
          res[i] = generated;
          return;
        }

        if (res[i] === char) {
          return;
        }

        setTimeout(() => {
          res[i] = char;
        }, threshold());

        res[i] = generated;
      });
      setTitle(res.join(""));

      if (res.join("") === text.join("")) {
        clearInterval(refInterval.current);
        setHasFinished(true);
      }
    }, 30);
  };

  // return <>{override ? text.join("") : title}</>;
  return { hasFinished, title };
};

export default useRandomTextAnimation;

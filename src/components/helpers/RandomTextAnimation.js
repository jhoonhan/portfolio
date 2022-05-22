import React, { useEffect, useState, useRef } from "react";

const RandomTextAnimation = ({ text }) => {
  const refInterval = useRef(null);
  const [result, setResult] = useState("0123456789abc");

  useEffect(() => {
    makeid();

    return () => {
      clearInterval(refInterval.current);
    };
  }, []);

  const makeid = () => {
    const chars = text.join("").split("");
    let res = result.split("");

    refInterval.current = setInterval(() => {
      chars.forEach((char, i) => {
        if (i > 0 && res[i - 1] !== chars[i - 1]) return;
        if (res[i] === char) return;

        const characters = "abcdefghijklmnopqrstuvwxyz";
        const generated = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );

        if (generated === char) {
          // console.log(`clearing interval // ${generated}/${char}`);
          res[i] = char;
          // console.log(res);
          // setResult(res.join(""));
          // return char;
        }
        if (generated !== char) {
          // console.log(`keep going // ${generated}/${char}`);
          res[i] = generated;
          // setResult(res.join(""));
        }
      });
      setResult(res.join(""));

      if (res.join("") === text.join("")) {
        clearInterval(refInterval.current);
      }
    }, 30);
  };

  return <>{result}</>;
};

export default RandomTextAnimation;

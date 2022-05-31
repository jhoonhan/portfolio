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
  // const threshold = () => {
  //   if (textLength >= 7) return 100;
  //   if (textLength < 7) return 400;
  // };

  const refInterval = useRef([]);

  useEffect(() => {
    refInterval.current = [];
    setTimeout(makeid, delay);

    return () => {
      refInterval.current.forEach((interval) => {
        clearInterval(interval);
      });
    };
  }, []);

  const makeid = () => {
    const chars = text.split("");
    let res = title.split("");
    const characters = "abcdefghijklmnopqrstuvwxyz";

    chars.forEach((char, i) => {
      const fn = () => {
        const generated = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        res[i] = generated;

        if (res[i] === char) {
          clearInterval(refInterval.current[i]);
          setTitle(res.join(""));

          setTimeout(() => {
            console.log(`resume!`);
            refInterval.current[i] = setInterval(fn, 100);
          }, 10000);
        }
        if (res[i] !== char) {
          setTitle(res.join(""));
        }
      };
      refInterval.current[i] = setInterval(fn, 100);

      // if (res[i] === char) {
      //   console.log(`killing`);
      //   // clearInterval(refInterval.current);
      //   let fn;
      //   fn = setInterval(() => {
      //     console.log(`aaaang`);
      //   }, 300);
      //   // fn();
      //   setTimeout(() => {
      //     console.log(`cleared interval`);
      //     clearInterval(fn);
      //   }, 10000);
      // }

      // res[i] = generated;
    });

    // if (res.join("") === text.join("")) {
    //   clearInterval(refInterval.current);
    //   setHasFinished(true);
    // }
  };

  // return <>{override ? text.join("") : title}</>;
  return { title };
};

export default useRandomTextAnimation;

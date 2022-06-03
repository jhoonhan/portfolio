import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const usePreloader = (imgList) => {
  const [loaded, setLoaded] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  // const { theme, prevTheme } = themes;

  // const [backgrounds, setBackgrounds] = useState({
  //   from: "dark",
  //   to: "dark",
  // });

  // const [bg1, setbg1] = useState(prevTheme.color);
  // useEffect(() => {
  //   let timeoutId;
  //   timeoutId = setTimeout(() => {
  //     setbg1(backgrounds.to);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timeoutId);
  //   };
  // }, [backgrounds]);

  // useEffect(() => {
  //   setBackgrounds({
  //     from: prevTheme.color,
  //     to: theme.color,
  //   });
  // }, [theme]);

  // useEffect(() => {
  //   console.log(backgrounds);
  // }, [backgrounds]);

  useEffect(() => {
    console.log(imgList);
    if (!imgList) return;
    setLoading(true);
    const loadImage = (img) => {
      return new Promise((res, rej) => {
        const loadingImg = new Image();
        loadingImg.src = img;

        loadingImg.onload = () => res(img);

        loadingImg.onerror = (err) => rej(err);
      });
    };

    imgList.forEach(async (img, i) => {
      const res = await loadImage(img);
      if (res) {
        setLoaded((arr) => [...arr, res]);
      }
    });
  }, []);

  useEffect(() => {
    let timeoutId;
    setLoadingProgress(Math.round((loaded.length / imgList?.length) * 100));
    if (loaded.length === imgList?.length) {
      timeoutId = setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [loaded]);

  const Loading = (
    <motion.div
      className="loading__container"
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // initial={{ y: "100vh" }}
      // animate={{ y: "0vh" }}
      // exit={{ y: "100vh" }}
      transition={{ duration: 0.5 }}
    >
      {/* {dafuck} */}
      <div className="loading__animated-div" style={{ background: "#666" }}>
        <span>{loadingProgress}%</span>
      </div>
    </motion.div>
  );
  // const Loading = { dafuck };

  return { loading, Loading };
  // const progress = Math.round((loaded.length / imgList?.length) * 100);
};

export default usePreloader;

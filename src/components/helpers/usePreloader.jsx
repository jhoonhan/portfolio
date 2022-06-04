import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const usePreloader = (dataList) => {
  const [loaded, setLoaded] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (!dataList) return;
    setLoading(true);
    const loadImage = (img) => {
      return new Promise((res, rej) => {
        const loadingImg = new Image();
        loadingImg.src = img;

        loadingImg.onload = () => res(img);

        loadingImg.onerror = (err) => rej(err);
      });
    };
    const loadVideo = async (vid) => {
      // let res;
      const req = new XMLHttpRequest();
      req.open("GET", vid, true);
      req.responseType = "blob";

      req.onloadstart = () => {
        setLoaded((arr) => [...arr, req]);
      };
      req.onerror = (err) => console.error(err);

      req.send();
    };
    const canplayVid = (vid) => {};

    dataList.forEach(async (data, i) => {
      // console.log(data.slice(-3));
      const fileType = data.slice(-3);
      if (fileType !== "mp4") {
        const res = await loadImage(data);
        if (res) {
          setLoaded((arr) => [...arr, res]);
        }
      }
      if (fileType === "mp4") {
        // await loadVideo(data);
        setLoaded((arr) => [...arr, i]);
      }
    });
  }, []);

  useEffect(() => {
    let timeoutId;
    setLoadingProgress(
      Math.round(((loaded.length + 1) / dataList?.length) * 100)
    );
    if (loaded.length >= dataList?.length) {
      // timeoutId = setTimeout(() => {
      setLoading(false);
      // }, 100);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [loaded]);

  const renderProgress = () => {
    if (loadingProgress <= 100) return <span>{loadingProgress}%</span>;
    if (loadingProgress > 100) return <span>100%</span>;
  };

  const Loading = (
    <motion.div
      className="loading__container"
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading__animated-div">{renderProgress()}</div>
    </motion.div>
  );

  return { loading, Loading };
};

export default usePreloader;

import { useEffect, useState } from "react";

const usePreloader = (imgList, persistedImgs, setPersistedImgs) => {
  const [fetched, setFetched] = useState(false);
  const [preloadedImgs, setPreloadedImgs] = useState({});
  const [counter, setCounter] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // console.log(imgList);
    if (persistedImgs) {
      setFetched(true);
    }
    return () => {
      setFetched(false);
    };
  }, []);

  useEffect(() => {
    if (!imgList) return;
    imgList.forEach((imgObj, i) => {
      const img = new Image();
      img.src = imgObj.src;

      img.onload = () => {
        setPreloadedImgs((prevState) => ({ ...prevState, [imgObj.name]: img }));
      };
    });
  }, [imgList, setPersistedImgs]);

  useEffect(() => {
    setCounter(counter + 1);
  }, [preloadedImgs]);

  useEffect(() => {
    if (!imgList) return;

    if (counter > 0) {
      setProgress(Math.round(((counter - 1) / imgList.length) * 100));
    }
    if (counter - 1 === imgList.length) {
      setPersistedImgs(preloadedImgs);
      setFetched(true);
    }
  }, [imgList, counter]);

  return { fetched, progress };
};

export default usePreloader;

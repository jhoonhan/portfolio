import { useEffect, useState } from "react";

const usePreloader = (imgList) => {
  const [fetched, setFetched] = useState(false);
  const [preloadedImgs, setPreloadedImgs] = useState(
    imgList.map((imgObj) => JSON.parse(localStorage.getItem(imgObj.name))) || []
  );
  const [counter, setCounter] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return () => {
      setFetched(false);
    };
  }, []);

  useEffect(() => {
    imgList.forEach((imgObj, i) => {
      const img = new Image();
      img.src = imgObj.src;

      img.onload = () => {
        // setPreloadedImgs((prevState) => [...prevState, { [imgObj.name]: img }]);
        localStorage.setItem(imgObj.name, JSON.stringify(img));
      };
    });
  }, [imgList, setPreloadedImgs]);

  useEffect(() => {
    setCounter(counter + 1);
  }, [preloadedImgs]);

  useEffect(() => {
    if (counter > 0) {
      setProgress(Math.round(((counter - 1) / imgList.length) * 100));
    }
    if (counter - 1 === imgList.length) {
      setFetched(true);
    }
  }, [imgList, counter]);

  return { fetched, preloadedImgs, progress };
};

export default usePreloader;

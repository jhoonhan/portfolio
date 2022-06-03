import { useEffect, useState } from "react";
import Loading from "./Loading";

const usePreloader = (imgList) => {
  const [loaded, setLoaded] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
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
    setLoadingProgress(Math.round((loaded.length / imgList?.length) * 100));
    if (loaded.length === imgList?.length) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loaded]);

  const Loading = <div className="loading">{loadingProgress}</div>;

  return { loading, Loading };
  // const progress = Math.round((loaded.length / imgList?.length) * 100);
};

export default usePreloader;

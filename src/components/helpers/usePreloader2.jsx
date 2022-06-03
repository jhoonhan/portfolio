import { useEffect, useState } from "react";

const usePreloader2 = (imgList) => {
  const [fetched, setFetched] = useState(false);
  const [loaded, setLoaded] = useState([]);

  useEffect(() => {
    if (!imgList) return;
    const loadImage = (img) => {
      return new Promise((res, rej) => {
        const loadingImg = new Image();
        loadingImg.src = img.src;

        loadingImg.onload = () => res(img.src);

        loadingImg.onerror = (err) => rej(err);
      });
    };

    imgList.forEach(async (img, i) => {
      const res = await loadImage(img);
      if (res) {
        setLoaded((arr) => [...arr, res]);
      }
    });
  }, [imgList]);

  useEffect(() => {
    if (loaded.length === imgList?.length) {
      setFetched(true);
    }
  }, [loaded]);

  const pro = Math.round((loaded.length / imgList?.length) * 100);

  return { fetched, pro };
};

export default usePreloader2;

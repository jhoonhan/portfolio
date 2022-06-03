import { useEffect, useState } from "react";

const usePreloader2 = (imgList) => {
  const [fetched, setFetched] = useState(false);
  const [loaded, setLoaded] = useState([]);

  useEffect(() => {
    const loadImage = (img) => {
      return new Promise((res, rej) => {
        const loadingImg = new Image();
        loadingImg.src = img.src;

        loadingImg.onload = () => res(img.src);
        // loadingImg.onload = () =>
        //   setTimeout(() => {
        //     setCounter(counter + 1);
        //     res(img.url);
        //   }, 2000);

        loadingImg.onerror = (err) => rej(err);
      });
    };

    // Promise.all(imgList.map((img) => loadImage(img)))
    //   .then(() => setFetched(true))
    //   .catch((err) => console.log("Failed to load images", err));

    // const aaang = async () => {
    //   const wtf = await Promise.all(imgList.map((img) => loadImage(img)));
    //   console.log(wtf);
    // };

    imgList.forEach(async (img, i) => {
      const res = await loadImage(img);
      if (res) {
        setLoaded((arr) => [...arr, i]);
      }
    });

    // aaang().catch(console.error);
  }, []);

  useEffect(() => {
    // setCounter(counter + 1);
    if (loaded.length === imgList.length) {
      setFetched(true);
    }
  }, [loaded]);

  const pro = Math.round((loaded.length / imgList.length) * 100);

  return { fetched, pro };
};

export default usePreloader2;

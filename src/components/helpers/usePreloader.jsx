import { useEffect, useState } from "react";


const preloadImage = (src) => {
  return new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => {
      res(img);
    };
    img.onerror = img.onabort = () => {
      rej(src);
    };
  });
};


const usePreloader = () => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  let imageList = [];

  useEffect(() => {
    let isCancelled = false;

    const effect = () => {
      console.log(`preload`);
      if (isCancelled) return;
      s;
      const imagesPromiseList = [];


      imageList.forEach((img) => {
        imagesPromiseList.push(preloadImage(img));
      })

      await Promise.all(imagesPromiseList);

      if(isCancelled) return;

      setImagesPreloaded(true)
    };

    effect();

    return () => {
      isCancelled = true
    }
  }, [imageList]);

  return {imagesPreloaded};
};

export default usePreloader;
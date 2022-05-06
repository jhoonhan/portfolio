import { useEffect, useRef } from "react";
import throttle from "../../helpers/throttle";

const useGalleryHoriScroll = () => {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;

    if (el) {
      const onWheel = (e) => {
        e.preventDefault();

        if (e.deltaY === 0) return;
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 7,
          behavior: "smooth",
        });

        // el.scrollTo({
        //   left: el.scrollLeft + e.deltaY,
        //   behavior: "smooth",
        // });
      };
      const fn = (e) => {
        const child = el.children[0].getBoundingClientRect();
        if (
          el.scrollLeft > 0 &&
          Math.floor(window.innerWidth) < Math.round(child.right) - 50
        ) {
          e.stopPropagation();
        }
        onWheel(e);
      };
      el.addEventListener("mousewheel", fn);
      return () => el.removeEventListener("mousewheel", fn);
    }
  }, []);
  return elRef;
};

export default useGalleryHoriScroll;

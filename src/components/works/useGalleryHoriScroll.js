import { useEffect, useRef } from "react";
import throttle from "../../helpers/throttle";

const useGalleryHoriScroll = (pageControl) => {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;

    if (el) {
      const onWheel = (e) => {
        // console.log(e.deltaY);
        e.preventDefault();

        if (e.deltaY === 0) return;
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 7,
          behavior: "smooth",
        });
        // console.log(el.scrollLeft + e.deltaY * 7);
        // console.log(el.children[0].getBoundingClientRect().left);

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
        // pageControl.setSlideScroll(
        //   el.children[0].getBoundingClientRect().right /
        //     el.children[0].getBoundingClientRect().width
        // );
        // const s = el.children[0].getBoundingClientRect().left;
        const s = el.scrollLeft + e.deltaY * 7;

        const w = el.children[0].getBoundingClientRect().width;
        const vw = window.innerWidth;

        const x = s / (w - vw + 700);

        const amount = 0.6 * x * 100;
        console.log(s);
        // console.log(el.scrollLeft);
        if (s <= 0) {
          pageControl.setWorkNavWidth(`${25}%`);
        } else {
          pageControl.setWorkNavWidth(`${25 + amount}%`);
        }

        // console.log(el.children[0].getBoundingClientRect());
        // console.log(el.children[0].getBoundingClientRect().left);

        onWheel(e);
      };
      el.addEventListener("mousewheel", fn);
      return () => el.removeEventListener("mousewheel", fn);
    }
  }, []);
  return elRef;
};

export default useGalleryHoriScroll;

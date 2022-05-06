import { useEffect, useState } from "react";

const useSubPageStyle = (pageControl) => {
  const [activeSubPageStyle, setActiveSubPageStyle] = useState({
    transform: "translateX(-0vw)",
  });

  useEffect(() => {
    if (pageControl.curPage !== "works") return;
    if (pageControl.workSubPage === "workLanding") {
      // refs.refWorks.current.style.transform = "translateX(-0vw)";
      setActiveSubPageStyle({ transform: "translateX(-0vw)" });
    }
    if (pageControl.workSubPage === "info") {
      // refs.refWorks.current.style.transform = "translateX(-0vw)";
      setActiveSubPageStyle({ transform: "translateX(-100vw)" });
    }
    if (pageControl.workSubPage === "detail") {
      // refs.refWorks.current.style.transform = "translateX(-100vw)";
      setActiveSubPageStyle({ transform: "translateX(-200vw)" });
    }
    if (pageControl.workSubPage === "slides") {
      // refs.refWorks.current.style.transform = "translateX(-100vw)";
      setActiveSubPageStyle({ transform: "translateX(-300vw)" });
    }
  }, [pageControl.workSubPage]);

  return { activeSubPageStyle };
};

export default useSubPageStyle;

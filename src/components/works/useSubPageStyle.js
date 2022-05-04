import { useEffect, useState } from "react";

const useSubPageStyle = (workInfoSubPage, pageControl) => {
  const [activeSubPageStyle, setActiveSubPageStyle] = useState({
    transform: "translateX(-0vw)",
  });

  useEffect(() => {
    if (pageControl.curPage !== "works") return;
    if (workInfoSubPage === "info") {
      // refs.refWorks.current.style.transform = "translateX(-0vw)";
      setActiveSubPageStyle({ transform: "translateX(-0vw)" });
    }
    if (workInfoSubPage === "detail") {
      // refs.refWorks.current.style.transform = "translateX(-100vw)";
      setActiveSubPageStyle({ transform: "translateX(-100vw)" });
    }
  }, [workInfoSubPage]);

  return { activeSubPageStyle };
};

export default useSubPageStyle;

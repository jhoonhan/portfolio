import React, { useRef, useEffect, useState } from "react";
import sushi1 from "../../assests/image/3.jpg";
import sushi2 from "../../assests/image/4.jpg";
import sushi3 from "../../assests/image/5.jpg";

import WorkContent from "./WorkContent";

const Works = ({ refs, pageControl }) => {
  const [infoSubPage, setInfoSubPage] = useState("info");
  const [activeSubPage, setActiveSubPage] = useState({
    transform: "translateX(-0vw)",
  });

  const showBox = { transform: "translateX(0)" };

  const refEl1 = useRef(null);
  const refEl2 = useRef(null);
  const refEl3 = useRef(null);
  const refEl4 = useRef(null);
  const refEl5 = useRef(null);

  useEffect(() => {
    if (pageControl.curPage !== "works") return;
    if (infoSubPage === "info") {
      // refs.refWorks.current.style.transform = "translateX(-0vw)";
      setActiveSubPage({ transform: "translateX(-0vw)" });
    }

    if (infoSubPage === "detail") {
      console.log(`detail`);
      // refs.refWorks.current.style.transform = "translateX(-100vw)";
      setActiveSubPage({ transform: "translateX(-100vw)" });
    }
  }, [infoSubPage]);

  useEffect(() => {
    if (pageControl.subWorkPage === "el1") {
      refEl1.current.scrollIntoView({ behavior: "smooth" });
    }
    if (pageControl.subWorkPage === "el2") {
      refEl2.current.scrollIntoView({ behavior: "smooth" });
    }
    if (pageControl.subWorkPage === "el3") {
      refEl3.current.scrollIntoView({ behavior: "smooth" });
    }
    if (pageControl.subWorkPage === "el4") {
      refEl4.current.scrollIntoView({ behavior: "smooth" });
    }
    if (pageControl.subWorkPage === "el5") {
      refEl5.current.scrollIntoView({ behavior: "smooth" });
    }
    setInfoSubPage("info");
  }, [pageControl.subWorkPage]);

  const renderContentNav = () => {
    const activeClass = () => {
      if (pageControl.curPage === "works") {
        return "active-box";
      } else {
        return "";
      }
    };

    const active2 = (page) => {
      let style = {};
      if (pageControl.curPage === "works") style.transform = "translateX(0vw)";

      if (infoSubPage === page) style.opacity = "1";
      return style;
    };

    return (
      <div
        className={`${activeClass()} works__content-nav`}
        style={
          pageControl.curPage !== "works"
            ? { transform: "translateX(100vw)" }
            : {}
        }
      >
        <div className="bar disabled" />
        <div className="bar active" style={{ width: "5vw" }} />
        <div className="labels">
          <div
            className={`label info a--opacity ${activeClass()}`}
            style={active2("info")}
          >
            <div className="box" />
            <span onClick={() => setInfoSubPage("info")}>Info</span>
          </div>
          <div
            className={`label detail a--opacity ${activeClass()}`}
            style={active2("detail")}
          >
            <div className="box" />
            <span onClick={() => setInfoSubPage("detail")}>Detail</span>
          </div>
          <div
            className={`label more a--opacity ${activeClass()}`}
            style={active2("more")}
          >
            <div className="box" />
            <span>More Works</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section
        ref={refs.refWorks}
        className="works__container container"
        style={activeSubPage}
      >
        <WorkContent refEl={refEl1} />
        <WorkContent refEl={refEl2} />
        <WorkContent refEl={refEl3} />
        <WorkContent refEl={refEl4} />
        <WorkContent refEl={refEl5} />
      </section>
      {renderContentNav()}
    </>
  );
};

export default Works;

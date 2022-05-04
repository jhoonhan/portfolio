import React, { useRef, useEffect, useState } from "react";

import WorkContent from "./WorkContent";
import useSubPageStyle from "./useSubPageStyle";

const Works = ({ refs, pageControl }) => {
  const [workInfoSubPage, setWorkInfoSubPage] = useState("info");

  const { activeSubPageStyle } = useSubPageStyle(workInfoSubPage, pageControl);

  const refEl1 = useRef(null);
  const refEl2 = useRef(null);
  const refEl3 = useRef(null);
  const refEl4 = useRef(null);
  const refEl5 = useRef(null);

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
    setWorkInfoSubPage("info");
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

      if (workInfoSubPage === page) style.opacity = "1";
      return style;
    };

    const barWidth = () => {
      let width;
      if (workInfoSubPage === "info") width = "5vw";
      if (workInfoSubPage === "detail") width = "25vw";
      if (workInfoSubPage === "more") width = "75vw";

      return { width };
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
        <div className="bar active" style={barWidth()} />
        <div className="labels">
          <div
            className={`label info a--opacity ${activeClass()}`}
            style={active2("info")}
          >
            <div className="box" />
            <span onClick={() => setWorkInfoSubPage("info")}>Info</span>
          </div>
          <div
            className={`label detail a--opacity ${activeClass()}`}
            style={active2("detail")}
          >
            <div className="box" />
            <span onClick={() => setWorkInfoSubPage("detail")}>Detail</span>
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

  const onNextClick = () => {
    // console.log(workInfoSubPage);
    if (workInfoSubPage === "info") setWorkInfoSubPage("detail");
    if (workInfoSubPage === "detail") setWorkInfoSubPage("info");
  };

  const renderContentArrow = () => {
    return (
      <div className="works__content__arrow" onClick={onNextClick}>
        <span className="arrow"></span>
        {/* <span className="text">next</span> */}
      </div>
    );
  };

  const render = () => {
    return (
      <>
        <section
          ref={refs.refWorks}
          className="works__container container"
          style={activeSubPageStyle}
        >
          <WorkContent refEl={refEl1} />
          <WorkContent refEl={refEl2} />
          <WorkContent refEl={refEl3} />
          <WorkContent refEl={refEl4} />
          <WorkContent refEl={refEl5} />
        </section>
        {renderContentNav()}
        {renderContentArrow()}
      </>
    );
  };

  return render();
};

export default Works;

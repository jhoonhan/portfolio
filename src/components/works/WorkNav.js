import React, { useEffect, useState } from "react";

const WorkNav = ({
  pageControl,
  workRefs,
  workInfoSubPage,
  setWorkInfoSubPage,
}) => {
  useEffect(() => {
    if (pageControl.workPage === "el1") {
      workRefs.refEl1.current.scrollIntoView({ behavior: "smooth" });
    }
    if (pageControl.workPage === "el2") {
      workRefs.refEl2.current.scrollIntoView({ behavior: "smooth" });
    }
    if (pageControl.workPage === "el3") {
      workRefs.refEl3.current.scrollIntoView({ behavior: "smooth" });
    }
    if (pageControl.workPage === "el4") {
      workRefs.refEl4.current.scrollIntoView({ behavior: "smooth" });
    }
    if (pageControl.workPage === "el5") {
      workRefs.refEl5.current.scrollIntoView({ behavior: "smooth" });
    }
    setWorkInfoSubPage("info");
  }, [pageControl.workPage]);

  const activeClass = () => {
    if (pageControl.curPage === "works") {
      return "active-box";
    } else {
      return "";
    }
  };
  const active = (page) => {
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

  const onArrowClick = () => {
    if (workInfoSubPage === "info") setWorkInfoSubPage("detail");
    if (workInfoSubPage === "detail") setWorkInfoSubPage("info");
  };

  const renderContentArrow = () => {
    return (
      <div className="works__content__arrow" onClick={onArrowClick}>
        <span className="arrow"></span>
        {/* <span className="text">next</span> */}
      </div>
    );
  };
  const renderContentNav = () => {
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
            style={active("info")}
          >
            <div className="box" />
            <span onClick={() => setWorkInfoSubPage("info")}>Info</span>
          </div>
          <div
            className={`label detail a--opacity ${activeClass()}`}
            style={active("detail")}
          >
            <div className="box" />
            <span onClick={() => setWorkInfoSubPage("detail")}>Detail</span>
          </div>
          <div
            className={`label more a--opacity ${activeClass()}`}
            style={active("more")}
          >
            <div className="box" />
            <span>More Works</span>
          </div>
        </div>
      </div>
    );
  };
  const render = () => {
    return (
      <>
        {renderContentNav()}
        {renderContentArrow()}
      </>
    );
  };

  return render();
};

export default WorkNav;

import React, { useEffect, useState } from "react";

const WorkNav = ({ pageControl, workRefs }) => {
  const {
    curPage,
    workPage,
    setWorkPage,
    workSubPage,
    setWorkSubPage,
    workNavWidth,
    setWorkNavWidth,
  } = pageControl;
  useEffect(() => {
    if (workPage === "el1") {
      workRefs.refEl1.current.scrollIntoView({ behavior: "smooth" });
    }
    if (workPage === "el2") {
      workRefs.refEl2.current.scrollIntoView({ behavior: "smooth" });
    }
    if (workPage === "el3") {
      workRefs.refEl3.current.scrollIntoView({ behavior: "smooth" });
    }
    if (workPage === "el4") {
      workRefs.refEl4.current.scrollIntoView({ behavior: "smooth" });
    }
    if (workPage === "el5") {
      workRefs.refEl5.current.scrollIntoView({ behavior: "smooth" });
    }
    setWorkSubPage("workLanding");
  }, [workPage]);

  const activeClass = () => {
    if (curPage === "works") {
      return "active-box";
    } else {
      return "";
    }
  };
  const active = (page) => {
    let style = {};
    if (curPage === "works") style.transform = "translateX(0vw)";
    if (workSubPage === page) style.opacity = "1";
    return style;
  };

  useEffect(() => {
    if (workSubPage === "workLanding") setWorkNavWidth("0%");
    if (workSubPage === "info") setWorkNavWidth("5%");
    if (workSubPage === "detail") setWorkNavWidth("25%");
    if (workSubPage === "slides") setWorkNavWidth("85%");
  }, [workSubPage]);

  const onArrowClick = () => {
    if (workSubPage === "workLanding") setWorkSubPage("info");
    if (workSubPage === "info") setWorkSubPage("detail");
    // if (workSubPage === "detail") setWorkPage(`el${workPage.slice(-1) + 1}`);
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
        style={curPage !== "works" ? { transform: "translateX(100vw)" } : {}}
      >
        <div className="bar disabled" />
        <div className="bar active" style={{ width: workNavWidth }} />
        <div className="labels">
          <div
            className={`label info a--opacity ${activeClass()}`}
            style={active("info")}
          >
            <div className="box" />
            <span onClick={() => setWorkSubPage("info")}>Overview</span>
          </div>
          <div
            className={`label detail a--opacity ${activeClass()}`}
            style={active("detail")}
          >
            <div className="box" />
            <span onClick={() => setWorkSubPage("detail")}>Detail</span>
          </div>
          <div
            className={`label more a--opacity ${activeClass()}`}
            style={active("end")}
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

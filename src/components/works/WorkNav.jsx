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
    if (workPage === 1) {
      workRefs.refEl1.current.scrollIntoView({ behavior: "smooth" });
    }
    if (workPage === 2) {
      workRefs.refEl2.current.scrollIntoView({ behavior: "smooth" });
    }
    if (workPage === 3) {
      workRefs.refEl3.current.scrollIntoView({ behavior: "smooth" });
    }
    if (workPage === 4) {
      workRefs.refEl4.current.scrollIntoView({ behavior: "smooth" });
    }
    if (workPage === 5) {
      workRefs.refEl5.current.scrollIntoView({ behavior: "smooth" });
    }
    setWorkSubPage("workLanding");
  }, [workPage]);

  useEffect(() => {
    if (workSubPage === "workLanding") setWorkNavWidth("3%");
    if (workSubPage === "overview") setWorkNavWidth("20%");
    if (workSubPage === "gallery") setWorkNavWidth("50%");
    // if (workSubPage === "slides") setWorkNavWidth("85%");
  }, [workSubPage]);

  const condWorkPage = () => {
    if (workPage === 1) return "sushi republic";
    if (workPage === 2) return "danji";
    if (workPage === 3) return "haans cleaners";
    if (workPage === 4) return "this is bullshit";
    if (workPage === 5) return "salvation army";
  };

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

  const onArrowClick = () => {
    if (workSubPage === "workLanding") setWorkSubPage("overview");
    if (workSubPage === "overview") setWorkSubPage("gallery");
    if (workSubPage === "gallery" && workPage < 5) setWorkPage(workPage + 1);
  };

  const renderContentArrow = () => {
    if (curPage !== "works") return;
    return (
      <div className="works__content__arrow" onClick={onArrowClick}>
        <span className="arrow"></span>
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
            // className={`label info a--opacity ${activeClass()}`}
            className={`label landing a--opacity `}
            style={active("workLanding")}
          >
            <div className="box" />
            <span onClick={() => setWorkSubPage("workLanding")}>
              {condWorkPage()}
            </span>
          </div>
          <div
            // className={`label detail a--opacity ${activeClass()}`}
            className={`label overview a--opacity `}
            style={active("overview")}
          >
            <div className="box" />
            <span onClick={() => setWorkSubPage("overview")}>overview</span>
          </div>
          <div
            // className={`label more a--opacity ${activeClass()}`}
            className={`label gallery a--opacity`}
            style={active("gallery")}
          >
            <div className="box" />
            <span onClick={() => setWorkSubPage("gallery")}>gallery</span>
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

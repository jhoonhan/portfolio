import React, { useEffect, useState } from "react";
import history from "../../history";
import { Link } from "react-router-dom";

const WorkNav = ({ pageControl }) => {
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
    if (workSubPage === "workLanding") setWorkNavWidth("3%");
    if (workSubPage === "overview") setWorkNavWidth("20%");
    if (workSubPage === "gallery") setWorkNavWidth("50%");
    // if (workSubPage === "slides") setWorkNavWidth("85%");
  }, [workSubPage]);

  const condWorkPage = () => {
    if (workPage === "sushi-republic") return "sushi republic";
    if (workPage === "danji") return "danji";
    if (workPage === "salvation-army") return "salvation army";
    if (workPage === "haans-cleaner") return "haans cleaner";
    if (workPage === "this is bullshit") return "this is bullshit";
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
    if (workSubPage === "workLanding")
      history.push(`/works/${workPage}/overview`);
    if (workSubPage === "overview") history.push(`/works/${workPage}/gallery`);
    // if (workSubPage === "gallery" && workPage < 5) setWorkPage(workPage + 1);
  };

  const renderContentArrow = () => {
    if (curPage !== "works" || workSubPage === "gallery") return;
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
            <Link
              onClick={() => setWorkSubPage("workLanding")}
              to={`/works/${pageControl.workPage}/landing`}
            >
              {condWorkPage()}
            </Link>
          </div>
          <div
            // className={`label detail a--opacity ${activeClass()}`}
            className={`label overview a--opacity `}
            style={active("overview")}
          >
            <div className="box" />
            <Link
              onClick={() => setWorkSubPage("overview")}
              to={`/works/${pageControl.workPage}/overview`}
            >
              overview
            </Link>
          </div>
          <div
            // className={`label more a--opacity ${activeClass()}`}
            className={`label gallery a--opacity`}
            style={active("gallery")}
          >
            <div className="box" />
            <Link
              onClick={() => setWorkSubPage("gallery")}
              to={`/works/${pageControl.workPage}/gallery`}
            >
              gallery
            </Link>
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

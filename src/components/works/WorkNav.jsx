import React, { useEffect, useState } from "react";
import { isBrowser, isMobile } from "react-device-detect";

import history from "../../history";
import { Link } from "react-router-dom";

const WorkNav = ({ pageControl }) => {
  const {
    urls,
    curPage,
    workPage,
    setWorkPage,
    workSubPage,
    setWorkSubPage,
    workNavWidth,
    setWorkNavWidth,
  } = pageControl;

  useEffect(() => {
    if (isBrowser) {
      if (workSubPage === urls.workSubPage[0]) setWorkNavWidth("3%");
      if (workSubPage === urls.workSubPage[1]) setWorkNavWidth("20%");
      if (workSubPage === urls.workSubPage[2]) setWorkNavWidth("50%");
    }
    if (isMobile) {
      if (workSubPage === urls.workSubPage[0]) setWorkNavWidth("0%");
      if (workSubPage === urls.workSubPage[1]) setWorkNavWidth("33%");
      if (workSubPage === urls.workSubPage[2]) setWorkNavWidth("66%");
    }
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
    if (curPage === urls.curPage[1]) {
      return "active-box";
    } else {
      return "";
    }
  };
  const active = (page) => {
    let style = {};
    if (curPage === urls.curPage[1]) style.transform = "translateX(0vw)";
    if (workSubPage === page) style.opacity = "1";
    style.width = "auto";
    return style;
  };

  const onArrowClick = () => {
    if (workSubPage === urls.workSubPage[0])
      history.push(`/works/${workPage}/${urls.workSubPage[0 + 1]}`);
    if (workSubPage === urls.workSubPage[1])
      history.push(`/works/${workPage}/${urls.workSubPage[1 + 1]}`);
    // if (workSubPage === urls.workSubPage[2] && workPage < 5) setWorkPage(workPage + 1);
  };

  const renderContentArrow = () => {
    if (curPage !== urls.curPage[1] || workSubPage === urls.workSubPage[2])
      return;
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
        style={
          curPage !== urls.curPage[1] ? { transform: "translateX(100vw)" } : {}
        }
      >
        <div className="bar disabled" />
        <div className="bar active" style={{ width: workNavWidth }} />
        <div className="labels">
          <Link
            to={`/works/${pageControl.workPage}/${urls.workSubPage[0]}`}
            className={`label landing a--opacity `}
            style={active(urls.workSubPage[0])}
          >
            <div className="box" />
            <span
              className="a--opacity--m"
              style={workSubPage === urls.workSubPage[0] ? { opacity: 1 } : {}}
            >
              {condWorkPage()}
            </span>
          </Link>
          <Link
            // className={`label detail a--opacity ${activeClass()}`}
            to={`/works/${pageControl.workPage}/${urls.workSubPage[1]}`}
            className={`label overview a--opacity `}
            style={active(urls.workSubPage[1])}
          >
            <div className="box" />
            <span
              className="a--opacity--m"
              style={workSubPage === urls.workSubPage[1] ? { opacity: 1 } : {}}
            >
              overview
            </span>
          </Link>
          <Link
            to={`/works/${pageControl.workPage}/${urls.workSubPage[2]}`}
            // className={`label more a--opacity ${activeClass()}`}
            className={`label gallery a--opacity `}
            style={active(urls.workSubPage[2])}
          >
            <div className="box" />
            <span
              className="a--opacity--m"
              style={workSubPage === urls.workSubPage[2] ? { opacity: 1 } : {}}
            >
              gallery
            </span>
          </Link>
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

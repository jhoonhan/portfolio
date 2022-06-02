import React, { useEffect, useState } from "react";
import { isBrowser, isMobile } from "react-device-detect";

import history from "../../history";
import { Link } from "react-router-dom";

const WorkNav = ({ pageControl }) => {
  const {
    urls,
    curPage,
    workPage,
    workSubPage,
    workNavWidth,
    setWorkNavWidth,
    mobileShowNav,
    setMobileShowNav,
    touch,
  } = pageControl;

  // useEffect(() => {
  //   console.log(mobileShowNav);
  // }, [mobileShowNav]);

  const swipeFn = {
    fnRight: () => {
      if (workSubPage === urls.workSubPage[0]) return;
      if (workSubPage === urls.workSubPage[1])
        history.push(`/works/${workPage}/${urls.workSubPage[1 - 1]}`);
      if (workSubPage === urls.workSubPage[2])
        history.push(`/works/${workPage}/${urls.workSubPage[2 - 1]}`);
    },
    fnLeft: () => {
      if (workSubPage === urls.workSubPage[0])
        history.push(`/works/${workPage}/${urls.workSubPage[0 + 1]}`);
      if (workSubPage === urls.workSubPage[1])
        history.push(`/works/${workPage}/${urls.workSubPage[1 + 1]}`);
      if (workSubPage === urls.workSubPage[2]) return;
    },
  };

  useEffect(() => {
    if (touch.action.left) swipeFn.fnLeft();
    if (touch.action.right) swipeFn.fnRight();
  }, [touch.action]);

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

  const activeSpan = (page) => {
    if (!isMobile) return;
    if (!mobileShowNav) return { opacity: 0 };
    if (workSubPage === page && mobileShowNav) return { opacity: 1 };
  };

  const onArrowClick = () => {
    if (workSubPage === urls.workSubPage[0])
      history.push(`/works/${workPage}/${urls.workSubPage[0 + 1]}`);
    if (workSubPage === urls.workSubPage[1])
      history.push(`/works/${workPage}/${urls.workSubPage[1 + 1]}`);
    // if (workSubPage === urls.workSubPage[2] && workPage < 5) setWorkPage(workPage + 1);
  };

  const activeContainer = () => {
    if (curPage !== urls.curPage[1]) return { transform: "translateX(100vw)" };
    if (!isMobile) return;
    if (!mobileShowNav) return { transform: "translateY(1.6rem)" };
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
        // style={
        //   curPage !== urls.curPage[1] ? { transform: "translateX(100vw)" } : {}
        // }
        style={activeContainer()}
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
              // style={
              //   workSubPage === urls.workSubPage[0]
              //     ? { opacity: 1 }
              //     : mobileShowNav
              //     ? { opacity: 1 }
              //     : { opacity: 0 }
              // }
              style={activeSpan(urls.workSubPage[0])}
            >
              {workPage.split("-").join(" ")}
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
              style={activeSpan(urls.workSubPage[1])}
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
              // style={workSubPage === urls.workSubPage[2] ? { opacity: 1 } : {}}
              style={activeSpan(urls.workSubPage[2])}
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

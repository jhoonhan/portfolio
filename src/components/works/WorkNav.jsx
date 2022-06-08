import React, { useEffect, useContext } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import { PageContext } from "../../App";

import history from "../../history";
import { Link } from "react-router-dom";

const WorkNav = () => {
  const { urls, page, style, mobile, touch } = useContext(PageContext);

  useEffect(() => {
    console.log(page.curPage);
  }, [page]);

  const swipeFn = {
    fnRight: () => {
      if (page.workSubPage === urls.workSubPage[0]) return;
      if (page.workSubPage === urls.workSubPage[1])
        history.push(`/works/${page.workPage}/${urls.workSubPage[1 - 1]}`);
      if (page.workSubPage === urls.workSubPage[2])
        history.push(`/works/${page.workPage}/${urls.workSubPage[2 - 1]}`);
    },
    fnLeft: () => {
      if (page.workSubPage === urls.workSubPage[0])
        history.push(`/works/${page.workPage}/${urls.workSubPage[0 + 1]}`);
      if (page.workSubPage === urls.workSubPage[1])
        history.push(`/works/${page.workPage}/${urls.workSubPage[1 + 1]}`);
      if (page.workSubPage === urls.workSubPage[2]) return;
    },
  };

  useEffect(() => {
    if (touch.action.left) swipeFn.fnLeft();
    if (touch.action.right) swipeFn.fnRight();
  }, [touch.action]);

  useEffect(() => {
    if (isBrowser) {
      if (page.workSubPage === urls.workSubPage[0]) style.setWorkNavWidth("3%");
      if (page.workSubPage === urls.workSubPage[1])
        style.setWorkNavWidth("20%");
      if (page.workSubPage === urls.workSubPage[2])
        style.setWorkNavWidth("50%");
    }
    if (isMobile) {
      if (page.workSubPage === urls.workSubPage[0]) style.setWorkNavWidth("0%");
      if (page.workSubPage === urls.workSubPage[1])
        style.setWorkNavWidth("33%");
      if (page.workSubPage === urls.workSubPage[2])
        style.setWorkNavWidth("66%");
    }
  }, [page.workSubPage]);

  const activeClass = () => {
    if (page.curPage === urls.curPage[1]) {
      return "active-box";
    } else {
      return "";
    }
  };
  const active = (page) => {
    let style = {};
    if (page.curPage === urls.curPage[1]) style.transform = "translateX(0vw)";
    if (page.workSubPage === page) style.opacity = "1";
    style.width = "auto";
    return style;
  };

  const activeSpan = (page) => {
    if (!isMobile) return;
    if (!mobile.mobileShowNav) return { opacity: 0 };
    if (page.workSubPage === page && mobile.mobileShowNav)
      return { opacity: 1 };
  };

  const onArrowClick = () => {
    if (page.workSubPage === urls.workSubPage[0])
      history.push(`/works/${page.workPage}/${urls.workSubPage[0 + 1]}`);
    if (page.workSubPage === urls.workSubPage[1])
      history.push(`/works/${page.workPage}/${urls.workSubPage[1 + 1]}`);
    // if (page.workSubPage === urls.workSubPage[2] && workPage < 5) setWorkPage(workPage + 1);
  };

  const activeContainer = () => {
    if (page.curPage !== urls.curPage[1])
      return { transform: "translateX(100vw)" };
    if (!isMobile) return;
    if (!mobile.mobileShowNav) return { transform: "translateY(1.6rem)" };
  };

  const renderContentArrow = () => {
    if (
      page.curPage !== urls.curPage[1] ||
      page.workSubPage === urls.workSubPage[2]
    )
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
        style={activeContainer()}
      >
        <div className="bar disabled" />
        <div className="bar active" style={{ width: style.workNavWidth }} />
        <div className="labels">
          <Link
            to={`/works/${page.workPage}/${urls.workSubPage[0]}`}
            className={`label landing a--opacity `}
            style={active(urls.workSubPage[0])}
          >
            <div className="box" />
            <span
              className="a--opacity--m"
              style={activeSpan(urls.workSubPage[0])}
            >
              {/* {console.log(page?.workPage?.split("-").join(" "))} */}
              {/* {page?.workPage} */}
            </span>
          </Link>
          <Link
            // className={`label detail a--opacity ${activeClass()}`}
            to={`/works/${page.workPage}/${urls.workSubPage[1]}`}
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
            to={`/works/${page.workPage}/${urls.workSubPage[2]}`}
            // className={`label more a--opacity ${activeClass()}`}
            className={`label gallery a--opacity `}
            style={active(urls.workSubPage[2])}
          >
            <div className="box" />
            <span
              className="a--opacity--m"
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

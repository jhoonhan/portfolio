import React, { useRef, useState, useEffect } from "react";
import MiddleLine from "./helpers/MiddleLine";
import { Link } from "react-router-dom";
import icons from "../assests/image/icons.svg";
import throttle from "./helpers/throttle";

const Header = ({ refs, pageControl }) => {
  const [curScroll, setCurScroll] = useState(window.pageYOffset);
  const [direction, setDirection] = useState(false);
  const [activeHeight, setActiveHeight] = useState("0rem");

  const refNav = useRef(null);
  const refNavHome = useRef(null);
  const refNavWorks = useRef(null);
  const refNavAbout = useRef(null);
  const refNavContact = useRef(null);

  // useEffect(() => {
  //   console.log(refMain.current.offsetHeight);
  // }, []);

  useEffect(() => {
    const innerHeight = window.innerHeight;
    // const totalHeight = document.body.scrollHeight;
    if (innerHeight > curScroll + innerHeight / 2)
      pageControl.setCurPage("home");
    if (innerHeight <= curScroll + innerHeight / 2)
      pageControl.setCurPage("works");
    if (innerHeight * 2 <= curScroll + innerHeight / 2)
      pageControl.setCurPage("about");
    if (innerHeight * 3 - 10 <= curScroll + innerHeight / 2)
      pageControl.setCurPage("contact");
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.deltaY >= 0) {
        setDirection("down");
      } else {
        setDirection("up");
      }
    };
    const throttled = throttle(handler, 1);

    document.addEventListener("wheel", throttle(throttled, 1), false);

    return () => {
      document.removeEventListener("wheel", throttled);
    };
  }, []);

  useEffect(() => {
    const fn = () => {
      setCurScroll(Math.abs(refs.refHome.current.getBoundingClientRect().top));
    };
    refs.refMain.current.addEventListener("scroll", throttle(fn, 60));

    return () => {
      window.removeEventListener("scroll", throttle(fn, 60));
    };
  }, []);

  useEffect(() => {
    if (pageControl.curPage === "home") {
      setActiveHeight("0rem");
    }
    if (pageControl.curPage === "works") {
      if (pageControl.workPage === 0) setActiveHeight("10rem");
      if (pageControl.workPage === 1) setActiveHeight("13.2rem");
      if (pageControl.workPage === 2) setActiveHeight("16.4rem");
      if (pageControl.workPage === 3) setActiveHeight("19.6rem");
      if (pageControl.workPage === 4) setActiveHeight("22.8rem");
    }
    if (pageControl.curPage === "about") {
      setActiveHeight("20rem");
    }
    if (pageControl.curPage === "contact") {
      setActiveHeight("30rem");
    }
  }, [pageControl.workPage, pageControl.curPage]);

  const render = () => {
    const activeOpacity = { opacity: 1 };
    const activeSubPageStyle = { opacity: 1 };

    return (
      <header className="header__container">
        <div
          className="nav__container"
          style={
            pageControl.curPage === "works"
              ? { height: `43.2rem` }
              : { height: `31.2rem` }
          }
        >
          <div className="scroll-status__container">
            <div className="scroll-status--disabled"></div>
            <div
              className="scroll-status--active"
              style={{ maxHeight: `${activeHeight}` }}
            ></div>
            <div
              style={{ transform: `translateY(${activeHeight})` }}
              className="scroll-status--boxes"
            >
              <span></span>
            </div>
          </div>
          <nav className="nav" ref={refNav}>
            <div className="nav__link home" ref={refNavHome}>
              <Link
                onClick={() => {
                  pageControl.setCurPage("home");
                }}
                className="a--transition a--opacity"
                style={pageControl.curPage === "home" ? activeOpacity : {}}
                to="/"
              >
                home
              </Link>
            </div>
            <div className="nav__link works" ref={refNavWorks}>
              <Link
                onClick={() => {
                  pageControl.setCurPage("works");
                  setActiveHeight("10rem");
                }}
                to="/works/sushi-republic"
                style={pageControl.curPage === "works" ? activeOpacity : {}}
                className="a--transition a--opacity"
              >
                works
              </Link>
              <ul
                className="nav__sublinks"
                style={
                  pageControl.curPage !== "works"
                    ? { maxHeight: "0", opacity: 0 }
                    : {}
                }
              >
                <li
                  onClick={() => {
                    pageControl.setWorkPage(1);
                  }}
                >
                  <Link
                    to="/works/sushi-republic"
                    style={pageControl.workPage === 1 ? activeSubPageStyle : {}}
                  >
                    Sushi Republic
                  </Link>
                </li>
                <li
                  onClick={() => {
                    pageControl.setWorkPage(2);
                  }}
                >
                  <Link
                    to="/works/danji"
                    style={pageControl.workPage === 2 ? activeSubPageStyle : {}}
                  >
                    Danji
                  </Link>
                </li>
                <li
                  onClick={() => {
                    // setActiveHeight("19.6rem");
                    pageControl.setWorkPage(3);
                  }}
                >
                  <Link
                    to="/works/haans-cleaners"
                    style={pageControl.workPage === 3 ? activeSubPageStyle : {}}
                  >
                    Haans Cleaners
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setActiveHeight("22.8rem");
                    pageControl.setWorkPage(4);
                  }}
                >
                  <Link
                    to="/works/this-is-bullshit"
                    style={pageControl.workPage === 4 ? activeSubPageStyle : {}}
                  >
                    This Is Bullshit
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setActiveHeight("26rem");
                    pageControl.setWorkPage(5);
                  }}
                >
                  <Link
                    to="/works/salvation-army"
                    style={pageControl.workPage === 5 ? activeSubPageStyle : {}}
                  >
                    Salvation Army
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav__link about" ref={refNavAbout}>
              <Link to="/about" className="a--transition a--opacity">
                about
              </Link>
            </div>
            <div className="nav__link contact" ref={refNavContact}>
              <Link to="/contact" className="a--transition a--opacity">
                contact
              </Link>
            </div>
          </nav>
        </div>
        <div className="icons__container">
          <svg viewBox="0 0 100 100" className="social-icons a--opacity">
            <use href={`${icons}#github`}></use>
          </svg>
          <svg viewBox="0 0 100 100" className="social-icons a--opacity">
            <use href={`${icons}#linkedin`}></use>
          </svg>
          <svg viewBox="0 0 100 100" className="social-icons a--opacity">
            <use href={`${icons}#instagram`}></use>
          </svg>
          <svg viewBox="0 0 100 100" className="social-icons a--opacity">
            <use href={`${icons}#cv`}></use>
          </svg>
        </div>
      </header>
    );
  };
  return render();
};

export default Header;

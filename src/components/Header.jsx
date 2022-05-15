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

  // useEffect(() => {
  //   const innerHeight = window.innerHeight;
  //   // const totalHeight = document.body.scrollHeight;
  //   if (innerHeight > curScroll + innerHeight / 2)
  //     pageControl.setCurPage("home");
  //   if (innerHeight <= curScroll + innerHeight / 2)
  //     pageControl.setCurPage("works");
  //   if (innerHeight * 2 <= curScroll + innerHeight / 2)
  //     pageControl.setCurPage("about");
  //   if (innerHeight * 3 - 10 <= curScroll + innerHeight / 2)
  //     pageControl.setCurPage("contact");
  // }, []);

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
      if (pageControl.workPage === "sushi-republic") setActiveHeight("13.2rem");
      if (pageControl.workPage === "danji") setActiveHeight("16.4rem");
      if (pageControl.workPage === "salvation-army") setActiveHeight("19.6rem");
      if (pageControl.workPage === "haans-cleaner") setActiveHeight("22.8rem");
      if (pageControl.workPage === "this-is-bullshit")
        setActiveHeight("22.8rem");
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
                  pageControl.setWorkPage("sushi-republic");
                }}
                to="/works/sushi-republic/landing"
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
                <li>
                  <Link
                    to="/works/sushi-republic/landing"
                    style={
                      pageControl.workPage === "sushi-republic"
                        ? activeSubPageStyle
                        : {}
                    }
                  >
                    Sushi Republic
                  </Link>
                </li>
                <li>
                  <Link
                    to="/works/danji/landing"
                    style={
                      pageControl.workPage === "danji" ? activeSubPageStyle : {}
                    }
                  >
                    Danji
                  </Link>
                </li>
                <li>
                  <Link
                    to="/works/salvation-army/landing"
                    style={
                      pageControl.workPage === "salvation-army"
                        ? activeSubPageStyle
                        : {}
                    }
                  >
                    Salvation Army
                  </Link>
                </li>
                <li>
                  <Link
                    to="/works/haans-cleaner/landing"
                    style={
                      pageControl.workPage === "haans-cleaner"
                        ? activeSubPageStyle
                        : {}
                    }
                  >
                    Haans Cleaner
                  </Link>
                </li>
                <li>
                  <Link
                    to="/works/this-is-bullshit/landing"
                    style={
                      pageControl.workPage === "this-is-bullshit"
                        ? activeSubPageStyle
                        : {}
                    }
                  >
                    This is Bullshit
                  </Link>
                </li>
              </ul>
            </div>

            <div className="nav__link about" ref={refNavAbout}>
              <Link
                to="/about"
                className="a--transition a--opacity"
                style={pageControl.curPage === "about" ? activeOpacity : {}}
              >
                about
              </Link>
            </div>

            <div className="nav__link contact" ref={refNavContact}>
              <Link
                to="/contact"
                className="a--transition a--opacity"
                style={pageControl.curPage === "contact" ? activeOpacity : {}}
              >
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

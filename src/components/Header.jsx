import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { isBrowser, isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import icons from "../assests/image/icons.svg";
import throttle from "./helpers/throttle";

const Header = ({ refs, pageControl }) => {
  const [activeHeight, setActiveHeight] = useState("0rem");
  const [mobileShowNav, setMobileShowNav] = useState(false);

  const refNav = useRef(null);
  const refNavHome = useRef(null);
  const refNavWorks = useRef(null);
  const refNavAbout = useRef(null);
  const refNavContact = useRef(null);

  const activeOpacity = { opacity: 1 };
  const activeSubPageStyle = { opacity: 1 };

  useEffect(() => {
    if (pageControl.curPage === "home") {
      setActiveHeight("0rem");
    }
    if (pageControl.curPage === "works") {
      if (pageControl.workPage === "sushi-republic") setActiveHeight("13.4rem");
      if (pageControl.workPage === "danji") setActiveHeight("16.8rem");
      if (pageControl.workPage === "salvation-army") setActiveHeight("20.2rem");
      if (pageControl.workPage === "haans-cleaner") setActiveHeight("23.6rem");
      if (pageControl.workPage === "this-is-bullshit")
        setActiveHeight("22.8rem");
    }
    if (pageControl.curPage === "about") {
      setActiveHeight("20rem");
    }
    if (pageControl.curPage === "contact") {
      setActiveHeight("30rem");
    }
    setMobileShowNav(false);
  }, [pageControl.workPage, pageControl.curPage, pageControl.workSubPage]);

  const renderMobileOverlay = () => {
    return (
      <motion.div
        className="m--nav__overlay"
        onClick={() => setMobileShowNav(!mobileShowNav)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
    );
  };

  const condiNavContainerStyle = () => {
    let style = {};
    if (pageControl.curPage === "works") {
      style.height = "43.2rem";
    } else {
      style.height = "31.2rem";
    }
    if (isMobile && mobileShowNav) {
      style.transform = "translateX(5vw)";
    } else {
      style.transform = "translateX(0vw)";
    }
    return style;
  };

  const renderNavLinks = () => {
    return (
      <>
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
      </>
    );
  };

  const render = () => {
    return (
      <header className="header__container">
        <AnimatePresence>
          {isMobile && mobileShowNav ? renderMobileOverlay() : ""}
        </AnimatePresence>
        <div
          className="m--nav__toggle"
          onClick={() => setMobileShowNav(!mobileShowNav)}
        >
          {mobileShowNav ? "X" : "O"}
        </div>
        <div className="nav__container" style={condiNavContainerStyle()}>
          <div
            className="scroll-status__container"
            onClick={() => setMobileShowNav(!mobileShowNav)}
          >
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
          <AnimatePresence>
            {isMobile && mobileShowNav && (
              <motion.nav
                className="nav"
                ref={refNav}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {renderNavLinks()}
              </motion.nav>
            )}
            {isBrowser && (
              <nav className="nav" ref={refNav}>
                {renderNavLinks()}
              </nav>
            )}
          </AnimatePresence>
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

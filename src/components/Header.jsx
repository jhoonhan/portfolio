import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { isBrowser, isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import icons from "../assests/image/icons.svg";
import { transition } from "./helpers/config";
import { color } from "./helpers/config";

const Header = ({ refs, pageControl }) => {
  const [activeHeight, setActiveHeight] = useState("0rem");
  const [expandWorkNav, setExpandWorkNav] = useState(false);

  const { urls, curPage, workPage, setWorkPage, workSubPage } = pageControl;

  const refNav = useRef(null);
  const refNavHome = useRef(null);
  const refNavWorks = useRef(null);
  const refNavAbout = useRef(null);
  const refNavContact = useRef(null);

  // const activeStyle = { opacity: 1 };
  const activeStyle = { color: color.primary, opacity: 1 };

  // const activeSubPageStyle = { opacity: 1 };
  const activeSubPageStyle = { color: color.primary, opacity: 1 };

  useEffect(() => {
    if (curPage === urls.curPage[0]) {
      setActiveHeight("0rem");
    }
    if (curPage === urls.curPage[1]) {
      if (workPage === urls.workPage[0]) setActiveHeight("13.4rem");
      if (workPage === urls.workPage[1]) setActiveHeight("16.8rem");
      if (workPage === urls.workPage[2]) setActiveHeight("20.2rem");
      if (workPage === urls.workPage[3]) setActiveHeight("23.6rem");
      if (workPage === urls.workPage[4]) setActiveHeight("27rem");
    }
    if (curPage === urls.curPage[2]) {
      setActiveHeight("20rem");
    }
    if (curPage === urls.curPage[3]) {
      setActiveHeight("30rem");
    }
    if (curPage !== urls.curPage[1]) {
      setExpandWorkNav(false);
      setWorkPage(null);
    }

    pageControl.setMobileShowNav(false);
  }, [workPage, curPage, workSubPage]);

  useEffect(() => {
    if (expandWorkNav) setActiveHeight("10rem");
  }, [expandWorkNav]);

  const renderMobileOverlay = () => {
    return (
      <motion.div
        className="m--nav__overlay"
        onClick={() => pageControl.setMobileShowNav(!pageControl.mobileShowNav)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: transition.default }}
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
    if (curPage === urls.curPage[1]) {
      style.height = "43.2rem";
    } else if (expandWorkNav) {
      style.height = "43.2rem";
    } else {
      style.height = "31.2rem";
    }
    if (isMobile && pageControl.mobileShowNav) {
      style.transform = "translateX(5vw)";
    } else {
      style.transform = "translateX(0vw)";
    }
    return style;
  };

  const handleWorkClick = () => {
    setExpandWorkNav(true);
  };

  const renderNavLinks = () => {
    return (
      <>
        <div className="nav__link home" ref={refNavHome}>
          <Link
            className={`a--transition a--opacity ${
              curPage === urls.curPage[0] ? "active--text" : {}
            }`}
            style={curPage === urls.curPage[0] ? activeStyle : {}}
            to="/"
          >
            home
          </Link>
        </div>
        <div className="nav__link works" ref={refNavWorks}>
          <span
            onClick={handleWorkClick}
            className={`a--transition a--opacity ${
              curPage === urls.curPage[1] ? "active--text" : {}
            }`}
          >
            works
          </span>
          <ul
            className="nav__sublinks"
            style={
              curPage !== urls.curPage[1] && !expandWorkNav
                ? { maxHeight: "0", opacity: 0 }
                : {}
            }
          >
            <li>
              <Link
                to="/works/sushi-republic/landing"
                className={workPage === urls.workPage[0] ? "active--text" : ""}
              >
                Sushi Republic
              </Link>
            </li>
            <li>
              <Link
                to="/works/danji/landing"
                className={workPage === urls.workPage[1] ? "active--text" : ""}
              >
                Danji
              </Link>
            </li>
            <li>
              <Link
                to="/works/salvation-army/landing"
                className={workPage === urls.workPage[2] ? "active--text" : ""}
              >
                Salvation Army
              </Link>
            </li>
            <li>
              <Link
                to="/works/haans-cleaner/landing"
                className={workPage === urls.workPage[3] ? "active--text" : ""}
              >
                Haans Cleaner
              </Link>
            </li>
            <li>
              <Link
                to="/works/this-is-bullshit/landing"
                className={workPage === urls.workPage[4] ? "active--text" : ""}
              >
                This is Bullshit
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__link about" ref={refNavAbout}>
          <Link
            to="/about"
            className={`a--transition a--opacity ${
              curPage === urls.curPage[2] ? "active--text" : {}
            }`}
          >
            about
          </Link>
        </div>
        <div className="nav__link contact" ref={refNavContact}>
          <Link
            to="/contact"
            className={`a--transition a--opacity ${
              curPage === urls.curPage[3] ? "active--text" : {}
            }`}
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
          {isMobile && pageControl.mobileShowNav ? renderMobileOverlay() : ""}
        </AnimatePresence>
        <div
          className="m--nav__toggle"
          onClick={() =>
            pageControl.setMobileShowNav(!pageControl.mobileShowNav)
          }
        >
          {pageControl.mobileShowNav ? "X" : "O"}
        </div>
        <div className="nav__container" style={condiNavContainerStyle()}>
          <div
            className="scroll-status__container"
            onClick={() =>
              pageControl.setMobileShowNav(!pageControl.mobileShowNav)
            }
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
            {isMobile && pageControl.mobileShowNav && (
              <motion.nav
                className="nav"
                ref={refNav}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: transition.default }}
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

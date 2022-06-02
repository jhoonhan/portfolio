import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { isBrowser, isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import icons from "../assests/image/icons.svg";
import { transition } from "./helpers/config";
import { color } from "./helpers/config";

const Header = ({ pageControl }) => {
  const [activeHeight, setActiveHeight] = useState("0rem");
  const [expandWorkNav, setExpandWorkNav] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(true);

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
      urls.workPage.forEach((page, i) => {
        if (workPage === page) setActiveHeight(`${10 + 3.4 * (i + 1)}rem`);
      });
    }
    if (curPage === urls.curPage[2]) {
      setActiveHeight("20.1rem");
    }
    if (curPage === urls.curPage[3]) {
      setActiveHeight("30.1rem");
    }
    if (curPage !== urls.curPage[1]) {
      setExpandWorkNav(false);
      setWorkPage(null);
    }

    pageControl.setMobileShowNav(false);
  }, [workPage, curPage, workSubPage]);

  useEffect(() => {
    if (expandWorkNav) {
      setActiveHeight("10.1rem");
      setShowSocialIcons(false);
    }
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
    const defaultHeigth = "31.2rem";
    const workExpandedHeight = `${
      31.2 + 2 + (urls.workPage.length - 2) * 3.4
    }rem`;
    let style = {};
    if (curPage === urls.curPage[1]) {
      style.height = workExpandedHeight;
    } else if (expandWorkNav) {
      style.height = workExpandedHeight;
    } else {
      style.height = defaultHeigth;
    }
    if (isMobile && pageControl.mobileShowNav) {
      style.transform = "translateX(5vw)";
    } else {
      style.transform = "translateX(0vw)";
    }
    return style;
  };

  const renderWorkLinks = urls.workPage.map((page, i) => {
    const pageName = page.split("-").join(" ");
    return (
      <li key={i}>
        <Link
          onClick={() => pageControl.setMobileShowNav(false)}
          to={`/works/${page}/landing`}
          className={workPage === urls.workPage[i] ? "active--text" : ""}
        >
          {pageName}
        </Link>
      </li>
    );
  });
  const renderNavLinks = () => {
    return (
      <>
        <div className="nav__link home" ref={refNavHome}>
          <Link
            onClick={() => pageControl.setMobileShowNav(false)}
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
            onClick={() => setExpandWorkNav(true)}
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
            {renderWorkLinks}
          </ul>
        </div>
        <div className="nav__link about" ref={refNavAbout}>
          <Link
            onClick={() => pageControl.setMobileShowNav(false)}
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
            onClick={() => pageControl.setMobileShowNav(false)}
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

  const renderSocialIcons = () => {
    return (
      <div className="icons__container">
        <a
          href="https://github.com/jhoonhan"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg viewBox="0 0 100 100" className="social-icons a--opacity">
            <use href={`${icons}#github`}></use>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/joe-han-a45087121/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg viewBox="0 0 100 100" className="social-icons a--opacity">
            <use href={`${icons}#linkedin`}></use>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/jhoon.han/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg viewBox="0 0 100 100" className="social-icons a--opacity">
            <use href={`${icons}#instagram`}></use>
          </svg>
        </a>
        <a
          href="https://github.com/jhoonhan"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg viewBox="0 0 100 100" className="social-icons a--opacity">
            <use href={`${icons}#cv`}></use>
          </svg>
        </a>
      </div>
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
        {renderSocialIcons()}
      </header>
    );
  };
  return render();
};

export default Header;

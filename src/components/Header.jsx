import React, { useRef, useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { isBrowser, isMobile } from "react-device-detect";
import { PageContext } from "../App";
import { Link } from "react-router-dom";
import icons from "../assests/image/icons.svg";
import { transition } from "./helpers/config";
import { color } from "./helpers/config";
import cv from "../assests/files/cv.pdf";

const Header = () => {
  const { urls, page, mobile } = useContext(PageContext);

  const [activeHeight, setActiveHeight] = useState("0rem");
  const [expandWorkNav, setExpandWorkNav] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(true);

  const refNav = useRef(null);
  const refNavHome = useRef(null);
  const refNavWorks = useRef(null);
  const refNavAbout = useRef(null);
  const refNavContact = useRef(null);

  // const activeStyle = { opacity: 1 };
  const activeStyle = { color: color.primary, opacity: 1 };

  // const activeSubPageStyle = { opacity: 1 };
  // const activeSubPageStyle = { color: color.primary, opacity: 1 };

  useEffect(() => {
    if (page.curPage === urls.curPage[0]) {
      setActiveHeight("0rem");
    }
    if (page.curPage === urls.curPage[1]) {
      urls.workPage.forEach((pageEl, i) => {
        if (page.workPage === pageEl)
          setActiveHeight(`${10 + 3.4 * (i + 1)}rem`);
      });
    }
    if (page.curPage === urls.curPage[2]) {
      setActiveHeight("20.1rem");
    }
    if (page.curPage === urls.curPage[3]) {
      setActiveHeight("30.1rem");
    }
    if (page.curPage !== urls.curPage[1]) {
      setExpandWorkNav(false);
      page.setWorkPage(null);
    }

    mobile.setMobileShowNav(false);
  }, [page.workPage, page.curPage, page.workSubPage]);

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
        onClick={() => mobile.setMobileShowNav(!mobile.mobileShowNav)}
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
    if (page.curPage === urls.curPage[1]) {
      style.height = workExpandedHeight;
    } else if (expandWorkNav) {
      style.height = workExpandedHeight;
    } else {
      style.height = defaultHeigth;
    }
    if (isMobile && mobile.mobileShowNav) {
      style.transform = "translateX(5vw)";
    } else {
      style.transform = "translateX(0vw)";
    }
    return style;
  };

  const renderWorkLinks = urls.workPage.map((pageEl, i) => {
    const pageName = pageEl.split("-").join(" ");
    return (
      <li key={i}>
        <Link
          onClick={() => mobile.setMobileShowNav(false)}
          to={`/works/${pageEl}/landing`}
          className={page.workPage === urls.workPage[i] ? "active--text" : ""}
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
            onClick={() => mobile.setMobileShowNav(false)}
            className={`a--transition a--opacity ${
              page.curPage === urls.curPage[0] ? "active--text" : {}
            }`}
            style={page.curPage === urls.curPage[0] ? activeStyle : {}}
            to="/"
          >
            home
          </Link>
        </div>
        <div className="nav__link works" ref={refNavWorks}>
          <span
            onClick={() => setExpandWorkNav(true)}
            className={`a--transition a--opacity ${
              page.curPage === urls.curPage[1] ? "active--text" : {}
            }`}
          >
            works
          </span>
          <ul
            className="nav__sublinks"
            style={
              page.curPage !== urls.curPage[1] && !expandWorkNav
                ? { maxHeight: "0", opacity: 0 }
                : {}
            }
          >
            {renderWorkLinks}
          </ul>
        </div>
        <div className="nav__link about" ref={refNavAbout}>
          <Link
            onClick={() => mobile.setMobileShowNav(false)}
            to="/about"
            className={`a--transition a--opacity ${
              page.curPage === urls.curPage[2] ? "active--text" : {}
            }`}
          >
            about
          </Link>
        </div>
        <div className="nav__link contact" ref={refNavContact}>
          <Link
            onClick={() => mobile.setMobileShowNav(false)}
            to="/contact"
            className={`a--transition a--opacity ${
              page.curPage === urls.curPage[3] ? "active--text" : {}
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
        <a href={cv} target="_blank" rel="noreferrer noopener">
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
          {isMobile && mobile.mobileShowNav ? renderMobileOverlay() : ""}
        </AnimatePresence>
        <div
          className="m--nav__toggle"
          onClick={() => mobile.setMobileShowNav(!mobile.mobileShowNav)}
        >
          {mobile.mobileShowNav ? "X" : "O"}
        </div>
        <div className="nav__container" style={condiNavContainerStyle()}>
          <div
            className="scroll-status__container"
            onClick={() => mobile.setMobileShowNav(!mobile.mobileShowNav)}
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
            {isMobile && mobile.mobileShowNav && (
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

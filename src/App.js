import React, { useEffect, useRef, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { isMobile } from "react-device-detect";

import Header from "./components/Header";
import Landing from "./components/landing/Landing";
import Works from "./components/works/Works";
import About from "./components/about/About";

import useListenSwipe from "./components/helpers/useListenSwipe";

import "./scss/App.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/Cursor";

let windowInnerWidth = 0;

const App = () => {
  const location = useLocation();

  const handleResize = () => {
    const currentWindowInnerWidth = window.innerWidth;
    if (
      windowInnerWidth === 0 ||
      currentWindowInnerWidth !== windowInnerWidth
    ) {
      windowInnerWidth = currentWindowInnerWidth;
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
      );
    }
  };
  handleResize();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const [curPage, setCurPage] = useState(null);
  const [workPage, setWorkPage] = useState(null);
  const [workSubPage, setWorkSubPage] = useState("landing");

  const [activeSubPageStylePosition, setActiveSubPageStylePosition] = useState({
    transform: "translateY(0vh)",
  });
  const [workNavWidth, setWorkNavWidth] = useState(0);
  const [slideScroll, setSlideScroll] = useState(0);
  const [mobileShowNav, setMobileShowNav] = useState(false);

  const [showCursor, setShowCursor] = useState(false);

  const {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    touchAction,
    setTouchAction,
    stickySlide,
  } = useListenSwipe();

  useEffect(() => {
    setTouchAction({
      left: false,
      right: false,
      top: false,
      bottom: false,
    });
  }, [curPage, workPage, workSubPage]);

  const refMain = useRef(null);
  const refHome = useRef(null);
  const refWorks = useRef(null);
  const refAbout = useRef(null);
  const refContact = useRef(null);

  const refs = {
    refMain,
    refHome,
    refWorks,
    refAbout,
    refContact,
  };

  const urls = {
    curPage: ["home", "works", "about", "contact"],
    workPage: [
      "sushi-republic",
      "this-is-bullshit",
      "haans-cleaner",
      "salvation-army",
      "korean-life",
      "danji",
      "little-tokyo",
      "jk-aerostart",
    ],
    workSubPage: ["landing", "overview", "gallery"],
  };

  const pageControl = {
    urls,
    curPage,
    setCurPage,
    workPage,
    setWorkPage,
    workSubPage,
    setWorkSubPage,
    mobileShowNav,
    setMobileShowNav,
    activeSubPageStylePosition,
    setActiveSubPageStylePosition,
    workNavWidth,
    setWorkNavWidth,
    slideScroll,
    setSlideScroll,
    showCursor,
    setShowCursor,
    touch: {
      action: touchAction,
      sticky: stickySlide,
    },
  };

  const transtionAnimation = () => {
    if (isMobile) return null;
    return (
      <motion.div
        className="transition-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* <h1 style={{ color: "white" }}></h1> */}
      </motion.div>
    );
  };

  const render = () => {
    const transitionPageLocation = location.pathname
      .split("/")
      .slice(1, 3)
      .join("/");
    return (
      <div
        className="app"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Header refs={refs} urls={urls} pageControl={pageControl} />
        <Cursor show={showCursor} />
        <main ref={refMain} className="wrapper__main">
          <div
            style={curPage === "home" ? { opacity: 0 } : {}}
            className="overlay"
          />

          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={transitionPageLocation}>
              <Route
                path="/"
                exact
                render={(props) => (
                  <>
                    {transtionAnimation()}
                    <Landing
                      pageControl={pageControl}
                      curPage={curPage}
                      refHome={refHome}
                      props={props}
                    />
                  </>
                )}
              />
              <Route
                path="/works"
                render={(props) => (
                  <>
                    {transtionAnimation()}

                    <Works
                      refs={refs}
                      pageControl={pageControl}
                      props={props}
                    />
                  </>
                )}
              />
              <Route
                path="/about"
                exact
                render={(props) => (
                  <>
                    {transtionAnimation()}

                    <About
                      pageControl={pageControl}
                      refs={refs}
                      props={props}
                    />
                  </>
                )}
              />
              <Route
                path="/contact"
                exact
                render={(props) => (
                  <>
                    {transtionAnimation()}
                    <Contact
                      pageControl={pageControl}
                      refs={refs}
                      props={props}
                    />
                  </>
                )}
              />
            </Switch>
          </AnimatePresence>
        </main>
      </div>
    );
  };
  return render();
};

export default App;

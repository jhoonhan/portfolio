import React, { useEffect, useRef, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { isMobile } from "react-device-detect";

import Header from "./components/Header";
import Landing from "./components/landing/Landing";
import Works from "./components/works/Works";
import About from "./components/about/About";
import NotFound from "./components/NotFound";

import useListenSwipe from "./components/helpers/useListenSwipe";

import "./scss/App.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/Cursor";

let windowInnerWidth = 0;

export const PageContext = React.createContext();

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

  const [cursor, setCursor] = useState({ show: false, type: "scroll" });

  // Touch action control
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

  // Theme control
  const [theme, setTheme] = useState({ color: "black", subColor: "white" });
  const [prevTheme, setPrevTheme] = useState({
    color: "black",
    subColor: "white",
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme.color);
    document.documentElement.setAttribute("data-subtheme", theme.subColor);
    setPrevTheme(theme);
  }, [theme]);

  // Refs
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

  const contextValues = {
    urls: {
      curPage: ["home", "works", "about", "contact", "notfound"],
      workPage: [
        "sushi-republic",
        "haans-cleaner",
        "this-is-bullshit",
        "salvation-army",
        "korean-life",
        "jk-aerostart",
        "danji",
        "little-tokyo",
      ],
      workSubPage: ["landing", "overview", "gallery"],
    },
    page: {
      curPage,
      setCurPage,
      workPage,
      setWorkPage,
      workSubPage,
      setWorkSubPage,
    },
    theme: {
      theme,
      setTheme,
      prevTheme,
      setPrevTheme,
    },
    mobile: {
      mobileShowNav,
      setMobileShowNav,
    },
    style: {
      activeSubPageStylePosition,
      setActiveSubPageStylePosition,
      workNavWidth,
      setWorkNavWidth,
      slideScroll,
      setSlideScroll,
      cursor,
      setCursor,
    },
    touch: {
      action: touchAction,
      sticky: stickySlide,
    },
  };

  useEffect(() => {
    console.log(contextValues.page.curPage);
  }, [contextValues.page.curPage]);

  const transtionAnimation = () => {
    if (isMobile) return null;
    return null;
    // <motion.div
    //   className="transition-overlay"
    //   initial={{ y: "0vh" }}
    //   animate={{ y: "100vh" }}
    //   exit={{ y: "0vh" }}
    //   transition={{ duration: 0.7 }}
    // >
    //   {/* <h1 style={{ color: "white" }}></h1> */}
    // </motion.div>
  };

  const render = () => {
    const transitionPageLocation = location.pathname
      .split("/")
      .slice(1, 3)
      .join("/");
    return (
      <PageContext.Provider value={contextValues}>
        <div
          className="app"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <Header />
          <Cursor cursor={cursor} />
          <main ref={refMain} className="wrapper__main">
            {/* <div
            style={curPage === "home" ? { opacity: 0 } : {}}
            className="overlay"
          /> */}

            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={transitionPageLocation}>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <>
                      {transtionAnimation()}
                      <Landing
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

                      <Works refs={refs} props={props} />
                    </>
                  )}
                />
                <Route
                  path="/about"
                  exact
                  render={(props) => (
                    <>
                      {transtionAnimation()}

                      <About refs={refs} props={props} />
                    </>
                  )}
                />
                <Route
                  path="/contact"
                  exact
                  render={(props) => (
                    <>
                      {transtionAnimation()}
                      <Contact refs={refs} props={props} />
                    </>
                  )}
                />
                <Route render={() => <NotFound />} />
              </Switch>
            </AnimatePresence>
          </main>
        </div>
      </PageContext.Provider>
    );
  };
  return render();
};

export default App;

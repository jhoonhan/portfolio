import React, { useEffect, useRef, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/landing/Landing";
import Works from "./components/works/Works";
import About from "./components/about/About";

import "./scss/App.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/Cursor";

let windowInnerWidth = 0;

const App = () => {
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
  const [workPage, setWorkPage] = useState(1);
  const [workSubPage, setWorkSubPage] = useState("workLanding");
  const [activeSubPageStylePosition, setActiveSubPageStylePosition] = useState({
    transform: "translateY(0vh)",
  });
  const [workNavWidth, setWorkNavWidth] = useState(0);
  const [slideScroll, setSlideScroll] = useState(0);

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

  const pageControl = {
    curPage,
    setCurPage,
    workPage,
    setWorkPage,
    workSubPage,
    setWorkSubPage,
    activeSubPageStylePosition,
    setActiveSubPageStylePosition,
    workNavWidth,
    setWorkNavWidth,
    slideScroll,
    setSlideScroll,
  };

  const render = () => {
    return (
      <div className="app">
        <Header refs={refs} pageControl={pageControl} />
        <Cursor curPage={curPage} />
        <main ref={refMain} className="wrapper__main">
          <div
            style={curPage === "home" ? { opacity: 0 } : {}}
            className="overlay"
          ></div>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Landing
                  pageControl={pageControl}
                  curPage={curPage}
                  refHome={refHome}
                  props={props}
                />
              )}
            />
            <Route
              path="/works"
              render={(props) => (
                <Works refs={refs} pageControl={pageControl} props={props} />
              )}
            />
            <Route
              path="/about"
              exact
              render={(props) => (
                <About pageControl={pageControl} refs={refs} props={props} />
              )}
            />
            <Route
              path="/contact"
              exact
              render={(props) => (
                <Contact pageControl={pageControl} refs={refs} props={props} />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  };
  return render();
};

export default App;

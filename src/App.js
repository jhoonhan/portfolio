import React, { useEffect, useRef, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/landing/Landing";
import LandingArt from "./components/landing/LandingArt";
import Works from "./components/works/Works";
import About from "./components/about/About";

import "./scss/App.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/Cursor";

const App = () => {
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
              render={() => <Landing curPage={curPage} refHome={refHome} />}
            />
            <Route
              path="/works"
              render={() => <Works refs={refs} pageControl={pageControl} />}
            />
            <Route path="/about" exact render={() => <About refs={refs} />} />
            <Route
              path="/contact"
              exact
              render={() => <Contact refs={refs} />}
            />
          </Switch>
        </main>
      </div>
    );
  };
  return render();
};

export default App;

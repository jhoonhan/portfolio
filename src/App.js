import React, { useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import Landing from "./components/landing/Landing";
import LandingArt from "./components/landing/LandingArt";
import Works from "./components/works/Works";
import About from "./components/about/About";
import Cursor from "./components/Cursor";

import "./scss/App.scss";
import Contact from "./components/contact/Contact";

const App = () => {
  const [curPage, setCurPage] = useState(null);
  const [workPage, setWorkPage] = useState("overview");
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
      <div className="App">
        <Header refs={refs} pageControl={pageControl} />
        <main ref={refMain} className="wrapper__main">
          <div
            style={curPage === "home" ? { opacity: 0 } : {}}
            className="overlay"
          ></div>
          <LandingArt curPage={curPage} />

          <Landing curPage={curPage} refHome={refHome} />
          <Works refs={refs} pageControl={pageControl} />
          <About refs={refs} />
          <Contact refs={refs} />
          <Cursor />
        </main>
      </div>
    );
  };
  return render();
};

export default App;

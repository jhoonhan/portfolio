import React, { useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import Landing from "./components/landing/Landing";
import LandingArt from "./components/landing/LandingArt";
import Works from "./components/works/Works";

import "./scss/App.scss";

const App = () => {
  const [curPage, setCurPage] = useState(null);

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

  const render = () => {
    return (
      <div className="App">
        <Header refs={refs} curPage={curPage} setCurPage={setCurPage} />
        <main ref={refMain} className="wrapper__main">
          <div
            style={curPage === "home" ? { opacity: 0 } : {}}
            className="overlay"
          ></div>
          <LandingArt />

          <Landing curPage={curPage} refHome={refHome} />
          <Works refWorks={refWorks} />
          <section ref={refAbout} className="container">
            about
          </section>
          <section ref={refContact} className="container">
            contact
          </section>
        </main>
      </div>
    );
  };
  return render();
};

export default App;

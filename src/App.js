import React, { useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import Landing from "./components/landing/Landing";
import LandingArt from "./components/landing/LandingArt";

import "./scss/App.scss";

const App = () => {
  const [curPage, setCurPage] = useState(null);

  const refMain = useRef(null);
  const refHome = useRef(null);
  const refWork = useRef(null);
  const refAbout = useRef(null);
  const refContact = useRef(null);

  const refs = {
    refMain,
    refHome,
    refWork,
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

          <Landing refHome={refHome} />
          <section ref={refWork} className="container">
            work
          </section>
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

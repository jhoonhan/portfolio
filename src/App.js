import React, { useEffect, useRef } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useContextValues from "./contexts/useContextValues";

import Header from "./components/Header";
import Landing from "./components/landing/Landing";
import Works from "./components/works/Works";
import About from "./components/about/About";
import NotFound from "./components/NotFound";

import useListenSwipe from "./components/helpers/useListenSwipe";
import useMobileFixedHeight from "./components/helpers/useMobileFixedHeight";

import "./scss/App.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/Cursor";

export const PageContext = React.createContext();

const App = () => {
  const location = useLocation();
  useMobileFixedHeight();
  const {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    touchAction,
    setTouchAction,
    stickySlide,
  } = useListenSwipe();

  const { contextValues } = useContextValues({
    action: touchAction,
    sticky: stickySlide,
  });
  const { page, theme: contextTheme, style } = contextValues;
  const { curPage, workPage, workSubPage } = page;
  const { theme, setPrevTheme } = contextTheme;

  useEffect(() => {
    setTouchAction({
      left: false,
      right: false,
      top: false,
      bottom: false,
    });
  }, [curPage, workPage, workSubPage, setTouchAction]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme.color);
    document.documentElement.setAttribute("data-subtheme", theme.subColor);
    setPrevTheme(theme);
  }, [theme, setPrevTheme]);

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
          <Cursor cursor={style.cursor} />
          <main ref={refMain} className="wrapper__main">
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={transitionPageLocation}>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Landing
                      curPage={curPage}
                      refHome={refHome}
                      props={props}
                    />
                  )}
                />
                <Route
                  path="/works"
                  render={(props) => <Works refs={refs} props={props} />}
                />
                <Route
                  path="/about"
                  exact
                  render={(props) => <About refs={refs} props={props} />}
                />
                <Route
                  path="/contact"
                  exact
                  render={(props) => <Contact refs={refs} props={props} />}
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

import React, { useState } from "react";

const PageContext = React.createContext();

const useContextValues = (touch) => {
  // URLS
  const urlContextValue = {
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
  };
  // Page Context
  const [curPage, setCurPage] = useState(null);
  const [workPage, setWorkPage] = useState(null);
  const [workSubPage, setWorkSubPage] = useState("landing");
  const pageContextValue = {
    curPage,
    setCurPage,
    workPage,
    setWorkPage,
    workSubPage,
    setWorkSubPage,
  };
  // Theme Context
  const [theme, setTheme] = useState({ color: "black", subColor: "white" });
  const [prevTheme, setPrevTheme] = useState({
    color: "black",
    subColor: "white",
  });
  const themeContextValue = {
    theme,
    setTheme,
    prevTheme,
    setPrevTheme,
  };
  // Style Context
  const [activeSubPageStylePosition, setActiveSubPageStylePosition] = useState({
    transform: "translateY(0vh)",
  });
  const [workNavWidth, setWorkNavWidth] = useState(0);
  const [slideScroll, setSlideScroll] = useState(0);
  const [cursor, setCursor] = useState({ show: false, type: "scroll" });
  const styleContextValue = {
    activeSubPageStylePosition,
    setActiveSubPageStylePosition,
    workNavWidth,
    setWorkNavWidth,
    slideScroll,
    setSlideScroll,
    cursor,
    setCursor,
  };

  // Mobile Context
  const [mobileShowNav, setMobileShowNav] = useState(false);

  const contextValues = {
    urls: { ...urlContextValue },
    page: { ...pageContextValue },
    theme: { ...themeContextValue },
    mobile: {
      mobileShowNav,
      setMobileShowNav,
    },
    style: { ...styleContextValue },
    touch: {
      action: touch.touchAction,
      sticky: touch.stickySlide,
    },
  };

  return { contextValues };
};

export default useContextValues;

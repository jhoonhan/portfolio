import { useState } from "react";

const useContextValues = (touch) => {
  // Page Context
  const [curPage, setCurPage] = useState(null);
  const [workPage, setWorkPage] = useState(null);
  const [workSubPage, setWorkSubPage] = useState("landing");
  // Theme Context
  const [theme, setTheme] = useState({ color: "black", subColor: "white" });
  const [prevTheme, setPrevTheme] = useState({
    color: "black",
    subColor: "white",
  });
  // Style Context
  const [activeSubPageStylePosition, setActiveSubPageStylePosition] = useState({
    transform: "translateY(0vh)",
  });
  const [workNavWidth, setWorkNavWidth] = useState(0);
  const [slideScroll, setSlideScroll] = useState(0);
  const [cursor, setCursor] = useState({ show: false, type: "scroll" });

  ////
  ////
  const urlContextValue = {
    curPage: ["home", "works", "about", "contact", "notfound"],
    workPage: [
      "haans-cleaner",
      "salvation-army",
      "this-is-bullshit",
      "sushi-republic",
      "jk-aerostart",
      "korean-life",
      "danji",
      "little-tokyo",
    ],
    workSubPage: ["landing", "overview", "gallery"],
  };
  const pageContextValue = {
    curPage,
    setCurPage,
    workPage,
    setWorkPage,
    workSubPage,
    setWorkSubPage,
  };
  const themeContextValue = {
    theme,
    setTheme,
    prevTheme,
    setPrevTheme,
  };
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
  const [mobileShowNav, setMobileShowNav] = useState(false);

  /////////////
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
      action: touch.action,
      sticky: touch.sticky,
    },
  };

  return { contextValues };
};

export default useContextValues;

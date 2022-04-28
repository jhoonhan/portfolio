import React, { useRef, useState, useEffect } from "react";
import MiddleLine from "../helpers/MiddleLine";
import icons from "../assests/image/icons.svg";
import throttle from "../helpers/throttle";

const Header = ({ refs, curPage, setCurPage }) => {
  const [onScroll, setOnScroll] = useState(true);
  const [curScroll, setCurScroll] = useState(window.pageYOffset);
  const [direction, setDirection] = useState(false);

  const refNav = useRef(null);

  // useEffect(() => {
  //   console.log(refMain.current.offsetHeight);
  // }, []);

  useEffect(() => {
    const innerHeight = window.innerHeight;
    // const totalHeight = document.body.scrollHeight;
    if (innerHeight > curScroll + innerHeight / 2) setCurPage("home");
    if (innerHeight <= curScroll + innerHeight / 2) setCurPage("works");
    if (innerHeight * 2 <= curScroll + innerHeight / 2) setCurPage("about");
    if (innerHeight * 3 - 10 <= curScroll + innerHeight / 2)
      setCurPage("contact");
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.deltaY >= 0) {
        setDirection("down");
      } else {
        setDirection("up");
      }
    };
    const throttled = throttle(handler, 1);

    document.addEventListener("mousewheel", throttle(throttled, 1), false);

    return () => {
      document.removeEventListener("mousewheel", throttled);
    };
  }, []);

  useEffect(() => {
    console.log(`aaang`);
  }, [curScroll]);

  useEffect(() => {
    const fn = () => {
      setCurScroll(Math.abs(refs.refHome.current.getBoundingClientRect().top));
    };
    refs.refMain.current.addEventListener("scroll", throttle(fn, 60));

    return () => {
      window.removeEventListener("scroll", throttle(fn, 60));
    };
  }, []);

  // useEffect(() => {
  //   console.log(direction);
  // }, [direction]);

  // const wheel = (e) => {
  //   setWheelWait(true);
  //   if (wheelWait) console.log(`cibal`);
  //   if (wheelWait === false) {
  //     // if (e.deltaY >= 0) {
  //     //   setDirection("down");
  //     // } else {
  //     //   setDirection("up");
  //     // }
  //     console.log(`wheel fired`);

  //     setTimeout(() => {
  //       setWheelWait(false);
  //     }, 1000);
  //   }
  // };

  const render = () => {
    const barHeight = (curScroll / (window.innerHeight * 3)) * 100;
    const activeFont = { opacity: 1 };
    // const activeBackground = { backgroundColor: "white" };
    // const activeHeight = { height: `calc(${barHeight}% - 0px)` };
    const activeHeight = () => {
      let height;
      if (curPage === "works") {
        height = `calc(${barHeight}% - 34px)`;
      } else {
        height = `calc(${barHeight}% - 0px)`;
      }
      return { height: height };
    };
    const activePosition = () => {
      let position;
      if (curPage === "works") {
        position = `translateY(calc(${barHeight}% - 34px))`;
      } else {
        position = `translateY(calc(${barHeight}% - 0px))`;
      }
      return { transform: position };
    };

    return (
      <header className="header__container">
        <div
          className="nav__container"
          style={
            curPage === "works" ? { height: `41.2rem` } : { height: `31.2rem` }
          }
        >
          <div className="scroll-status__container">
            <div className="scroll-status--disabled"></div>
            <div className="scroll-status--active" style={activeHeight()}></div>
            <div style={activePosition()} className="scroll-status--boxes">
              <span></span>
            </div>
          </div>
          <nav
            className="nav"
            ref={refNav}
            // style={
            //   curPage === "works"
            //     ? { gridTemplateRows: "10rem 20rem 10rem 1.4rem" }
            //     : { gridTemplateRows: "10rem 10rem 10rem 1.4rem" }
            // }
          >
            <div className="nav__link home">
              <a
                onClick={() => {
                  refs.refHome.current.scrollIntoView({ behavior: "smooth" });
                  setCurPage("home");
                }}
                className="a--transition a--opacity"
                style={curPage === "home" ? activeFont : {}}
                href="#home"
              >
                home
              </a>
            </div>
            <div className="nav__link works">
              <a
                onClick={() => {
                  refs.refWorks.current.scrollIntoView({ behavior: "smooth" });
                  setCurPage("works");
                }}
                href="#work"
                style={curPage === "works" ? activeFont : {}}
                className="a--transition a--opacity"
              >
                works
              </a>
              {/* <ul
                className="nav__sublinks"
                style={
                  curPage !== "works" ? { display: "none", opacity: 0 } : {}
                }
              >
                <li>Sushi Republic</li>
                <li>Danji</li>
                <li>Haans Cleaners</li>
                <li>This Is Bullshit</li>
                <li>Salvation Army</li>
              </ul> */}
            </div>
            <div className="nav__link about">
              <a
                onClick={() => {
                  refs.refAbout.current.scrollIntoView({ behavior: "smooth" });
                  setCurPage("about");
                }}
                href="#about"
                style={curPage === "about" ? activeFont : {}}
                className="a--transition a--opacity"
              >
                about
              </a>
            </div>
            <div className="nav__link contact">
              <a
                onClick={() => {
                  refs.refContact.current.scrollIntoView({
                    behavior: "smooth",
                  });
                  setCurPage("contact");
                }}
                href="#contact"
                style={curPage === "contact" ? activeFont : {}}
                className="a--transition a--opacity"
              >
                contact
              </a>
            </div>
          </nav>
        </div>
        <div className="icons__container">
          {/* <MiddleLine orientation={"vertical"} style={{ height: "20rem" }} /> */}
          <svg viewBox="0 0 100 100" className="social-icons a--opacity">
            <use href={`${icons}#github`}></use>
          </svg>
          <svg viewBox="0 0 100 100" className="social-icons a--opacity">
            <use href={`${icons}#linkedin`}></use>
          </svg>
          <svg viewBox="0 0 100 100" className="social-icons a--opacity">
            <use href={`${icons}#instagram`}></use>
          </svg>
          <svg viewBox="0 0 100 100" className="social-icons a--opacity">
            <use href={`${icons}#cv`}></use>
          </svg>
        </div>
      </header>
    );
  };
  return render();
};

export default Header;

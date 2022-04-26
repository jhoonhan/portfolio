import React, { useRef, useState, useEffect } from "react";
import MiddleLine from "../helpers/MiddleLine";
import icons from "../assests/image/icons.svg";
import throttle from "../helpers/throttle";

const Header = ({ refs, curPage, setCurPage }) => {
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
    if (innerHeight <= curScroll + innerHeight / 2) setCurPage("work");
    if (innerHeight * 2 <= curScroll + innerHeight / 2) setCurPage("about");
    if (innerHeight * 3 - 10 <= curScroll + innerHeight / 2)
      setCurPage("contact");
  }, [curScroll]);

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
    const activeFont = { color: "white" };
    // const activeBackground = { backgroundColor: "white" };
    const activeHeight = { height: `calc(${barHeight}% - 0px)` };
    const activePosition = {
      transform: `translateY(${barHeight}%)`,
    };

    return (
      <header className="header__container">
        <div className="nav__container">
          <div className="scroll-status__container">
            <div className="scroll-status--disabled"></div>
            <div className="scroll-status--active" style={activeHeight}></div>
            <div style={activePosition} className="scroll-status--boxes">
              <span></span>
            </div>
          </div>
          <nav className="nav" ref={refNav}>
            <div>
              <a
                onClick={() =>
                  refs.refHome.current.scrollIntoView({ behavior: "smooth" })
                }
                href="#home"
                style={curPage === "home" ? activeFont : {}}
              >
                home
              </a>
            </div>
            <div>
              <a
                onClick={() =>
                  refs.refWork.current.scrollIntoView({ behavior: "smooth" })
                }
                href="#work"
                style={curPage === "work" ? activeFont : {}}
              >
                work
              </a>
            </div>
            <div>
              <a
                onClick={() =>
                  refs.refAbout.current.scrollIntoView({ behavior: "smooth" })
                }
                href="#about"
                style={curPage === "about" ? activeFont : {}}
              >
                about
              </a>
            </div>
            <div>
              <a
                onClick={() =>
                  refs.refContact.current.scrollIntoView({ behavior: "smooth" })
                }
                href="#contact"
                style={curPage === "contact" ? activeFont : {}}
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

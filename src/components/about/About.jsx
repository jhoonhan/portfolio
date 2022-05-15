import React, { useEffect, useState, useRef } from "react";
import AboutImg from "./AboutImg";
import icons from "../../assests/image/icons.svg";

import ah0 from "../../assests/image/about/ah0.jpg";
import ah1 from "../../assests/image/about/ah1.jpg";
import ah2 from "../../assests/image/about/ah2.jpg";
import ah3 from "../../assests/image/about/ah3.jpg";
import ah4 from "../../assests/image/about/ah4.jpg";
import av0 from "../../assests/image/about/av0.jpg";
import av1 from "../../assests/image/about/av1.jpg";
import av2 from "../../assests/image/about/av2.jpg";
import hh0 from "../../assests/image/about/hh0.jpg";
import hh1 from "../../assests/image/about/hh1.jpg";
import hh2 from "../../assests/image/about/hh2.jpg";
import hh3 from "../../assests/image/about/hh3.jpg";
import hh4 from "../../assests/image/about/hh4.jpg";
import hh5 from "../../assests/image/about/hh5.jpg";
import hh6 from "../../assests/image/about/hh6.jpg";
import hv0 from "../../assests/image/about/hv0.jpg";
import hv1 from "../../assests/image/about/hv1.jpg";
import hv2 from "../../assests/image/about/hv2.jpg";
import hv3 from "../../assests/image/about/hv3.jpg";
import hv4 from "../../assests/image/about/hv4.jpg";
import hv5 from "../../assests/image/about/hv5.jpg";
import ph0 from "../../assests/image/about/ph0.jpg";
import ph1 from "../../assests/image/about/ph1.jpg";
import ph2 from "../../assests/image/about/ph2.jpg";
import ph3 from "../../assests/image/about/ph3.jpg";
import pv0 from "../../assests/image/about/pv0.jpg";
import pv1 from "../../assests/image/about/pv1.jpg";
import pv2 from "../../assests/image/about/pv2.jpg";
import pv3 from "../../assests/image/about/pv3.jpg";
import pv4 from "../../assests/image/about/pv4.jpg";
import pv5 from "../../assests/image/about/pv5.jpg";

import useIntersectionObserve from "../helpers/useIntersectionObserve";
import AboutSlide from "./AboutSlide";
import Cursor from "../Cursor";

const About = ({ pageControl, props, refs }) => {
  const [activeSlide, setActiveSlide] = useState(-1);
  const [activeSlideStyle, setActiveSlideStyle] = useState({
    slide0: { width: "100%" },
    slide1: { width: "100%" },
    slide2: { width: "100%" },
    slide3: { width: "100%" },
  });

  const [intersectingStyle, setIntersectingStyle] = useState({ opacity: 0.5 });
  const refInfo = useRef(null);

  const isIntersecting = useIntersectionObserve(refInfo, 0.8);

  useEffect(() => {
    pageControl.setCurPage(props.match.path.slice(1));
  }, [props.match.path]);

  useEffect(() => {
    if (isIntersecting) setIntersectingStyle({ opacity: 1 });
    if (!isIntersecting) setIntersectingStyle({ opacity: 0.5 });
  }, [isIntersecting]);

  useEffect(() => {
    if (activeSlide === -1) {
      setActiveSlideStyle({
        slide0: { width: "100%" },
        slide1: { width: "100%" },
        slide2: { width: "100%" },
        slide3: { width: "100%" },
      });
    }
    if (activeSlide === 0) {
      setActiveSlideStyle({
        slide0: { width: "115%" },
        slide1: { width: "105%" },
        slide2: { width: "95%" },
        slide3: { width: "85%" },
      });
    }
    if (activeSlide === 1) {
      setActiveSlideStyle({
        slide0: { width: "100%" },
        slide1: { width: "115%" },
        slide2: { width: "100%" },
        slide3: { width: "85%" },
      });
    }
    if (activeSlide === 2) {
      setActiveSlideStyle({
        slide0: { width: "85%" },
        slide1: { width: "100%" },
        slide2: { width: "115%" },
        slide3: { width: "100%" },
      });
    }
    if (activeSlide === 3) {
      setActiveSlideStyle({
        slide0: { width: "85%" },
        slide1: { width: "95%" },
        slide2: { width: "105%" },
        slide3: { width: "115%" },
      });
    }
  }, [activeSlide]);

  const render = () => {
    return (
      <section ref={refs.refAbout} className="about__container container">
        <div
          className="about__slides-container"
          // onMouseOut={trigger}>
          onMouseOut={() => {
            setActiveSlide(-1);
          }}
        >
          <AboutSlide
            imgs={[ph3, av0, ah0, av2, ah4, av1, ah1]}
            style={activeSlideStyle.slide0}
            setActiveSlide={() => setActiveSlide(0)}
          />

          <AboutSlide
            imgs={[pv5, ph0, pv0, ph2, pv1, ph1, pv3, hh4, pv2]}
            style={activeSlideStyle.slide1}
            setActiveSlide={() => setActiveSlide(1)}
          />

          <AboutSlide
            imgs={[hh2, hv0, hh5, hv2, hh6, hv4]}
            style={activeSlideStyle.slide2}
            setActiveSlide={() => setActiveSlide(2)}
          />

          <AboutSlide
            imgs={[hv1, hh0, hv3, hh1, hv5, hh3]}
            style={activeSlideStyle.slide3}
            setActiveSlide={() => setActiveSlide(3)}
          />
        </div>
        <div className="about__info" onMouseOver={() => setActiveSlide(4)}>
          <div className="text-wrapper">
            <div className="flex--column">
              <span className="title" style={{ paddingBottom: "5rem" }}>
                Hello,
              </span>
              <h2 style={{ paddingBottom: "5rem" }}>
                I'm a maker with unquenchable passion in web development and
                visual art.
              </h2>
              <p style={{ paddingBottom: "10rem" }}>
                Being creative with visual aesthetic and motion design for
                websites is what I've been fascinated with for the past few
                years. Exploring interdisciplinary art making practice, I have
                been learning how to develop in JavaScript, and exploring how it
                can be merged with my previous experience as a visual artist.
              </p>
            </div>

            <div
              ref={refInfo}
              className="about__detail-info flex--column"
              style={intersectingStyle}
            >
              <div
                className="flex--column"
                style={{ gap: "0.5rem", paddingBottom: "7rem" }}
              >
                <h2 style={{ paddingBottom: "1rem" }}>Skills</h2>
                <p>React, JavaScript, HTML5, CSS3, Sass</p>
                <p>Node.js, MongoDB, Express</p>
                <p>Adobe Photoshop, Illustrator, Premiere Pro, XD</p>
              </div>

              <div
                className="flex--column"
                style={{ gap: "0.5rem", paddingBottom: "10rem" }}
              >
                <h2 style={{ paddingBottom: "1rem" }}>Expreience</h2>
                <p>- 5 years experience in Web Design</p>
                <p>- 5 years experience in Graphic Design</p>
                <p>- 1 year in Front-end Web Development</p>
              </div>

              <div
                className="flex--row"
                style={{
                  gap: "3rem",
                  alignSelf: "center",
                  borderTop: "1px solid #ccc",
                  paddingTop: "2rem",
                }}
              >
                <svg viewBox="0 0 100 100" className="social-icons ">
                  <use href={`${icons}#github`} />
                </svg>
                <svg viewBox="0 0 100 100" className="social-icons ">
                  <use href={`${icons}#linkedin`} />
                </svg>

                <svg viewBox="0 0 100 100" className="social-icons ">
                  <use href={`${icons}#instagram`} />
                </svg>

                <svg viewBox="0 0 100 100" className="social-icons ">
                  <use href={`${icons}#cv`} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return render();
};

export default About;

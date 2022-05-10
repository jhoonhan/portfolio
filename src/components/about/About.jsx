import React, { useEffect, useState } from "react";
import AboutImg from "./AboutImg";

import img0 from "../../assests/image/about/0.jpg";
import img1 from "../../assests/image/about/1.jpg";
import img2 from "../../assests/image/about/2.jpg";
import img3 from "../../assests/image/about/3.jpg";
import img4 from "../../assests/image/about/4.jpg";
import img5 from "../../assests/image/about/5.jpg";
import img6 from "../../assests/image/about/6.jpg";
import img7 from "../../assests/image/about/7.jpg";
import img8 from "../../assests/image/about/8.jpg";
import img9 from "../../assests/image/about/9.jpg";
import img10 from "../../assests/image/about/10.jpg";
import img11 from "../../assests/image/about/11.jpg";
import img12 from "../../assests/image/about/12.jpg";
import img13 from "../../assests/image/about/13.jpg";
import img14 from "../../assests/image/about/14.jpg";
import img15 from "../../assests/image/about/15.jpg";
import img16 from "../../assests/image/about/16.jpg";
import img17 from "../../assests/image/about/17.jpg";
import img18 from "../../assests/image/about/18.jpg";
import img19 from "../../assests/image/about/19.jpg";
import img20 from "../../assests/image/about/20.jpg";

const About = ({ refs }) => {
  const [activeSlide, setActiveSlide] = useState(-1);
  const [activeSlideStyle, setActiveSlideStyle] = useState({
    slide0: { width: "100%" },
    slide1: { width: "100%" },
    slide2: { width: "100%" },
    slide3: { width: "100%" },
  });

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
          onMouseOut={() => setActiveSlide(-1)}
        >
          <div
            className="about__slide-column"
            onMouseOver={() => setActiveSlide(0)}
            style={activeSlideStyle.slide0}
          >
            <AboutImg img={img0} />
            <AboutImg img={img1} />
            <AboutImg img={img2} />
            <AboutImg img={img3} />
            <AboutImg img={img4} />
          </div>
          <div
            className="about__slide-column"
            onMouseOver={() => setActiveSlide(1)}
            style={activeSlideStyle.slide1}
          >
            <AboutImg img={img5} />
            <AboutImg img={img6} />
            <AboutImg img={img7} />
            <AboutImg img={img8} />
            <AboutImg img={img9} />
          </div>
          <div
            className="about__slide-column"
            onMouseOver={() => setActiveSlide(2)}
            style={activeSlideStyle.slide2}
          >
            <AboutImg img={img10} />
            <AboutImg img={img11} />
            <AboutImg img={img12} />
            <AboutImg img={img13} />
            <AboutImg img={img14} />
          </div>
          <div
            className="about__slide-column"
            onMouseOver={() => setActiveSlide(3)}
            style={activeSlideStyle.slide3}
          >
            <AboutImg img={img15} />
            <AboutImg img={img16} />
            <AboutImg img={img17} />
            <AboutImg img={img18} />
            <AboutImg img={img19} />
          </div>
        </div>
        <div className="about__info" onMouseOver={() => setActiveSlide(4)}>
          <div className="text-wrapper">
            <span className="title">Hello,</span>
            <h3>
              I'm a visual artist and web developer based in North Carolina,
              USA. Creating digital experiences with an eye for beauty and
              creativity.
            </h3>
            <p>
              Being creative with visual aesthetic and motion design for
              websites is what I've been fascinated with for the past few years.
              Exploring interdisciplinary art making practice, I have been
              learning how to develop in JavaScript, and exploring how it can be
              merged with my previous experience as a visual artist.
              <br />
              <br />
              As much as I have a great eye for a beauty, I am well skilled web
              developer experience in JavaScript, React JS, MongoDb, Express,
              NodeJs. I have been tirelessly making side projects to express my
              passion as a maker and to release my undying curiosity.
            </p>
          </div>
        </div>
      </section>
    );
  };

  return render();
};

export default About;

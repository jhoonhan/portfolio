import React, { useEffect, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);

  const visible = (entries) => {
    // console.log(entries[0].isIntersecting);
    setIsVisible(entries[0].isIntersecting);
  };

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
        slide1: { width: "95%" },
        slide2: { width: "95%" },
        slide3: { width: "95%" },
      });
    }
    if (activeSlide === 1) {
      setActiveSlideStyle({
        slide0: { width: "95%" },
        slide1: { width: "115%" },
        slide2: { width: "95%" },
        slide3: { width: "95%" },
      });
    }
    if (activeSlide === 2) {
      setActiveSlideStyle({
        slide0: { width: "95%" },
        slide1: { width: "95%" },
        slide2: { width: "115%" },
        slide3: { width: "95%" },
      });
    }
    if (activeSlide === 3) {
      setActiveSlideStyle({
        slide0: { width: "95%" },
        slide1: { width: "95%" },
        slide2: { width: "95%" },
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
            <img src={img0} alt="img0" />
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
            <img src={img3} alt="img2" />
            <img src={img4} alt="img2" />
          </div>
          <div
            className="about__slide-column"
            onMouseOver={() => setActiveSlide(1)}
            style={activeSlideStyle.slide1}
          >
            <img src={img5} alt="img0" />
            <img src={img6} alt="img1" />
            <img src={img7} alt="img2" />
            <img src={img8} alt="img2" />
            <img src={img9} alt="img2" />
          </div>
          <div
            className="about__slide-column"
            onMouseOver={() => setActiveSlide(2)}
            style={activeSlideStyle.slide2}
          >
            <img src={img10} alt="img0" />
            <img src={img11} alt="img1" />
            <img src={img12} alt="img2" />
            <img src={img13} alt="img2" />
            <img src={img14} alt="img2" />
          </div>
          <div
            className="about__slide-column"
            onMouseOver={() => setActiveSlide(3)}
            style={activeSlideStyle.slide3}
          >
            <img src={img15} alt="img9" />
            <img src={img16} alt="img10" />
            <img src={img17} alt="img11" />
            <img src={img18} alt="img11" />
            <img src={img19} alt="img11" />
          </div>
        </div>
        <div className="about__info" onMouseOver={() => setActiveSlide(4)}>
          info
        </div>
      </section>
    );
  };

  return render();
};

export default About;

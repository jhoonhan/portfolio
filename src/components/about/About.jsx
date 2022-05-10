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

const About = ({ refs }) => {
  const [activeSlide, setActiveSlide] = useState(null);

  useEffect(() => {}, [activeSlide]);

  const render = () => {
    return (
      <section ref={refs.refAbout} className="about__container container">
        <div
          className="about__slides-container"
          onMouseOver={() => setActiveSlide(0)}
        >
          <div
            className="about__slide-column"
            onMouseOver={() => setActiveSlide(1)}
          >
            <img src={img0} alt="img0" />
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
          </div>
          <div
            className="about__slide-column"
            onMouseOver={() => setActiveSlide(2)}
          >
            <img src={img3} alt="img0" />
            <img src={img4} alt="img1" />
            <img src={img5} alt="img2" />
          </div>
          <div
            className="about__slide-column"
            onMouseOver={() => setActiveSlide(3)}
          >
            <img src={img6} alt="img0" />
            <img src={img7} alt="img1" />
            <img src={img8} alt="img2" />
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

import React, { useRef, useEffect, useState } from "react";
import sushi1 from "../../assests/image/3.jpg";
import sushi2 from "../../assests/image/4.jpg";
import sushi3 from "../../assests/image/5.jpg";
import sushi4 from "../../assests/image/3.jpg";
import throttle from "../../helpers/throttle";

const WorkContent = ({ refEl }) => {
  const [actImg, setActImg] = useState("img1");

  const [counter, setCounter] = useState(1);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [actImgPosition, setActImgPosition] = useState({
    img1: { x: 0, y: 0 },
    img2: { x: 0, y: 0 },
    img3: { x: 0, y: 0 },
  });

  const [conditionalStyle, setConditionalStyle] = useState({
    img3: {
      left: "14vw",
      height: "75vh",
      opacity: 0.25,
      zIndex: 1,
    },
    img2: {
      left: "7vw",
      height: "80vh",
      opacity: 0.5,
      zIndex: 2,
    },
    img1: {
      left: "0vw",
      height: "85vh",
      opacity: 1,
      zIndex: 3,
    },
  });
  const [slideImgStyle, setSlideImgStyle] = useState([
    {
      transform: `translateX(${-100}vw)`,
      opacity: 1,
      height: "100%",
      zIndex: 4,
    },
    {
      transform: `translateX(${-85}vw)`,
      opacity: 0.75,
      height: "90%",
      zIndex: 3,
    },
    {
      transform: `translateX(${-70}vw)`,
      opacity: 0.5,
      height: "80%",
      zIndex: 2,
    },
    {
      transform: `translateX(${-55}vw)`,
      opacity: 0.25,
      height: "70%",
      zIndex: 1,
    },
  ]);

  const refImage1 = useRef(null);
  const refImage2 = useRef(null);
  const refImage3 = useRef(null);
  const onMouseMoveImg = useRef(throttle((e) => calculateAmount(e), 60));

  const calculateAmount = (e) => {
    const cursorX = e.clientX - e.target.parentNode.getBoundingClientRect().x;
    const cursorY = e.clientY - e.target.parentNode.getBoundingClientRect().y;
    const width = e.target.parentNode.getBoundingClientRect().width;
    const height = e.target.parentNode.getBoundingClientRect().height;

    const amountX = -1 * ((width / 2 - cursorX) / (width / 20));
    const amountY = -1 * ((height / 2 - cursorY) / (height / 20));
    setPosition({ x: amountX, y: amountY });
  };

  useEffect(() => {
    if (actImg === "img1")
      setActImgPosition({
        ...actImgPosition,
        img1: { x: position.x, y: position.y },
      });
    if (actImg === "img2")
      setActImgPosition({
        ...actImgPosition,
        img2: { x: position.x, y: position.y },
      });
    if (actImg === "img3")
      setActImgPosition({
        ...actImgPosition,
        img3: { x: position.x, y: position.y },
      });
  }, [position]);

  useEffect(() => {
    if (actImg === "img1") {
      setConditionalStyle({
        img3: {
          left: "14vw",
          height: "75vh",
          opacity: 0.25,
          zIndex: 1,
        },
        img2: {
          left: "7vw",
          height: "80vh",
          opacity: 0.5,
          zIndex: 2,
        },
        img1: {
          // left: "0vw",
          height: "85vh",
          opacity: 1,
          zIndex: 3,
        },
      });
    }

    if (actImg === "img2") {
      setConditionalStyle({
        img3: {
          left: "14vw",
          height: "80vh",
          opacity: 0.25,
          zIndex: 1,
        },
        img2: {
          left: "7vw",
          height: "85vh",
          opacity: 1,
          zIndex: 3,
        },
        img1: {
          left: "0vw",
          height: "75vh",
          opacity: 0.5,
          zIndex: 2,
        },
      });
    }

    if (actImg === "img3") {
      setConditionalStyle({
        img3: {
          left: "14vw",
          height: "85vh",
          opacity: 1,
          zIndex: 3,
        },
        img2: {
          left: "7vw",
          height: "80vh",
          opacity: 0.75,
          zIndex: 2,
        },
        img1: {
          left: "0vw",
          height: "75vh",
          opacity: 0.5,
          zIndex: 1,
        },
      });
    }
  }, [actImg]);

  const renderInfo = () => {
    return (
      <div className="works__info-container">
        <div className="works__title">
          <span>Sushi</span>
          <span>Republic</span>
        </div>
        <div className="works__subtitle">
          <h2>
            A microsite showcasing stories of customers of a concept pension
            provider.
          </h2>
        </div>
        <div className="works__detail">
          <div className="column--grid--2" style={{ columnGap: "3rem" }}>
            <div className="row--grid--2 detail-item">
              <div className="detail-item__title">
                <h3>Role</h3>
                <div></div>
              </div>

              <p>Senior developer</p>
            </div>

            <div className="row--grid--2 detail-item">
              <div className="detail-item__title">
                <h3>Role</h3>
                <div></div>
              </div>

              <p>Senior developer</p>
            </div>
          </div>

          <div className="row--grid--2 detail-item">
            <div className="detail-item__title">
              <h3>Technology</h3>
              <div></div>
            </div>

            <p>HTML5, CSS3, Sass, jQuery</p>
          </div>

          <div
            className="column--grid--2 detail-item"
            style={{ marginTop: "1rem", gap: "2rem" }}
          >
            <div className="button">Live Demo</div>
            <div className="button">Github</div>
          </div>
        </div>
      </div>
    );
  };

  const renderPictureContainer = () => {
    return (
      <div
        onMouseLeave={() => setActImg("img1")}
        className="works__picture-container"
      >
        <div
          ref={refImage3}
          onMouseOver={() => setActImg("img3")}
          onMouseMove={(e) => onMouseMoveImg.current(e)}
          className={`works_picture ${actImg === "img3" ? "active" : ""}`}
          style={conditionalStyle.img3}
        >
          <img
            src={sushi2}
            alt="img3"
            style={{
              transform: `translateX(${actImgPosition.img3.x}%) translateY(${actImgPosition.img3.y}%)`,
            }}
          />
        </div>

        <div
          ref={refImage2}
          onMouseOver={() => setActImg("img2")}
          onMouseMove={(e) => onMouseMoveImg.current(e)}
          className={`works_picture ${actImg === "img2" ? "active" : ""}`}
          style={conditionalStyle.img2}
        >
          <img
            src={sushi1}
            alt="img2"
            style={{
              transform: `translateX(${actImgPosition.img2.x}%) translateY(${actImgPosition.img2.y}%)`,
            }}
          />
        </div>

        <div
          ref={refImage1}
          onMouseOver={() => setActImg("img1")}
          // onMouseMove={onMouseMoveImg}
          onMouseMove={(e) => onMouseMoveImg.current(e)}
          className={`works_picture ${actImg === "img1" ? "active" : ""}`}
          style={conditionalStyle.img1}
        >
          <img
            src={sushi3}
            alt="img1"
            style={{
              transform: `translateX(${actImgPosition.img1.x}%) translateY(${actImgPosition.img1.y}%)`,
            }}
          />
        </div>
      </div>
    );
  };

  useEffect(() => {
    const fn = (e) => {
      if (e.deltaY >= 0) {
        if (counter === 1) return;
        setCounter(counter - 1);
      } else {
        if (counter === 4) return;
        setCounter(counter + 1);
      }
    };
    const throttled = throttle(fn, 1);
    document.addEventListener("mousewheel", throttled, false);

    return () => {
      document.removeEventListener("mousewheel", throttled);
    };
  }, [counter]);

  useEffect(() => {
    if (counter === 1) {
      setSlideImgStyle([
        {
          transform: `translateX(${-100}vw)`,
          opacity: 1,
          height: "100%",
          zIndex: 4,
        },
        {
          transform: `translateX(${-85}vw)`,
          opacity: 0.75,
          height: "90%",
          zIndex: 3,
        },
        {
          transform: `translateX(${-70}vw)`,
          opacity: 0.5,
          height: "80%",
          zIndex: 2,
        },
        {
          transform: `translateX(${-55}vw)`,
          opacity: 0.25,
          height: "70%",
          zIndex: 1,
        },
      ]);
    }
  }, [counter]);

  const images = [sushi1, sushi2, sushi3, sushi4];

  const renderSlideShow = () => {
    const imgs = images.map((img, i, imgs) => {
      return (
        // <li className="gallery__image" style={slideImgStyle[i]} key={i}>
        <li
          className="gallery__image"
          style={{
            transform: `translateX(-${100 - i * 15}vw)`,
            opacity: 1 - i * 0.25,
            height: `${100 - i * 10}%`,
            zIndex: imgs.length - i,
          }}
          key={i}
        >
          <img src={img} alt={`img${i}`} />
        </li>
      );
    });

    return (
      <div className="work__gallery-container">
        <ul className="work__gallery-slideshow">{imgs}</ul>
      </div>
    );
  };

  const render = () => {
    return (
      <div ref={refEl} className="work__container">
        <div
          className="work__content"
          style={{
            gridTemplateColumns: "3fr 2fr",
          }}
        >
          {renderPictureContainer()}
          {renderInfo()}
        </div>
        <div className="work__content" style={{}}>
          {renderSlideShow()}
        </div>
      </div>
    );
  };
  return render();
};

export default WorkContent;

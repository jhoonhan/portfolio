import React, { useRef, useEffect, useState } from "react";

<<<<<<< HEAD
const WorkContent = () => {
  const [actImg, setActImg] = useState("img1");

  const [counter, setCounter] = useState(1);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(null);
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
  const [slideImgStyle, setSlideImgStyle] = useState({
    img1: {},
    img2: {},
    img3: {},
    img4: {},
  });

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
=======
import WorkPictureContainer from "./WorkPictureContainer";
import WorkDetail from "./WorkDetail";
>>>>>>> school

const WorkContent = ({ refEl, pageControl }) => {
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
        <div className="works__info__detail">
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

<<<<<<< HEAD
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

  // useEffect(() => {
  //   console.log(direction);
  //   if (direction === "down") {
  //     setCounter(counter - 1);
  //   } else {
  //     setCounter(counter + 1);
  //   }
  // }, [direction]);

  // useEffect(() => {
  //   console.log(counter);
  // }, [counter]);

  const images = [sushi1, sushi2, sushi3, sushi4];

  const renderSlideShow = () => {
    const imgs = images.map((img, i) => {
      return (
        <li
          className="gallery__image"
          style={{
            // transform: `translateX(-${100 - i * 10}vw)`,
            transform:
              counter === i + 1 ? `translateX(-${100 - i * 10}vw)` : "",
          }}
          key={i}
        >
          <img src={img} alt={`img${i}`} />
        </li>
      );
    });

    return (
      <div className="work__gallery-container">
        <div className="testbutton">aaang</div>
        <ul className="work__gallery-slideshow">{imgs}</ul>
      </div>
    );
  };

=======
>>>>>>> school
  const render = () => {
    return (
      <div className="work__container">
        <div
          className="work__content"
          style={{
            gridTemplateColumns: "3fr 2fr",
          }}
        >
          <WorkPictureContainer />
          {renderInfo()}
        </div>
        <div className="work__content" style={{}}>
          <WorkDetail pageControl={pageControl} />
        </div>
      </div>
    );
  };
  return render();
};

export default WorkContent;

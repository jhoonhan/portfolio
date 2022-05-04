import React, { useRef, useEffect, useState } from "react";
import sushi1 from "../../assests/image/3.jpg";
import sushi2 from "../../assests/image/4.jpg";
import sushi3 from "../../assests/image/5.jpg";
import sushi4 from "../../assests/image/3.jpg";
import throttle from "../../helpers/throttle";
import useSlideStyle from "./useSlideStyle";
import WorkPictureContainer from "./WorkPictureContainer";

const WorkContent = ({ refEl }) => {
  // const [actImg, setActImg] = useState("img1");
  const { slideImgStyle } = useSlideStyle();
  // const { actImgPosition2 } = usePicturePosition();

  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [actImgPosition, setActImgPosition] = useState({
  //   img1: { x: 0, y: 0 },
  //   img2: { x: 0, y: 0 },
  //   img3: { x: 0, y: 0 },
  // });

  // const [conditionalStyle, setConditionalStyle] = useState({
  //   img3: {
  //     left: "14vw",
  //     height: "75vh",
  //     opacity: 0.25,
  //     zIndex: 1,
  //   },
  //   img2: {
  //     left: "7vw",
  //     height: "80vh",
  //     opacity: 0.5,
  //     zIndex: 2,
  //   },
  //   img1: {
  //     left: "0vw",
  //     height: "85vh",
  //     opacity: 1,
  //     zIndex: 3,
  //   },
  // });

  // const onMouseMoveImg = useRef(throttle((e) => calculateAmount(e), 60));

  // const calculateAmount = (e) => {
  //   const cursorX = e.clientX - e.target.parentNode.getBoundingClientRect().x;
  //   const cursorY = e.clientY - e.target.parentNode.getBoundingClientRect().y;
  //   const width = e.target.parentNode.getBoundingClientRect().width;
  //   const height = e.target.parentNode.getBoundingClientRect().height;

  //   const amountX = -1 * ((width / 2 - cursorX) / (width / 20));
  //   const amountY = -1 * ((height / 2 - cursorY) / (height / 20));
  //   setPosition({ x: amountX, y: amountY });
  // };

  // useEffect(() => {
  //   if (actImg === "img1")
  //     setActImgPosition({
  //       ...actImgPosition,
  //       img1: { x: position.x, y: position.y },
  //     });
  //   if (actImg === "img2")
  //     setActImgPosition({
  //       ...actImgPosition,
  //       img2: { x: position.x, y: position.y },
  //     });
  //   if (actImg === "img3")
  //     setActImgPosition({
  //       ...actImgPosition,
  //       img3: { x: position.x, y: position.y },
  //     });
  // }, [position]);

  // useEffect(() => {
  //   if (actImg === "img1") {
  //     setConditionalStyle({
  //       img3: {
  //         left: "14vw",
  //         height: "75vh",
  //         opacity: 0.25,
  //         zIndex: 1,
  //       },
  //       img2: {
  //         left: "7vw",
  //         height: "80vh",
  //         opacity: 0.5,
  //         zIndex: 2,
  //       },
  //       img1: {
  //         // left: "0vw",
  //         height: "85vh",
  //         opacity: 1,
  //         zIndex: 3,
  //       },
  //     });
  //   }

  //   if (actImg === "img2") {
  //     setConditionalStyle({
  //       img3: {
  //         left: "14vw",
  //         height: "80vh",
  //         opacity: 0.25,
  //         zIndex: 1,
  //       },
  //       img2: {
  //         left: "7vw",
  //         height: "85vh",
  //         opacity: 1,
  //         zIndex: 3,
  //       },
  //       img1: {
  //         left: "0vw",
  //         height: "75vh",
  //         opacity: 0.5,
  //         zIndex: 2,
  //       },
  //     });
  //   }

  //   if (actImg === "img3") {
  //     setConditionalStyle({
  //       img3: {
  //         left: "14vw",
  //         height: "85vh",
  //         opacity: 1,
  //         zIndex: 3,
  //       },
  //       img2: {
  //         left: "7vw",
  //         height: "80vh",
  //         opacity: 0.75,
  //         zIndex: 2,
  //       },
  //       img1: {
  //         left: "0vw",
  //         height: "75vh",
  //         opacity: 0.5,
  //         zIndex: 1,
  //       },
  //     });
  //   }
  // }, [actImg]);

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

  const renderDetail = () => {
    return (
      <div className="work__detail-container">
        <div
          className="work__detail__slide slide-0"
          style={slideImgStyle.slide0}
        >
          <p>detail 1</p>
        </div>
        <div
          className="work__detail__slide slide-1"
          style={slideImgStyle.slide1}
        >
          <p>detail 2</p>
        </div>
        <div
          className="work__detail__slide slide-2"
          style={slideImgStyle.slide2}
        >
          <p>detail 3</p>
        </div>
        <div
          className="work__detail__slide slide-3"
          style={slideImgStyle.slide3}
        >
          <p>detail 4</p>
        </div>
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
          <WorkPictureContainer />
          {renderInfo()}
        </div>
        <div className="work__content" style={{}}>
          {renderDetail()}
        </div>
      </div>
    );
  };
  return render();
};

export default WorkContent;

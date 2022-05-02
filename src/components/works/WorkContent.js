import React, { useRef, useEffect, useState } from "react";
import sushi1 from "../../assests/image/3.jpg";
import sushi2 from "../../assests/image/4.jpg";
import sushi3 from "../../assests/image/5.jpg";
import throttle from "../../helpers/throttle";

const WorkContent = ({ refEl }) => {
  const [actImg, setActImg] = useState("img1");
  const [actImgPosition, setActImgPosition] = useState(0);

  const refImage1 = useRef(null);
  const refImage2 = useRef(null);
  const refImage3 = useRef(null);

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

  const onMouseImage = (img) => {
    setActImg(img);
  };
  const onMouseMoveImg = (e) => {
    const cursorX = e.clientX - e.target.parentNode.getBoundingClientRect().x;
    const cursorY = e.clientY - e.target.parentNode.getBoundingClientRect().y;
    const width = e.target.parentNode.getBoundingClientRect().width;
    const height = e.target.parentNode.getBoundingClientRect().height;
    const amountX = -1 * (width / 2 - cursorX);
    const amountY = -1 * (height / 2 - cursorY);
    // console.log(refImage1.current.getBoundingClientRect());
    // console.log(cursorX);
    // console.log(cursorX / width);
    setActImgPosition(amountX / 50);
  };

  const renderPictureContainer = () => {
    return (
      <div
        onMouseLeave={() => setActImg("img1")}
        className="works__picture-container"
      >
        <div
          ref={refImage3}
          onMouseOver={() => onMouseImage("img3")}
          className="works_picture"
          style={{
            // backgroundImage: `url(${sushi2})`,
            left: "14vw",
            height: "75vh",
            opacity: `${actImg === "img3" ? 1 : 0.25}`,
            zIndex: `${actImg === "img3" ? 4 : 1}`,
          }}
        >
          <img
            src={sushi2}
            alt="img3"
            style={{ transform: `translateX(${actImgPosition}%)` }}
          />
        </div>

        <div
          ref={refImage2}
          onMouseOver={() => onMouseImage("img2")}
          className="works_picture"
          style={{
            backgroundImage: `url(${sushi1})`,
            left: "7vw",
            height: "80vh",
            opacity: `${actImg === "img2" ? 1 : 0.5}`,
            zIndex: `${actImg === "img2" ? 4 : 2}`,
          }}
        />

        <div
          ref={refImage1}
          onMouseOver={() => onMouseImage("img1")}
          onMouseMove={onMouseMoveImg}
          className="works_picture"
          style={{
            // backgroundImage: `url(${sushi3})`,
            opacity: `${actImg === "img1" ? 1 : 1}`,
            zIndex: `${actImg === "img1" ? 4 : 3}`,
          }}
        >
          <img
            src={sushi3}
            alt="img1"
            style={{ transform: `translateX(${actImgPosition}%)` }}
          />
        </div>
      </div>
    );
  };

  const render = () => {
    return (
      <div ref={refEl} className="work__container">
        <div className="content">
          {renderPictureContainer()}
          {renderInfo()}
        </div>
        <div className="content">
          {/* {renderPictureContainer()} */}
          {renderInfo()}
        </div>
      </div>
    );
  };
  return render();
};

export default WorkContent;

import React, { useRef } from "react";
import sushi1 from "../../assests/image/3.jpg";
import sushi2 from "../../assests/image/4.jpg";
import sushi3 from "../../assests/image/5.jpg";

const WorkContent = ({ refA, ref2 }) => {
  const handleClick = () => {
    console.log(`aaang`);
    ref2.current.scrollIntoView({ behavior: "smooth" });
  };
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
      <div className="works__picture-container">
        <div
          className="works_picture"
          style={{
            backgroundImage: `url(${sushi2})`,
            left: "14vw",
            height: "75vh",

            opacity: "0.2",
          }}
        />

        <div
          className="works_picture"
          style={{
            backgroundImage: `url(${sushi1})`,
            left: "7vw",
            height: "80vh",
            opacity: "0.5",
          }}
        />

        <div
          className="works_picture"
          style={{ backgroundImage: `url(${sushi3})` }}
        />
      </div>
    );
  };
  const render = () => {
    return (
      <div ref={refA} className="work__container">
        <div className="content">
          {renderPictureContainer()}
          {renderInfo()}
          <div className="works__content-nav grid--span2">
            <div className="bar disabled" />
            <div className="bar active" style={{ width: "5vw" }} />
            <div className="labels">
              <div className="info a--opacity">
                <div className="box" />
                <span>Info</span>
              </div>
              <div className="detail a--opacity">
                <div className="box" />
                <span onClick={handleClick}>Detail</span>
              </div>
              <div className="more a--opacity">
                <div className="box" />
                <span>More Works</span>
              </div>
            </div>
          </div>
        </div>
        <div ref={ref2} className="content">
          {renderPictureContainer()}
          {renderInfo()}
          <div className="works__content-nav grid--span2">
            <div className="bar disabled" />
            <div className="bar active" style={{ width: "5vw" }} />
            <div className="labels">
              <div className="info a--opacity">
                <div className="box" />
                <span>Info2</span>
              </div>
              <div className="detail a--opacity">
                <div className="box" />
                <span onClick={handleClick}>Detail</span>
              </div>
              <div className="more a--opacity">
                <div className="box" />
                <span>More Works</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return render();
};

export default WorkContent;

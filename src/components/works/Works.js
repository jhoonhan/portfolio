import React from "react";
import sushi1 from "../../assests/image/3.jpg";
import sushi2 from "../../assests/image/4.jpg";
import sushi3 from "../../assests/image/5.jpg";

const Works = ({ refWork }) => {
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
        </div>
      </div>
    );
  };

  return (
    <section ref={refWork} className="works__container container">
      <div className="content">
        {renderPictureContainer()}
        {renderInfo()}
        <div className="works__content-nav grid--span2">
          <div className="bar disabled"></div>
          <div className="bar active"></div>
          <div className="box"></div>
          <div className="labels">
            <span className="info">Info</span>
            <span className="detail">Detail</span>
            <span className="more">More Info</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;

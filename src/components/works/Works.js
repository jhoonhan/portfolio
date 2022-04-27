import React from "react";
import sushi1 from "../../assests/image/3.jpg";

const Works = ({ refWork }) => {
  return (
    <section ref={refWork} className="works__container container">
      <div className="content">
        <div className="works__picture-container">
          <img src={sushi1} alt="sushi1" />
        </div>
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
            <div className="column--grid--2">
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
      </div>
    </section>
  );
};

export default Works;

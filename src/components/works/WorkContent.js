import React, { useRef, useEffect, useState } from "react";
import sushi1 from "../../assests/image/3.jpg";
import sushi2 from "../../assests/image/4.jpg";
import sushi3 from "../../assests/image/5.jpg";

const WorkContent = ({ refWorks, refEl, pageControl }) => {
  const [infoSubPage, setInfoSubPage] = useState("info");
  const [active, setActive] = useState({});

  const refInfo = useRef(null);
  const refDetail = useRef(null);

  useEffect(() => {
    if (pageControl.curPage !== "works") return;
    if (infoSubPage === "info") {
      refWorks.current.scrollTo(0, 0);
    }

    if (infoSubPage === "detail") {
      // refWorks.current.scrollTo(3920, 0);
      refDetail.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [infoSubPage]);

  useEffect(() => {
    console.log(active);
  }, [active]);

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
  const renderContentNav = () => {
    return (
      <div className="works__content-nav">
        <div className="bar disabled" />
        <div className="bar active" style={{ width: "5vw" }} />
        <div className="labels">
          <div className="info a--opacity">
            <div className="box" />
            <span onClick={() => setInfoSubPage("info")}>Info</span>
          </div>
          <div className="detail a--opacity">
            <div className="box" />
            <span onClick={() => setInfoSubPage("detail")}>Detail</span>
          </div>
          <div className="more a--opacity">
            <div className="box" />
            <span>More Works</span>
          </div>
        </div>
      </div>
    );
  };
  const render = () => {
    return (
      <div ref={refEl} className="work__container" style={active}>
        <div ref={refInfo} className="content">
          {renderPictureContainer()}
          {renderInfo()}
        </div>
        <div
          ref={refDetail}
          className="content"
          style={{ backgroundColor: "blue" }}
        >
          {renderPictureContainer()}
          {renderInfo()}
        </div>
        {renderContentNav()}
      </div>
    );
  };
  return render();
};

export default WorkContent;

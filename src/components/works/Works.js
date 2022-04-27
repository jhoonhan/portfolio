import React from "react";

const Works = ({ refWork }) => {
  return (
    <section ref={refWork} className="works__container container">
      <div className="content">
        {/* <header>works</header> */}
        <div className="works__picture-container"></div>
      </div>
    </section>
  );
};

export default Works;

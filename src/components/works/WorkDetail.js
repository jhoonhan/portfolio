import React, { useRef } from "react";
import useSlideStyle from "./useSlideStyle";

const WorkDetail = ({ pageControl }) => {
  const render = () => {
    return (
      <div className="work__detail-container">
        <div className="work__detail__slide slide-0">
          <p>detail 1</p>
        </div>
      </div>
    );
  };

  return render();
};

export default WorkDetail;

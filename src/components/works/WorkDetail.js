import React from "react";
import useSlideStyle from "./useSlideStyle";

const WorkDetail = ({ pageControl }) => {
  const { slideImgStyle } = useSlideStyle(pageControl);

  const render = () => {
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

  return render();
};

export default WorkDetail;

import React from "react";

const Loading = ({ loadingProgress }) => {
  // console.log(loadingProgress);
  return <div className="loading">{loadingProgress}</div>;
};

export default Loading;

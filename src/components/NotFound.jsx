import React, { useEffect } from "react";

const NotFound = ({ pageControl }) => {
  useEffect(() => {
    pageControl.setCurPage("notfound");
    pageControl.setTheme({ color: "dark" });
  }, []);
  return (
    <div className="notfound__container">
      <h1>Oops</h1>
      <h3>Page not found...</h3>
    </div>
  );
};

export default NotFound;

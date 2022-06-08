import React, { useEffect, useContext } from "react";
import { PageContext } from "../App";

const NotFound = () => {
  const { page, theme } = useContext(PageContext);
  useEffect(() => {
    page.setCurPage("notfound");
    theme.setTheme({ color: "dark" });
  }, []);
  return (
    <div className="notfound__container">
      <h1>Oops</h1>
      <h3>Page not found...</h3>
    </div>
  );
};

export default NotFound;

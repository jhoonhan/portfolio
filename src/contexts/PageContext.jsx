import React, { useState, useContext } from "react";
// import { PageContext } from "../App";

const PageContext = React.createContext();

const PageProvider = ({ children }) => {
  return (
    <PageContext.Provider value={"aaang"}>{children}</PageContext.Provider>
  );
};

export default PageProvider;

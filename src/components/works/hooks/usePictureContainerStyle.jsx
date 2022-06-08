import React, { useState, useEffect } from "react";

const usePictureContainerStyle = (actImg) => {
  const [conditionalStyle, setConditionalStyle] = useState({
    img3: {
      left: "14vw",
      height: "75vh",
      opacity: 0.25,
      zIndex: 1,
    },
    img2: {
      left: "7vw",
      height: "80vh",
      opacity: 0.5,
      zIndex: 2,
    },
    img1: {
      left: "0vw",
      height: "85vh",
      opacity: 1,
      zIndex: 3,
    },
  });

  useEffect(() => {
    if (actImg === "img1") {
      setConditionalStyle({
        img3: {
          left: "14vw",
          height: "75vh",
          opacity: 0.25,
          zIndex: 1,
        },
        img2: {
          left: "7vw",
          height: "80vh",
          opacity: 0.5,
          zIndex: 2,
        },
        img1: {
          // left: "0vw",
          height: "85vh",
          opacity: 1,
          zIndex: 3,
        },
      });
    }

    if (actImg === "img2") {
      setConditionalStyle({
        img3: {
          left: "14vw",
          height: "80vh",
          opacity: 0.25,
          zIndex: 1,
        },
        img2: {
          left: "7vw",
          height: "85vh",
          opacity: 1,
          zIndex: 3,
        },
        img1: {
          left: "0vw",
          height: "75vh",
          opacity: 0.5,
          zIndex: 2,
        },
      });
    }

    if (actImg === "img3") {
      setConditionalStyle({
        img3: {
          left: "14vw",
          height: "85vh",
          opacity: 1,
          zIndex: 3,
        },
        img2: {
          left: "7vw",
          height: "80vh",
          opacity: 0.75,
          zIndex: 2,
        },
        img1: {
          left: "0vw",
          height: "75vh",
          opacity: 0.5,
          zIndex: 1,
        },
      });
    }
  }, [actImg]);

  return { conditionalStyle };
};

export default usePictureContainerStyle;

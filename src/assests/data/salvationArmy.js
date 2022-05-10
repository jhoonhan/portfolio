import landing from "../image/projects/salvationArmy/landing.jpg";

import slideImg0 from "../image/projects/salvationArmy/desktop0.jpg";
import slideImg1 from "../image/projects/salvationArmy/desktop1.jpg";
import slideImg2 from "../image/projects/salvationArmy/desktop2.jpg";

export const salvationArmy = {
  name: ["salvation", " army"],
  description:
    "A fast and easy bookeeping web application for a charitable organization.",
  role: "Developer, Designer",
  technology: "ReactJS, JavaScript, NodeJS, Express, MongoDB, HTML, CSS",
  liveDemoURL: "https://google.com",
  githubURL: "https://github.com/",
  images: {
    landing,
    overviewImages: [slideImg0, slideImg1, slideImg2],
    slideImages: {
      desktop: [slideImg0, slideImg1, slideImg2],
      mobile: [],
      photo: [],
    },
  },
};

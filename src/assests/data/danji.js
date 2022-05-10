import landing from "../image/projects/danji/landing.jpg";

import overviewImg0 from "../image/projects/danji/overview0.jpg";
import overviewImg1 from "../image/projects/danji/overview1.jpg";
// import overviewImg2 from "../image/projects/danji/overview2.jpg";
import slideImg0 from "../image/projects/danji/desktop0.jpg";
import slideImg1 from "../image/projects/danji/desktop1.jpg";
import slideImg2 from "../image/projects/danji/mobile1.jpg";
import slideImg3 from "../image/projects/danji/mobile0.jpg";
import slideImg4 from "../image/projects/danji/mobile2.jpg";
import slideImg5 from "../image/projects/danji/img0.jpg";
import slideImg6 from "../image/projects/danji/img2.jpg";

export const danji = {
  name: ["danji"],
  description: "A staple Korean restaurant serving the Triad area since 2015.",
  role: "Developer, Designer, Photographer",
  technology: "HTML5, CSS3, SASS, JQUERY",
  liveDemoURL: "https://google.com",
  githubURL: "https://github.com/",
  images: {
    landing,
    overviewImages: [landing, overviewImg0, overviewImg1],
    slideImages: {
      desktop: [slideImg0, slideImg1],
      mobile: [slideImg2, slideImg3, slideImg4],
      photo: [slideImg5, slideImg6],
    },
  },
  theme: "light",
};

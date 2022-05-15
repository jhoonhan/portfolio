import landing from "../image/projects/sushiRepublic/landing.jpg";

import overviewImg0 from "../image/projects/sushiRepublic/overview0.jpg";
import overviewImg1 from "../image/projects/sushiRepublic/overview1.jpg";
import overviewImg2 from "../image/projects/sushiRepublic/overview2.jpg";
import slideImg0 from "../image/projects/sushiRepublic/desktop1.jpg";
import slideImg1 from "../image/projects/sushiRepublic/desktop2.jpg";
import slideImg2 from "../image/projects/sushiRepublic/mobile1.jpg";
import slideImg3 from "../image/projects/sushiRepublic/mobile0.jpg";
import slideImg4 from "../image/projects/sushiRepublic/mobile2.jpg";
import slideImg5 from "../image/projects/sushiRepublic/img0.jpg";
import slideImg6 from "../image/projects/sushiRepublic/img1.jpg";

export const sushiRepublic = {
  name: ["sushi", " republic"],
  description: "A responsive website for a local fine Japanese restaurant.",
  role: "developer, designer, photographer",
  technology: "HTML5, CSS3, SASS, JQUERY",
  liveDemoURL: "https://google.com",
  githubURL: "https://github.com/",
  path: "sushi-republic",
  images: {
    landing,
    overviewImages: [overviewImg0, overviewImg1, overviewImg2],
    slideImages: {
      desktop: [slideImg0, slideImg1],
      mobile: [slideImg2, slideImg3, slideImg4],
      photo: [slideImg5, slideImg6],
    },
  },
};

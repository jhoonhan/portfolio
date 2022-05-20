import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { transition } from "../helpers/config";
import icons from "../../assests/image/icons.svg";

const Contact = ({ pageControl, props, refs }) => {
  useEffect(() => {
    pageControl.setCurPage(props.match.path.slice(1));
  }, [props.match.path]);

  const animate = {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          type: "spring",
          staggerChildren: 0.7,
        },
      },
    },
    item: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { duration: transition.slow, type: "spring", dealy: 0.5 },
      },
    },
  };

  const render = () => {
    return (
      <motion.section
        ref={refs.refContact}
        className="contact__container container"
        variants={animate.container}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <div className="contact__text-wrapper">
          <div className="flex--column">
            <motion.span className="contact__title" variants={animate.item}>
              Yeah
            </motion.span>
            <motion.span
              className="contact__subtitle"
              style={{ paddingBottom: "3rem" }}
              variants={animate.item}
            >
              Just keeping this simple
            </motion.span>
          </div>

          <motion.div
            className="flex--column"
            style={{ gap: "1.5rem" }}
            variants={animate.item}
          >
            <p>hanj1112@outlook.com</p>

            <div className="flex--row" style={{ gap: "1.5rem" }}>
              <svg viewBox="0 0 100 100" className="social-icons">
                <use href={`${icons}#github`} />
              </svg>
              <svg viewBox="0 0 100 100" className="social-icons">
                <use href={`${icons}#linkedin`} />
              </svg>

              <svg viewBox="0 0 100 100" className="social-icons">
                <use href={`${icons}#instagram`} />
              </svg>

              <svg viewBox="0 0 100 100" className="social-icons">
                <use href={`${icons}#cv`} />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  };

  return render();
};

export default Contact;

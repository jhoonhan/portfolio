import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { transition } from "../helpers/config";
import icons from "../../assests/image/icons.svg";
import cv from "../../assests/files/cv.pdf";

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
              <a
                className="a--opacity"
                href="https://github.com/jhoonhan"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 100 100" className="social-icons">
                  <use href={`${icons}#github`} />
                </svg>
              </a>
              <a
                className="a--opacity"
                href="https://www.linkedin.com/in/joe-han-a45087121/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 100 100" className="social-icons">
                  <use href={`${icons}#linkedin`} />
                </svg>
              </a>
              <a
                className="a--opacity"
                href="https://www.instagram.com/jhoon.han/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 100 100" className="social-icons">
                  <use href={`${icons}#instagram`} />
                </svg>
              </a>
              <a
                className="a--opacity"
                href={cv}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 100 100" className="social-icons">
                  <use href={`${icons}#cv`} />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  };

  return render();
};

export default Contact;

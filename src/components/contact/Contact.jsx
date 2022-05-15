import React, { useEffect } from "react";
import icons from "../../assests/image/icons.svg";

const Contact = ({ pageControl, props, refs }) => {
  useEffect(() => {
    pageControl.setCurPage(props.match.path.slice(1));
  }, [props.match.path]);
  const render = () => {
    return (
      <section ref={refs.refContact} className="contact__container container">
        <div className="contact__text-wrapper">
          <div className="flex--column">
            <span className="contact__title">Yeah</span>
            <span
              className="contact__subtitle"
              style={{ paddingBottom: "3rem" }}
            >
              Just keeping this simple
            </span>
          </div>

          <div className="flex--column" style={{ gap: "1.5rem" }}>
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
          </div>
        </div>
      </section>
    );
  };

  return render();
};

export default Contact;

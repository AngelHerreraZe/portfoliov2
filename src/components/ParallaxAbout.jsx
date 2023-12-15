import React, { useEffect, useState } from "react";
import texts from "../assets/texts/text.json";

const ParallaxAbout = ({ isSpanish }) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      setScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const elementStyle = {
    transform: `translate3d(0, ${scrollY}px, 0)`,
    transition: "transform 0.3s ease",
    opacity: 0.85,
  };
  return (
    <div className="a-l-w">
      <div className="a-lp" id="a-lp" style={elementStyle}></div>
      <div className="first-item-aside">
        <div>
          {isSpanish ? (
            <h2>{texts[0].nombre.es}</h2>
          ) : (
            <h2>{texts[0].nombre.en}</h2>
          )}
          {isSpanish ? (
            <p>{texts[0].presentacion.es}</p>
          ) : (
            <p>{texts[0].presentacion.en}</p>
          )}
        </div>
        <div>
          {isSpanish ? <h2>¿Quien Soy?</h2> : <h2>Who am i?</h2>}
          {isSpanish ? (
            <p>{texts[0].quienSoy.es}</p>
          ) : (
            <p>{texts[0].quienSoy.en}</p>
          )}
        </div>
      </div>
      <div className="second-item-aside">
        {isSpanish ? <h2>¿Por que yo?</h2> : <h2>Why me?</h2>}
        {isSpanish ? (
          <p>{texts[0].porQueYo.es}</p>
        ) : (
          <p>{texts[0].porQueYo.en}</p>
        )}
      </div>
      <div className="third-item-aside">
        {isSpanish ? <h2>Hablemos</h2> : <h2>Let's Talk</h2>}
        {isSpanish ? (
          <p>{texts[0].hablemos.es}</p>
        ) : (
          <p>{texts[0].hablemos.en}</p>
        )}
      </div>
      <div className="fourt-item-aside">
        {isSpanish ? <h2>Gracias</h2> : <h2>Thank you</h2>}
        {isSpanish ? (
          <p>{texts[0].agradecimiento.es}</p>
        ) : (
          <p>{texts[0].agradecimiento.en}</p>
        )}
        <div className="contact-aside">
          <a href="mailto:angelherrera1996@gmail.com" className="align-text">
            <i className="bx bx-envelope icon-aside"></i>
            <p className="text-contact">angelherrera1996@gmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/angel-herrera-zer/"
            target="_blank"
            className="align-text"
          >
            <i className="bx bxl-linkedin icon-aside"></i>
            <p className="text-contact">Angel Herrera Zermeño</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ParallaxAbout;

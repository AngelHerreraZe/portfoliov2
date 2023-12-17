import React, { useState } from "react";
import texts from "../assets/texts/text.json";
import ParallaxAbout from "./ParallaxAbout";

const AboutDesktop = () => {
  const [isSpanish, setIsSpanish] = useState(true);
  return (
    <div className="about-container-desktop desktop">
      <ParallaxAbout isSpanish={isSpanish} />
      <div className="first-item-about">
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
        {isSpanish ? <h2>¿Quien Soy?</h2> : <h2>Who am i?</h2>}
        {isSpanish ? (
          <p>{texts[0].quienSoy.es}</p>
        ) : (
          <p>{texts[0].quienSoy.en}</p>
        )}
      </div>
      <div className="second-item-about">
        {isSpanish ? <h2>¿Por que yo?</h2> : <h2>Why me?</h2>}
        {isSpanish ? (
          <p>{texts[0].porQueYo.es}</p>
        ) : (
          <p>{texts[0].porQueYo.en}</p>
        )}
      </div>
      <div className="fourt-item-about">
        {isSpanish ? <h2>Hablemos</h2> : <h2>Let's Talk</h2>}
        {isSpanish ? (
          <p>{texts[0].hablemos.es}</p>
        ) : (
          <p>{texts[0].hablemos.en}</p>
        )}
        {isSpanish ? <h2>Gracias</h2> : <h2>Thank you</h2>}
        {isSpanish ? (
          <p>{texts[0].agradecimiento.es}</p>
        ) : (
          <p>{texts[0].agradecimiento.en}</p>
        )}
      </div>

      <div className="icons">
        <a href="mailto:angelherrera1996@gmail.com" className="align-text">
          <i className="bx bx-envelope icon"></i>
          <p className="text-contact">angelherrera1996@gmail.com</p>
        </a>
        <a
          href="https://www.linkedin.com/in/angel-herrera-zer/"
          target="_blank"
          className="align-text"
        >
          <i className="bx bxl-linkedin icon"></i>
          <p className="text-contact">Angel Herrera Zermeño</p>
        </a>
      </div>
    </div>
  );
};

export default AboutDesktop;

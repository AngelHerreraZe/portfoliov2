import React from "react";
import texts from "../assets/texts/text.json";

const AboutMobile = () => {
  return (
    <div className="about-container mobile">
      {<h2>{texts[0].nombre.es}</h2>}
      {<p>{texts[0].presentacion.es}</p>}
      {<h2>¿Quien Soy?</h2>}
      {<p>{texts[0].quienSoy.es}</p>}
      {<h2>¿Por que yo?</h2>}
      {<p>{texts[0].porQueYo.es}</p>}
      {<h2>Hablemos</h2>}
      {<p>{texts[0].hablemos.es}</p>}
      {<h2>Gracias</h2>}
      {<p>{texts[0].agradecimiento.es}</p>}
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

export default AboutMobile;

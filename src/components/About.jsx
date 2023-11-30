import React, { useState } from "react";
import texts from "../assets/texts/text.json";
import profile from "../assets/imgs/profile.png";

const About = () => {
  const [isSpanish, setIsSpanish] = useState(true);

  return (
    <div className="about-container">
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
      {isSpanish ? <h2>¿Por que yo?</h2> : <h2>Why me?</h2>}
      {isSpanish ? (
        <p>{texts[0].porQueYo.es}</p>
      ) : (
        <p>{texts[0].porQueYo.en}</p>
      )}
      {isSpanish ? <h2>Proyectos destacados</h2> : <h2>Featured projects</h2>}
      {texts[0].proyectosDestacados.map((text) => (
        <div key={text.nombre.es}>
          {isSpanish ? <h3>{text.nombre.es}</h3> : <h3>{text.nombre.en}</h3>}
          {isSpanish ? (
            <p>{text.descripcion.es}</p>
          ) : (
            <p>{text.descripcion.en}</p>
          )}
        </div>
      ))}
      {isSpanish ? <h2>Habilidades técnicas</h2> : <h2>Technical skills</h2>}
      {isSpanish ? <h3>Frontend</h3> : <h3>Frontend</h3>}
      {isSpanish ? (
        <p>{texts[0].habilidadesTecnicas.frontend.es[0]}</p>
      ) : (
        <p>{texts[0].habilidadesTecnicas.frontend.en[0]}</p>
      )}
      {isSpanish ? (
        <p>{texts[0].habilidadesTecnicas.frontend.es[1]}</p>
      ) : (
        <p>{texts[0].habilidadesTecnicas.frontend.en[1]}</p>
      )}
      {isSpanish ? (
        <p>{texts[0].habilidadesTecnicas.frontend.es[2]}</p>
      ) : (
        <p>{texts[0].habilidadesTecnicas.frontend.en[2]}</p>
      )}
      {isSpanish ? (
        <p>{texts[0].habilidadesTecnicas.frontend.es[3]}</p>
      ) : (
        <p>{texts[0].habilidadesTecnicas.frontend.en[3]}</p>
      )}
      {isSpanish ? <h3>Backend</h3> : <h3>Backend</h3>}
      {isSpanish ? (
        <p>{texts[0].habilidadesTecnicas.backend.es[0]}</p>
      ) : (
        <p>{texts[0].habilidadesTecnicas.backend.en[0]}</p>
      )}
      {isSpanish ? (
        <p>{texts[0].habilidadesTecnicas.backend.es[1]}</p>
      ) : (
        <p>{texts[0].habilidadesTecnicas.backend.en[1]}</p>
      )}
      {isSpanish ? (
        <p>{texts[0].habilidadesTecnicas.backend.es[2]}</p>
      ) : (
        <p>{texts[0].habilidadesTecnicas.backend.en[2]}</p>
      )}
      {isSpanish ? <h3>Herramientas y otros</h3> : <h3>Tools and other</h3>}
      {isSpanish ? (
        <p>{texts[0].habilidadesTecnicas.herramientasYOtros.es[0]}</p>
      ) : (
        <p>{texts[0].habilidadesTecnicas.herramientasYOtros.en[0]}</p>
      )}
      {isSpanish ? (
        <p>{texts[0].habilidadesTecnicas.herramientasYOtros.es[1]}</p>
      ) : (
        <p>{texts[0].habilidadesTecnicas.herramientasYOtros.en[1]}</p>
      )}
      {isSpanish ? (
        <p>{texts[0].habilidadesTecnicas.herramientasYOtros.es[2]}</p>
      ) : (
        <p>{texts[0].habilidadesTecnicas.herramientasYOtros.en[2]}</p>
      )}
      {isSpanish ? <h2>¿Que busco?</h2> : <h2>What am I looking for?</h2>}
      {isSpanish ? (
        <p>{texts[0].queBusco.es}</p>
      ) : (
        <p>{texts[0].queBusco.en}</p>
      )}
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
      <img src={profile} alt="" className="profile-pic" />
      <div className="icons">
        <a href="mailto:angelherrera1996@gmail.com" className="align-text">
          <i className="bx bx-envelope icon"></i>
          <p className="text-contact">angelherrera1996@gmail.com</p>
        </a>
        <a href="https://www.linkedin.com/in/angel-herrera-zer/" target="_blank" className="align-text">
          <i className="bx bxl-linkedin icon"></i>
          <p className="text-contact">Angel Herrera Zermeño</p>
        </a>
      </div>
    </div>
  );
};

export default About;

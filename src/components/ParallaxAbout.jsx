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
      <div className="second-item-aside">
        {isSpanish ? <h2>¿Quien Soy?</h2> : <h2>Who am i?</h2>}
        {isSpanish ? (
          <p>{texts[0].quienSoy.es}</p>
        ) : (
          <p>{texts[0].quienSoy.en}</p>
        )}
      </div>
      <div className="third-item-aside">
        {isSpanish ? <h2>¿Por que yo?</h2> : <h2>Why me?</h2>}
        {isSpanish ? (
          <p>{texts[0].porQueYo.es}</p>
        ) : (
          <p>{texts[0].porQueYo.en}</p>
        )}
      </div>
      <div className="fourt-item-aside">
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
      </div>
      <div className="third-item-aside">
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
      </div>
      <div className="fourt-item-aside">
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
      </div>
    </div>
  );
};

export default ParallaxAbout;

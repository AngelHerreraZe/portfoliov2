import React, { useRef, useState } from "react";
import ecommerceReact from "../assets/imgs/ecommerce-react.png";
import ecommerceJs from "../assets/imgs/ecommerce-js-vanilla.png";
import pokedex from "../assets/imgs/pokedex.png";
import rickAndMorty from "../assets/imgs/rick-morty.png";
import Modal from "./Modal";
import { motion, useScroll, useTransform } from "framer-motion";

const Work = () => {
  const urls = [
    "https://libre-mercadeo.netlify.app/",
    "https://ecommerce-angel-isaias.netlify.app/",
    "https://pokedex-app-ahz-ihg.netlify.app/",
    "https://rickandmortyahz.netlify.app/",
  ];

  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  function Image({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
    return (
      <section>
        <div ref={ref}>
          <a href={urls[id.id - 1]} target="_blank">
            <img src={id.url} alt="" className="img-parallax" />
          </a>
        </div>
        <motion.h2 className="text-home" style={{ y }}>
          {id.name}
        </motion.h2>
        <p className="footer-text">{`*Click on the image to go ->`}</p>
      </section>
    );
  }
  const [modal, setModal] = useState(false);
  const [imgToShow, setImgToShow] = useState(0);
  const imgArray = [
    { id: 1, url: ecommerceReact, name: "Eccomerce React" },
    { id: 2, url: ecommerceJs, name: "Eccomerce JS Vanilla" },
    { id: 3, url: pokedex, name: "Pokedex" },
    { id: 4, url: rickAndMorty, name: "Rick and morty" },
  ];

  const imgClicked = (img) => {
    setModal(true);
    setImgToShow(img);
  };
  if (modal) {
    return (
      <Modal
        modal={modal}
        setModal={setModal}
        imgToShow={imgToShow}
        setImgToShow={setImgToShow}
      />
    );
  } else {
    return (
      <div>
        <div className="work-content">
          {imgArray.map((img) => (
            <div className="relative" key={imgArray[imgArray.indexOf(img)].id}>
              <img
                src={imgArray[imgArray.indexOf(img)].url}
                alt=""
                className="card"
                onClick={() => imgClicked(imgArray.indexOf(img))}
              />
            </div>
          ))}
        </div>
        <div className="desktop">
          {imgArray.map((image) => (
            <Image id={image} key={image.id} />
          ))}
        </div>
      </div>
    );
  }
};

export default Work;

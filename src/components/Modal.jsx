import React, { useEffect } from "react";
import ecommerceReact from "../assets/imgs/ecommerce-react.png";
import ecommerceJs from "../assets/imgs/ecommerce-js-vanilla.png";
import pokedex from "../assets/imgs/pokedex.png";
import rickAndMorty from "../assets/imgs/rick-morty.png";

const Modal = ({ modal, setModal, imgToShow, setImgToShow }) => {
  const hide = () => {
    let modal = document.getElementById("modal");
    modal.classList.add("hidden");
    setTimeout(() => {
      setModal(false);
    }, "980");
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hide();
    }
    if (event.key === "ArrowRight") {
      setImgToShow(++imgToShow);
      if (imgToShow === 4) {
        setImgToShow(0);
      }
    } else if (event.key === "ArrowLeft") {
      setImgToShow(--imgToShow);
      if (imgToShow === -1) {
        setImgToShow(3);
      }
    }
  });

  const imgArray = [ecommerceReact, ecommerceJs, pokedex, rickAndMorty];
  const urls = [
    "https://libre-mercadeo.netlify.app/",
    "https://ecommerce-angel-isaias.netlify.app/",
    "https://pokedex-app-ahz-ihg.netlify.app/",
    "https://rickandmortyahz.netlify.app/",
  ];

  const modifyImg = (sign) => {
    if (sign === "+") {
      setImgToShow(++imgToShow);
      if (imgToShow === 4) {
        setImgToShow(0);
      }
    } else {
      setImgToShow(--imgToShow);
      if (imgToShow === -1) {
        setImgToShow(3);
      }
    }
  };
  return (
    <div className="galery visible" id="modal">
      <i className="bx bx-x close-btn" onClick={() => hide()}></i>
      <div className="galery-container">
        <p className="btn-galery-minus" onClick={() => modifyImg("-")}>{`-`}</p>
        <a href={urls[imgToShow]} target="_blank">
          <img src={imgArray[imgToShow]} alt="" className="galery-img" />
        </a>
        <p className="btn-galery-plus" onClick={() => modifyImg("+")}>{`+`}</p>
      </div>
      <div className="previews">
        {imgArray.map((img) => (
          <img
            src={img}
            alt=""
            className="preview-img"
            onClick={() => setImgToShow(imgArray.indexOf(img))}
            key={imgArray.indexOf(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default Modal;

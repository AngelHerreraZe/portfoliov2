import React, { useState } from "react";
import ecommerceReact from "../assets/imgs/ecommerce-react.png";
import ecommerceJs from "../assets/imgs/ecommerce-js-vanilla.png";
import pokedex from "../assets/imgs/pokedex.png";
import rickAndMorty from "../assets/imgs/rick-morty.png";
import Modal from "./Modal";

const Work = () => {
  const [modal, setModal] = useState(false);
  const [imgToShow, setImgToShow] = useState(0);
  const imgArray = [ecommerceReact, ecommerceJs, pokedex, rickAndMorty];

  const imgClicked = (img) => {
    setModal(true);
    setImgToShow(img)
  }

  if (modal) {
    return <Modal modal={modal} setModal={setModal} imgToShow={imgToShow} setImgToShow={setImgToShow}/>;
  } else {
    return (
      <div className="work-content">
        {imgArray.map((img) => (
          <div className="relative" key={imgArray.indexOf(img)}>
          <img src={img} alt="" className="card" onClick={() => imgClicked(imgArray.indexOf(img))}/>
        </div>
        ))}
      </div>
    );
  }
};

export default Work;

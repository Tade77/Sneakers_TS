import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Data";
import { modalType, productsType } from "../type";
import Modal from "./Modal/Modal";
import "../App.css";

const Preview = ({ openModal, setOpenModal }: modalType) => {
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const { imgId } = useParams();

  useEffect(() => {
    const viewImg = products.find(
      (product: productsType) => product.id === imgId
    );
    setImage(viewImg.image);
    setPrice(viewImg.price);
  }, []);
  return (
    <div>
      {openModal && (
        <Modal>
          <div className="modal" onClick={() => setOpenModal(false)}>
            <img style={{}} src={image} />
          </div>
          <h2>{price}</h2>
        </Modal>
      )}
    </div>
  );
};

export default Preview;

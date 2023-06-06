import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../Data";
import { modalType, productsType } from "../type";
import Modal from "./Modal/Modal";
import "../App.css";

const Preview = ({ openModal, setOpenModal }: modalType) => {
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const { imgId } = useParams();
  const navigate = useNavigate();

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
          <div className="modal">
            <div className="cancel--btn">
              <img
                onClick={() => navigate("/women")}
                src="/iconmonstr-x-mark-lined.svg"
                alt=""
              />
            </div>
            <img
              style={{ borderRadius: "5px", height: "250px", width: "250px" }}
              src={image}
            />
          </div>
          <h2 style={{ color: "#fff" }}>{price}</h2>
        </Modal>
      )}
    </div>
  );
};

export default Preview;

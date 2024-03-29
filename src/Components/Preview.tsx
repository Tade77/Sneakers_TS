import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../Data";
import { modalType, productsType } from "../type";
import Modal from "./Modal/Modal";
import "../App.css";

const Preview = ({ openModal, setOpenModal }: modalType) => {
  const { imgId } = useParams();
  const navigate = useNavigate();

  const viewImg = products.find(
    (product: productsType) => product.id === Number(imgId)
  );

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
            <div className="prev">
              <img
                className="prev--img"
                src="/public/icon-previous.svg"
                alt=""
              />
            </div>
            <div>
              <img
                style={{ borderRadius: "5px", height: "300px", width: "300px" }}
                src={viewImg?.image}
              />
            </div>
            <div className="next">
              <img className="next--img" src="/public/icon-next.svg" alt="" />
            </div>
          </div>
          <h2 style={{ color: "#fff" }}>{viewImg?.price}</h2>
        </Modal>
      )}
    </div>
  );
};

export default Preview;

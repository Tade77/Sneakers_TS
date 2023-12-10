import React, { useState } from "react";
import "./wCollection.css";
import { products } from "../../Data";
import { Link } from "react-router-dom";
import { modalType, productsType } from "../../type";
import { useProduct } from "../Context/ProductContext";

const WomenCollection = ({ setOpenModal, openModal }: modalType) => {
  return (
    <div className={"product--container"}>
      <aside className="product--wrapper">
        <div className="product">
          <img className="product--img" src="/image-product-1.jpg" alt="" />
          <div className="img-thumb">
            {products.map((product: productsType) => (
              <div key={product.id}>
                <Link to={`/women/${product.id}`}>
                  <img
                    className="thumb"
                    onClick={() => setOpenModal(true)}
                    src={product.image}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </aside>
      <aside className="call--action">
        <div className="select">
          <div className="counter">
            <img onClick={() => ""} src="/icon-minus.svg" alt="" />
            <p className="display">addCart</p>
            <img src="/icon-plus.svg" alt="" />
          </div>
          <div className="wrap">
            <button className="btn">
              <img className="cart--logo" src="/icon-cart.svg" alt="" />
              Add to cart
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default WomenCollection;

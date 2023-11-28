import React, { useState } from "react";
import "./wCollection.css";
import { products } from "../../Data";
import { Link } from "react-router-dom";
import { modalType, productsType } from "../../type";
import { useProduct } from "../Context/ProductContext";

const WomenCollection = ({ setOpenModal, openModal }: modalType) => {
  return (
    <div className={"pro-wrapper"}>
      <aside className="product">
        <img className="product--img" src="/image-product-1.jpg" alt="" />
        <div className="img-thumb">
          {products.map((product: productsType) => (
            <Link to={`/women/${product.id}`}>
              <img
                key={product.id}
                className="thumb"
                onClick={() => setOpenModal(true)}
                src={product.image}
              />
            </Link>
          ))}
        </div>
      </aside>
      <aside className="call--action">
        <p className="name">SNEAKER COMPANY</p>
        <p className="header">Fall Limited Edition</p>
        <span className="header">Sneaker</span>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          architecto facere est error ratione incidunt a soluta adipisci fuga
          quaerat quia voluptate tempora doloremque alias atque, eveniet quam
          modi earum!
        </p>
        <p className="price">
          $125.00 <span className="rating">50%</span>
        </p>
        <span className="bf--price">
          <s>$250.00</s>
        </span>
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

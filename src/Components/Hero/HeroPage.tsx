import React from "react";
import "./Hero.css";
const HeroPage = () => {
  const products = [
    "/image-product-1-thumbnail.jpg",
    "/image-product-2-thumbnail.jpg",
    "/image-product-3-thumbnail.jpg",
    "/image-product-4-thumbnail.jpg",
  ];

  return (
    <div className="pro-wrapper">
      <aside className="product">
        <img className="product--img" src="/image-product-1.jpg" alt="" />
        <div className="img-thumb">
          {products.map((product) => (
            <img className="thumb" src={product} />
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
          $125 <span className="rating">50%</span>
          <p className="bf--price">$250</p>
        </p>
        <div className="counter">
          <img src="/public/icon-minus.svg" alt="" />
          <p className="display">0</p>
          <img src="/public/icon-plus.svg" alt="" />
        </div>
      </aside>
    </div>
  );
};

export default HeroPage;

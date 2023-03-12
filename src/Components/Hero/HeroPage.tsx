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
    <div>
      <aside className="product">
        <img className="product--img" src="/image-product-1.jpg" alt="" />
        <div className="img-thumb">
          {products.map((product) => (
            <img className="thumb" src={product} />
          ))}
        </div>
      </aside>
    </div>
  );
};

export default HeroPage;

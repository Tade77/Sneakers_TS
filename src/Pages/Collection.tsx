import React from "react";
import { collections } from "../Data";
import { collectionsType } from "../type";
import "../App.css";

const Collection = () => {
  return (
    <div className="collections--card">
      {collections.map(({ id, name, image, price }: collectionsType) => (
        <div className="col" key={id}>
          <img className="collection--img" src={image} alt="" />
          <div className="name-price">
            <p>{name}</p>
            <h1>{price}</h1>
          </div>
          <p className="order">Order Now</p>
        </div>
      ))}
    </div>
  );
};

export default Collection;

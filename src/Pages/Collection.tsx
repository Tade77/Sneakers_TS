import React from "react";
import { collections } from "../Data";
import { collectionsType } from "../type";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Collection = () => {
  const navigate = useNavigate();
  return (
    <div className="collections--card">
      {collections.map((collection: collectionsType) => (
        <div className="col" key={collection.id}>
          <img className="collection--img" src={collection.image} alt="" />
          <div className="name-price">
            <p>{collection.name}</p>
            <h1>{collection.price}</h1>
          </div>
          <div onClick={() => navigate(`/${collection.id}`)}>
            <p className="order">Order Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;

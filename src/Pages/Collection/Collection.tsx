import React, { useState } from "react";
import { collections } from "../../Data";
import { addCartType, collectionsType } from "../../type";
import "./CollectionStyle.css";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const [addCart, setAddCart] = useState(0);
  const handleCount = () => {
    setAddCart((prev) => prev + 1);
  };

  const navigate = useNavigate();
  return (
    <div className="collections--card">
      {collections.map((collection: collectionsType) => (
        <div className="col" key={collection.id}>
          <img className="collection--img" src={collection.image} alt="" />
          <div className="name-price">
            <p>{collection.name}</p>
            <h1 className="price">{collection.price}</h1>
          </div>
          <div onClick={() => handleCount}>
            <p className="order">Add to cart</p>
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

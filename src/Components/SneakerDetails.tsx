import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collections } from "../Data";
import Collection from "../Pages/Collection";

const SneakerDetails = () => {
  const [showImage, setShowImage] = useState("");
  const [showName, setShowName] = useState("");
  const [showPrice, setShowPrice] = useState("");
  const { sneakId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const viewProduct = collections.find(
      (collection) => collection.id === sneakId
    );
    setShowImage(viewProduct.image);
    setShowName(viewProduct.name);
    setShowPrice(viewProduct.price);
  }, []);
  return (
    <div className="view--product">
      <div className="sneaker--img">
        <img src={showImage} alt="" />
      </div>
      <div className="shoe--desc">
        <aside className="name--price">
          <h1>{showName}</h1>
          <h2>{showPrice}</h2>
        </aside>
        <aside className="description">
          <div className="color-select">
            <label>Color:</label>
            <select name="Color" id="color">
              <option value="light grey">Light grey</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="red">Red</option>
            </select>
          </div>
          <div className="size-select">
            <label> Shoe Size:</label>
            <select name="size" id="size">
              <option value="number">38</option>
              <option value="number">40</option>
              <option value="number">42</option>
              <option value="number">43</option>
              <option value="number">45</option>
            </select>
          </div>

          <div className="btns">
            <button className="btn--cart">ADD TO CART</button>
            <button
              onClick={() => navigate("/online-payment")}
              className="btn--buy"
            >
              BUY NOW
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SneakerDetails;

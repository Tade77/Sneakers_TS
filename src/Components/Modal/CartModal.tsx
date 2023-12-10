import React, { useState } from "react";
import "./Modal.css";
import { useProduct } from "../Context/ProductContext";

type cartModType = {
  setOpenCart: (value: boolean) => void;
};
const CartModal = ({ setOpenCart }: cartModType) => {
  const { addCart, setAddCart } = useProduct();
  const deleteCart = () => {
    setAddCart(0);
  };
  return (
    <div className="cart--modal">
      <div className="close" onClick={() => setOpenCart(false)}>
        <img src="/public/icon-close.svg" alt="" />
      </div>
      <div>
        <h1 className="modal--header">Cart</h1>
      </div>
      <hr />
      <div className="cart--wrapper">
        <div>
          <p style={{ color: "#696a6e" }}>Number of items selected:</p>
          <p style={{ color: "#696a6e" }}>
            <span style={{ fontWeight: 700, color: "black" }}>= {addCart}</span>
          </p>
        </div>
        <div onClick={deleteCart}>
          <img src="/icon-delete.svg" alt="" />
        </div>
      </div>

      <button className="checkout--btn">Checkout</button>
    </div>
  );
};

export default CartModal;

import React, { useState } from "react";
import "./Modal.css";
import { useProduct } from "../Context/ProductContext";
import { collections } from "../../Data";

type cartModType = {
  setOpenCart: (value: boolean) => void;
};
const CartModal = ({ setOpenCart }: cartModType, id: number) => {
  const { addCart, setAddCart, items, setItems } = useProduct();
  const deleteCart = () => {
    setAddCart(0);
  };
  const item = collections.find((i) => i.id === id);
  console.log(item);

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
          <img src={item?.image} alt="" />
          <p>{item?.name}</p>
          {/* <p style={{ color: "#696a6e" }}>Number of items selected:</p>
          <p style={{ color: "#696a6e" }}>
            <span style={{ fontWeight: 700, color: "black" }}>= {addCart}</span>
          </p> */}
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

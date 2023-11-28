import React, { useState } from "react";
import "./Modal.css";
import { useProduct } from "../Context/ProductContext";
import { products } from "../../Data";

const CartModal = () => {
  const [addCart, setAddCart] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  return (
    <div onClick={() => setOpenCart(false)} className="cart--modal">
      <div>
        <h1 className="modal--header">Cart</h1>
      </div>
      <hr />
      <div className="cart--wrapper">
        <div>
          <p style={{ color: "#696a6e" }}>Full limited edition sneaker</p>
          <p style={{ color: "#696a6e" }}>
            x {addCart}
            <span style={{ fontWeight: 700, color: "black" }}>= 39</span>
          </p>
        </div>
        <div>
          <img src="/icon-delete.svg" alt="" />
        </div>
      </div>

      <button className="checkout--btn">Checkout</button>
    </div>
  );
};

export default CartModal;

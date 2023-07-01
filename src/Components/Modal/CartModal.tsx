import React, { useState } from "react";
import "./Modal.css";
import { useProduct } from "../Context/ProductContext";
import { products } from "../../Data";

const CartModal = (id: number) => {
  const { setOpenCart, addCart } = useProduct();

  const displayItem = products.find((item, id) => item.id === item.id);

  return (
    <div onClick={() => setOpenCart(false)} className="cart--modal">
      <div>
        <h1 style={{ position: "relative", left: "-160px" }}>Cart</h1>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "50px",
        }}
      >
        {}
        <div>
          <img
            style={{ height: "50px", width: "50px", borderRadius: "5px" }}
            src={displayItem?.image}
            alt=""
          />
        </div>
        <div>
          <p style={{ color: "#696a6e" }}>Full limited edition sneaker</p>
          <p style={{ color: "#696a6e" }}>
            {displayItem?.price}x {addCart}
            <span style={{ fontWeight: 700, color: "black" }}>= 39</span>
          </p>
        </div>
        <div>
          <img src="/icon-delete.svg" alt="" />
        </div>
      </div>

      <button
        style={{
          backgroundColor: "#ff7d1b",
          padding: "15px 150px",
          borderRadius: "10px",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontWeight: 500,
          fontSize: "16px",
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default CartModal;

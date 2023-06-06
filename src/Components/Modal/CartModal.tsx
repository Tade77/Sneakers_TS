import React from "react";
import { cartModalType } from "../../type";
import "./Modal.css";

const CartModal = ({ openCart, setOpenCart }: cartModalType) => {
  return (
    <div onClick={() => setOpenCart(false)} className="cart--modal">
      <div>
        <h1 style={{ position: "relative", left: "-160px" }}>Cart</h1>
      </div>
      <div style={{}}></div>
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
        <div>
          <img
            style={{ height: "50px", width: "50px", borderRadius: "5px" }}
            src="/public/image-product-1-thumbnail.jpg"
            alt=""
          />
        </div>
        <div>
          <p style={{ color: "#696a6e" }}>Full limited edition sneaker</p>
          <p style={{ color: "#696a6e" }}>
            $125.00 x3{" "}
            <span style={{ fontWeight: 700, color: "black" }}>$375</span>
          </p>
        </div>
        <div>
          <img src="/public/icon-delete.svg" alt="" />
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

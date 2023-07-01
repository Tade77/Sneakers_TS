import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import { useProduct } from "../Context/ProductContext";

const ToastComponent = () => {
  const { showToast, setToast } = useProduct();
  return (
    <div>
      <Toast
        onClose={() => setToast(false)}
        autohide
        show={showToast}
        delay={3000}
      >
        {/* <Toast.Header style={{ color: "green" }}>Welcome</Toast.Header> */}
        <Toast.Body
          style={{
            backgroundColor: "#fff",
            color: "green",
            height: "20px",
            width: "150px",
            borderRadius: "5px",
          }}
        >
          Login Successful
        </Toast.Body>
      </Toast>
      <button style={{ margin: "30px 0" }} onClick={() => setToast(true)}>
        Show Toast
      </button>
    </div>
  );
};

export default ToastComponent;

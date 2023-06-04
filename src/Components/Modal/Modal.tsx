// import React, { ReactNode, useState } from "react";
import "./Modal.css";

const Modal = ({ children }: any) => {
  return <div className="overlay">{children}</div>;
};

export default Modal;

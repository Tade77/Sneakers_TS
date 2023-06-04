import React from "react";

const Modal = ({ children }: any) => {
  return <div className="overlay">{children}</div>;
};

export default Modal;

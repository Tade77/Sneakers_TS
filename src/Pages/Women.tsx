import React from "react";
import WomenCollection from "../Components/Women/WomenCollection";
import { modalType } from "../type";

const Women = ({ setOpenModal, openModal }: modalType) => {
  return (
    <div>
      <WomenCollection setOpenModal={setOpenModal} openModal={openModal} />
    </div>
  );
};

export default Women;

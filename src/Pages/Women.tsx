import React from "react";
import WomenCollection from "../Components/Women/WomenCollection";
import { modalType } from "../type";

const Women = ({ setOpenModal, openModal }: modalType) => {
  return (
    <div>
      <WomenCollection
        setOpenModal={setOpenModal}
        openModal={openModal}
        children={undefined}
      />
    </div>
  );
};

export default Women;

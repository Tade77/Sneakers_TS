import { ReactNode } from "react";

export type navitems = {
  name: string;
  path: string;
};
export type productsType = {
  id: string;
  image: string;
  price: string;
};
export type modalType = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

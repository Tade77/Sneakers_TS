export type navitems = {
  name: string;
  path: string;
};
export type productsType = {
  id: number;
  image: string;
  price: string;
};
export type modalType = {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};
export type cartModalType = {
  openCart: boolean;
  setOpenCart: (value: boolean) => void;
};
export type addCartType = {
  addCart: number;
  setAddCart: Function;
};
export type collectionsType = {
  id: number;
  name: string;
  image: string;
  price: string;
};
export type userType = {
  email: string;
  password: string;
};

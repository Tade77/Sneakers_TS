import { ReactNode, createContext, useContext, useState } from "react";
import { products } from "../../Data";

type productContextType = {
  openCart: boolean;
  addCart: number;
  setOpenCart: (value: boolean) => boolean;
  setAddCart: (value: number) => number;
  AddToCart: () => number;
  totalPrice: number;
};
const ProductContext = createContext({} as productContextType);

export const useProduct = () => {
  return useContext(ProductContext);
};
type ProductContextProviderProps = {
  children: ReactNode;
};

export const ProductContextProvider = ({
  children,
}: ProductContextProviderProps) => {
  const [openCart, setOpenCart] = useState(false);
  const [addCart, setAddCart] = useState(0);
  const AddToCart = () => {
    setAddCart(addCart + 1);
  };
  const totalPrice = products.reduce((accumulator, product) => {
    return accumulator + parseFloat(product.price);
  }, 0);

  const context = {
    openCart: openCart,
    addCart: addCart,
    setOpenCart: setOpenCart,
    setAddCart: setAddCart,
    AddToCart: AddToCart,
    totalPrice: totalPrice,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

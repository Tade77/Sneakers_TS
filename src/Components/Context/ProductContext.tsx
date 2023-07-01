import { ReactNode, createContext, useContext, useState } from "react";
import { products } from "../../Data";

type productContextType = {
  openCart: boolean;
  addCart: number;
  setOpenCart: (value: boolean) => boolean;
  setAddCart: (value: number) => number;
  AddToCart: () => number;
  showToast: boolean;
  setToast: (value: boolean) => boolean;
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
  const [showToast, setToast] = useState(false);

  const AddToCart = () => {
    setAddCart(addCart + 1);
  };

  const context = {
    openCart: openCart,
    addCart: addCart,
    setOpenCart: setOpenCart,
    setAddCart: setAddCart,
    AddToCart: AddToCart,
    showToast: showToast,
    setToast: setToast,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

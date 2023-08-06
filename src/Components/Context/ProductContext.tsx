import { ReactNode, createContext, useContext, useState } from "react";
import { products } from "../../Data";

type cartItem = {
  id: number;
  addCart: number;
};

type productContextType = {
  getQuantity: (id: number) => number;
  openCart: boolean;
  addCart: number;
  setOpenCart: (value: boolean) => boolean;
  setAddCart: (value: number) => void;
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
  const [addCart, setAddCart] = useState<cartItem[]>([]);
  const [showToast, setToast] = useState(false);

  const getQuantity = (id: number) => {
    return addCart.find((item) => item.id === id)?.addCart || 0;
  };

  const AddToCart = (id: number) => {
    setAddCart((curr) => {
      if (curr.find((item) => item.id === id) == null) {
        return [...curr, { id, addCart: 1 }];
      } else {
        return curr.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.addCart + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const context = {
    getQuantity: getQuantity,
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

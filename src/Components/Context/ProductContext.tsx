import { ReactNode, createContext, useContext, useState } from "react";
import { products } from "../../Data";
import { pb } from "../../Pocketbase";
import { useNavigate } from "react-router-dom";
import { userType } from "../../type";

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
  login: (email: string, password: string) => void;
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
  const userModel = pb.authStore.model as any;

  const [isLoading, setIsLoading] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [addCart, setAddCart] = useState<cartItem[]>([]);
  const [showToast, setToast] = useState(false);
  const [user, setUser] = useState<userType | null>(userModel);

  // const navigate = useNavigate();

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

  const login = async ({ email, password }: any) => {
    setIsLoading(true);
    try {
      setIsLoading;
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      if (authData.record) {
        const userInfo = pb.authStore.model?.id;
        setUser(authData.record as any);
        alert("login Successful");
        setIsLoading;
        console.log(userInfo);
      }
    } catch (error) {
      setIsLoading;
      console.log("Something went wrong");
    }
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
    login: login,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

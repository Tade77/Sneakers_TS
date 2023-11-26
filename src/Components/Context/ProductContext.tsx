import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
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
  logout: () => void;
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  register: () => void;
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  const login = useCallback(async (email: string, password: string) => {
    console.log(email, password);

    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      if (authData) {
        console.log("Login successful");
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  }, []);
  const logout = useCallback(() => {
    pb.authStore.clear();
  }, []);

  // example create data
  const register = async () => {
    const data = {
      fullname: "",
      email: "",
      mobile: "",
      password: "",
      passwordConfirm: "",
    };

    const record = await pb.collection("users").create(data);
    console.log(record);
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
    email: email,
    password: password,
    setEmail: setEmail,
    setPassword: setPassword,
    logout: logout,
    register: register,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

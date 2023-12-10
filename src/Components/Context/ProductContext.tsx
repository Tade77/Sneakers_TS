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
  login: (email: string, password: string) => void;
  logout: () => void;
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  addCart: number;
  setAddCart: (value: number) => void;
  productQuantity: () => void;
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addCart, setAddCart] = useState(0);
  const userModel = pb.authStore.model as any;

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
  const productQuantity = () => {
    setAddCart((prev) => prev + 1);
  };

  const context = {
    addCart: addCart,
    setAddCart: setAddCart,
    productQuantity: productQuantity,
    login: login,
    logout: logout,
    setEmail: setEmail,
    setPassword: setPassword,
    email: email,
    password: password,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

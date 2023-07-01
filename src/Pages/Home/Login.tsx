import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";
import ToastComponent from "../../Components/Toast/ToastComponent";
import { useProduct } from "../../Components/Context/ProductContext";
import { pb } from "../../Pocketbase";

type loginProps = {
  email: string;
  password: string;
};
const Login = () => {
  const navigate = useNavigate();
  // const { setToast } = useProduct();
  const [isLoading, setIsloading] = useState(false);
  const accountLogin = async (data: loginProps) => {
    setIsloading(true);
    try {
      const authData = pb
        .collection("user")
        .authWithPassword(data.email, data.password);
    } catch (error) {}
  };
  return (
    <div className="login--container">
      <section className="heros">
        <img className="hero" src="/Women/banner2.jpeg" alt="" />
      </section>
      <section className="login--form">
        <h1 className="header">Login to your account</h1>
        <p>
          Don't have an account?
          <Link to={"/sign_up"}>
            <span className="link">Create an Account</span>
          </Link>
        </p>
        <div className="input--group">
          <input className="inputs" type="email" placeholder="email" />
          <input className="inputs" type="password" placeholder="password" />
          <div className="check">
            <input type="checkbox" />
            <span>keep me logged in</span>
          </div>
          <button onClick={() => navigate("/")} className="btn--login">
            Login
          </button>
        </div>
      </section>
    </div>
  );
};
export default Login;

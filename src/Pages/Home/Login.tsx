import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useProduct } from "../../Components/Context/ProductContext";
import { pb } from "../../Pocketbase";

type loginProps = {
  email: string;
  password: string;
};
const Login = () => {
  // const navigate = useNavigate();
  const [formField, setFormField] = useState({ email: "", password: "" });
  const { login } = useProduct();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formField.email, formField.password);
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
        <form className="input--group" onSubmit={handleLogin}>
          <input
            className="inputs"
            type="email"
            placeholder="email"
            value={formField.email}
            onChange={(e) =>
              setFormField({ ...formField, email: e.target.value })
            }
          />
          <input
            className="inputs"
            type="password"
            placeholder="password"
            value={formField.password}
            onChange={(e) =>
              setFormField({ ...formField, password: e.target.value })
            }
          />
          <div className="check">
            <input type="checkbox" />
            <span>keep me logged in</span>
          </div>
          <button type="submit" className="btn--login">
            Login
          </button>
        </form>
      </section>
    </div>
  );
};
export default Login;

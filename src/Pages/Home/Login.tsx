import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login--container">
      <section className="login--form">
        <h1 className="header">Login to your account</h1>
        <p>
          Don't have an account?{" "}
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
          <button className="btn--login">Login</button>
        </div>
      </section>
      <section className="heros">
        <img className="hero" src="/Women/banner2.jpeg" alt="" />
      </section>
    </div>
  );
};

export default Login;

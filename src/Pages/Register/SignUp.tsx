import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="login--container">
      <section className="heros">
        <img className="hero" src="/Women/banner2.jpeg" alt="" />
      </section>
      <section className="login--form">
        <h1 className="header">Register</h1>
        <p>
          Already have an account?
          <Link to={"/login"}>
            <span className="link">Sign in</span>
          </Link>
        </p>
        <div className="input--group">
          <input className="inputs" type="fullname" placeholder="Fullname" />
          <input className="inputs" type="tel" placeholder="Phone number" />
          <input className="inputs" type="email" placeholder="Email" />
          <input className="inputs" type="password" placeholder="Password" />
          <input
            className="inputs"
            type="password"
            placeholder="Confirm Password"
          />
          <input className="" type="image" src="/public/" placeholder="image" />
          <button onClick={() => navigate("/login")} className="btn--login">
            Submit
          </button>
          <div className="toast-body"></div>
        </div>
      </section>
    </div>
  );
};
export default SignUp;

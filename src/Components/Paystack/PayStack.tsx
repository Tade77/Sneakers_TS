import React from "react";
import Country from "../Country";
import { useNavigate } from "react-router-dom";
import State from "../State";
import "./PayStackStyle.css";

const PayStack = () => {
  const navigate = useNavigate();

  return (
    <div className="payStack-container">
      <section>
        <h2
          style={{ color: "white", marginBottom: "10px", marginLeft: "-190px" }}
        >
          Contact
        </h2>
        <div className="pay--form">
          <div className="contact--form">
            <input type="text" placeholder="email" id="contact" />
            <div className="radio">
              <input type="radio" id="" />
              <span style={{ color: "#fff " }}>
                Email me with news and offers
              </span>
            </div>
            <h2
              style={{
                color: "white",
                marginBottom: "-10px",
                marginLeft: "-130px",
              }}
            >
              Shipping Address
            </h2>
            <div className="shipping--info">
              <div className="shipping">
                <Country />
              </div>
              <div className="province">
                <input type="text" placeholder="City" id="city" />
                <State />
                <input type="number" placeholder="Postal Code" id="code" />
              </div>
              <div>
                <input type="text" placeholder="Phone (optional)" id="phone" />
              </div>
            </div>
            <div className="radio--save">
              <input type="radio" id="" />
              <span style={{ color: "#fff " }}>
                Save this information for next time
              </span>
            </div>
          </div>
        </div>
        <div className="btn-next">
          <p
            onClick={() => navigate(-1)}
            style={{
              cursor: "pointer",
              marginLeft: "-60px",
              marginTop: "10px",
              color: "blue",
            }}
          >
            &lt; Return to cart
          </p>
          <button className="next--btn">Continue</button>
        </div>
      </section>
      {/* <section className="banner"></section> */}
    </div>
  );
};

export default PayStack;

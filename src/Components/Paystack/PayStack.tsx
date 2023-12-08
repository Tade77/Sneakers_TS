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
            <input
              type="text"
              placeholder="email or mobile phone number"
              id="contact"
            />
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
                marginLeft: "-190px",
              }}
            >
              Shipping Address
            </h2>
            <div className="shipping">
              <Country />
            </div>
            <div className="bio">
              <input type="text" placeholder="First name" id="fname" />
              <input type="text" placeholder="Last name" id="lname" />
            </div>
            <input type="text" placeholder="Address" id="address" />
            <input type="text" placeholder="Apartment or suite" id="address" />
            <div className="province">
              <input type="text" placeholder="City" id="city" />
              <State />
              <input type="text" placeholder="Postal Code" id="code" />
            </div>
            <input type="text" placeholder="Phone (optional)" id="phone" />
            <div className="radio">
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
              marginLeft: "-70px",
              marginTop: "10px",
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
